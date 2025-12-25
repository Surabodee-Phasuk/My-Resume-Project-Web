document.addEventListener("DOMContentLoaded", () => {
  // 1. ตั้งปีปัจจุบันใน footer
  const yearElem = document.getElementById("year");
  if(yearElem) {
      yearElem.textContent = new Date().getFullYear();
  }

  // 2. Logic เปลี่ยนภาษา
  const toggleBtn = document.getElementById("lang-toggle");
  const body = document.body;

  // ตรวจสอบว่าเคยเลือกภาษาไว้ไหม? ถ้าไม่ ให้ Default เป็น 'en' (อังกฤษ)
  let currentLang = localStorage.getItem("lang") || "en";
  
  // เรียกฟังก์ชันเพื่อตั้งค่าภาษาเริ่มต้น
  setLanguage(currentLang);

  // เมื่อกดปุ่ม
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      // สลับภาษา
      currentLang = currentLang === "en" ? "th" : "en";
      setLanguage(currentLang);
    });
  }

  function setLanguage(lang) {
    // ลบ Class เก่าออก แล้วใส่ Class ภาษาใหม่ที่ Body
    body.classList.remove("en", "th");
    body.classList.add(lang);

    // บันทึกลง Local Storage
    localStorage.setItem("lang", lang);

    // เปลี่ยนข้อความบนปุ่ม (ถ้าเป็น en ให้ปุ่มโชว์ว่ากดเพื่อไป TH)
    if (toggleBtn) {
      toggleBtn.textContent = lang === "en" ? "TH" : "EN";
    }
  }
});