const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
Happy Birthday na ka tee rak
วันนี้คนเก่งของเค้าโตขึ้นอีกปีแล้วนะคะ ขอให้แฟนมีความสุขสุขภาพร่างกายแข็งแรงนะคะ
คิดถึงสิ่งใดขอให้สมปรารถนา เป็นคนน่ารักสดใสแบบนี้ตลอดไป ขอให้ชีวิตแฟนมีแต่รอยยิ้มไม่ว่าจะเจออะไรก็ตาม เค้าอยู่ข้างๆเสมอจะคอยจับมือแฟนเดินไปด้วยกัน ขอให้แฟนเติบโตอย่างมั่นคง ประสบความสำเร็จกับสิ่งที่แฟนทำ ทุกการเดินทางของแฟนจะมีเค้าคอยอยู่ข้างๆ เค้ารักแฟนที่สุดเลยขอให้เป็น 22 ที่ดีนะคะรักแฟนจุ็บๆๆ

`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
