document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("appointmentModal");
  const openBtns = document.querySelectorAll(".consult-btn, .btn");
  const closeBtn = document.getElementById("closeModalBtn");
  const form = document.getElementById("appointmentForm");
  const formScreen = document.getElementById("formScreen");
  const successScreen = document.getElementById("successScreen");
  const dateInput = document.getElementById("date");

  // OPEN MODAL
  openBtns.forEach(btn => btn.addEventListener("click", e => {
    e.preventDefault();
    modal.style.display = "flex";
  }));

  // CLOSE MODAL
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // CLICK OUTSIDE CLOSE
  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });

  // BLOCK PAST DATES
  const today = new Date().toISOString().split("T")[0];
  dateInput.min = today;

  // BLOCK SATURDAY & SUNDAY
  dateInput.addEventListener("input", () => {
    const picked = new Date(dateInput.value);
    const day = picked.getDay();

    if (day === 0 || day === 6) {
      alert("Weekends are unavailable. Please select a weekday.");
      dateInput.value = "";
    }
  });

  // SUBMIT FORM
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Hide form, show success
    formScreen.style.display = "none";
    successScreen.style.display = "block";
  });

});