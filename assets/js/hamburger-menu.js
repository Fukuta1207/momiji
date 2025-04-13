document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburgerMorph");
  const navMorph = document.getElementById("navMorph");

  // ボタンがクリックされたら、アイコンとメニューのactiveクラスをトグル
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMorph.classList.toggle("active");
  });
});
