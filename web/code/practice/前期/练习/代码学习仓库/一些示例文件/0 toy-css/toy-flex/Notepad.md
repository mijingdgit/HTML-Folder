# 关键笔记

## 1-3 Note

place-content 是 align-content 和 justify-content 的简写属性；而 place-items 是 align-items 和 justify-items 的简写属性。即：

```css
.flex__container {
  place-content: center;
  place-items: center;
}
```

等效于：

```css
.flex__container {
  align-content: center;
  justify-content: center;

  align-items: center;
  justify-items: center;
}
```

虽然扩展出来有四个属性，但最终等效于：

```css
.flex__container {
  display: flex;
  align-items: center;
  justify-content: center;
}

// 多行
.flex__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
```
