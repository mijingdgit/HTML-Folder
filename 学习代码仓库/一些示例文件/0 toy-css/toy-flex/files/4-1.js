const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const flexItem = document.querySelector(".flex__item");

checkboxes.forEach((checkboxes) => {
  checkboxes.addEventListener("change", (e) => {
    const property = e.target.id;
    if (e.target.checked) {
      const data = document.documentElement.style.setProperty(
        `--${e.target.id}`,
        `auto`
      );
      console.log(e.target.id);

      if (e.target.id === "marginTop") {
        flexItem.style.marginTop = `var(--${e.target.id})`;
      }
      if (e.target.id === "marginRight") {
        flexItem.style.marginRight = `var(--${e.target.id})`;
      }
      if (e.target.id === "marginBottom") {
        flexItem.style.marginBottom = `var(--${e.target.id})`;
      }
      if (e.target.id === "marginLeft") {
        flexItem.style.marginLeft = `var(--${e.target.id})`;
      }
    } else {
      if (e.target.id === "marginTop") {
        flexItem.style.marginTop = `unset`;
      }
      if (e.target.id === "marginRight") {
        flexItem.style.marginRight = `unset`;
      }
      if (e.target.id === "marginBottom") {
        flexItem.style.marginBottom = `unset`;
      }
      if (e.target.id === "marginLeft") {
        flexItem.style.marginLeft = `unset`;
      }
    }
  });
});

console.log(checkboxes);
console.log(flexItem);
