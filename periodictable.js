const detailsBox = document.getElementById('detailsBox');
const closeBtn = document.getElementById('closeBtn');
const elementDetails = document.getElementById('elementDetails');

// Add event listener to all elements
document.querySelectorAll('.element').forEach(el => {
    el.addEventListener('click', () => {
        // Show the details of the clicked element
        const symbol = el.dataset.symbol;
        const name = el.dataset.name;
        const atomicNumber = el.dataset.atomicNumber;
        const atomicMass = el.dataset.atomicMass;
        const usage = el.dataset.usage;
        const speciality = el.dataset.speciality;

        // Populate details box
        elementDetails.innerHTML = `
        <h2>${name} (${symbol})</h2>
        <p><strong>Atomic Number:</strong> ${atomicNumber}</p>
        <p><strong>Atomic Mass:</strong> ${atomicMass}</p>
        <p><strong>Usage:</strong> ${usage}</p>
        <p><strong>Speciality:</strong> ${speciality}</p>
    `;
    

        // Display the details box
        detailsBox.style.display = 'block';
    });
});

// Close button event
closeBtn.addEventListener('click', () => {
    detailsBox.style.display = 'none';  // Hide details box when close button is clicked
});

// Optionally, hide details box if clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === detailsBox) {
        detailsBox.style.display = 'none';
    }
});