document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("index-title");
  const text = title.textContent;
  title.textContent = "";

  // 文字を分割してspan要素にラップ
  text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.position = "relative";
    span.style.opacity = 0;
    span.style.transition = `all 1s ease ${index * 0.1}s`;

    // 初期位置をランダムに設定
    const direction = index % 4;
    if (direction === 0) span.style.transform = "translateY(-100px)"; // 上
    if (direction === 1) span.style.transform = "translateY(100px)"; // 下
    if (direction === 2) span.style.transform = "translateX(-100px)"; // 左
    if (direction === 3) span.style.transform = "translateX(100px)"; // 右

    title.appendChild(span);

    // アニメーションを開始
    setTimeout(() => {
      span.style.opacity = 1;
      span.style.transform = "translate(0, 0)";
    }, 100);
  });
});
