// ตั้งปีปัจจุบันใน footer
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});
