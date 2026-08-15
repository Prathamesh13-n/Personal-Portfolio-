/* =========================================================
   Certifications page script
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('certYear');
  if (yearEl) {
    yearEl.textContent = `© ${new Date().getFullYear()} Prathamesh Purushottam Nehete`;
  }
});
