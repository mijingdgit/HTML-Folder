/*
 * @Author: DsCode
 * @Date: 2020-07-31 13:53:52
 * @LastEditors: DsCode
 * @LastEditTime: 2020-07-31 14:11:35
 * @FilePath: \CSS 可视化\基本图表\main.js
 */

// Get date
const dataSource = "https://s5.ssl.qhres.com/static/b0695e2dd30daa64.json";
const $ = (el) => document.querySelector(el);
let currentCity = null;
let cities;
(async function () {
  const data = await (await fetch(dataSource)).json();
  const regions = d3
    .hierarchy(data)
    .sum((d) => 1)
    .sort((a, b) => b.value - a.value);
  const pack = d3.pack().size([800, 800]).padding(3);
  const root = pack(regions);
  cities = root.children.map((x) => x.children).flat();
  const ctxUnder = $("#under").getContext("2d");
  draw(ctxUnder, root);
  $("#over").addEventListener("mousemove", highlightCity);
})();

function highlightCity(e) {
  const canvas = e.target;
  const ctx = canvas.getContext("2d");
  const clearCanvas = () => ctx.clearRect(0, 0, canvas.width, canvas.height);
  const cursor = getCanvasPos(canvas, e);
  let inSameCity = false;
  const inAnotherCity = cities.some((city) => {
    const dx = cursor.x - city.x;
    const dy = cursor.y - city.y;
    const dist = dx ** 2 + dy ** 2 - city.r ** 2;
    if (dist <= 0) {
      if (currentCity === city) {
        inSameCity = true;
        return false;
      } else clearCanvas();
      currentCity = city;
      draw(ctx, city, { fillStyle: "rgba(255, 0, 0, 0.2)" });
      return true;
    }
  });
  if (!inAnotherCity && !inSameCity) {
    clearCanvas();
    currentCity = null;
  }
}

function getCanvasPos(canvas, e) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (e.clientX - rect.left) * (canvas.width / rect.width),
    y: (e.clientY - rect.top) * (canvas.height / rect.height),
  };
}

function draw(
  ctx,
  node,
  { fillStyle = "rgba(0, 0, 0, 0.2)", textColor = "white" } = {}
) {
  const children = node.children;
  const { x, y, r } = node;
  ctx.fillStyle = fillStyle;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
  if (children) {
    children.forEach((child) => draw(ctx, child));
  } else {
    const name = node.data.name;
    ctx.fillStyle = textColor;
    ctx.font = "1.5rem Arial";
    ctx.textAlign = "center";
    ctx.fillText(name, x, y);
  }
}
