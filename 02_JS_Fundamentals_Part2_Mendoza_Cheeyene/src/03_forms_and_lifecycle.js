export function initResidentIdGenerator() {
  const form = document.getElementById('resident-form');
  const nameInput = document.getElementById('res-name');
  const purokSelect = document.getElementById('res-purok');
  const errName = document.getElementById('err-name');
  const errPurok = document.getElementById('err-purok');
  const cardsGrid = document.getElementById('id-cards-grid');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    if (nameInput.value.trim().length < 5) {
      errName.textContent = "Name must be at least 5 characters.";
      valid = false;
    } else {
      errName.textContent = "";
    }

    if (purokSelect.value === "") {
      errPurok.textContent = "Please select a purok.";
      valid = false;
    } else {
      errPurok.textContent = "";
    }

    if (valid) {
      cardsGrid.innerHTML += `
        <div class="resident-card">
          <h3>Barangay Resident Card</h3>
          <p><strong>Name:</strong> ${nameInput.value}</p>
          <p><strong>Zone:</strong> ${purokSelect.value}</p>
        </div>
      `;

      form.reset();
    }
  });
}