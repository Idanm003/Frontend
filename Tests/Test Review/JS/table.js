const mainTableElement = document.getElementById('mainTable');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutContainer = document.querySelector('.checkout-container');
const selectedCarTable = document.getElementById('selectedCarTable');
const orderedCarsData = document.getElementById('orderdTableData');
const totalPriceContainer = document.querySelector('.total-price-container');
const totalPriceSpan = document.getElementById('totalPrice');

mainTableElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('selectCarBtn')) {
        const selectedRow = event.target.parentElement.parentElement;
        selectedRow.classList.toggle('table-success');
        if (event.target.textContent === 'Select') {
            event.target.textContent = 'Unselect';
        } else {
            event.target.textContent = 'Select';
        }
    }
});

function hideDisplay() {
    orderedCarsData.innerHTML = '';
    totalPriceSpan.textContent = '';
    checkoutContainer.style.display = 'none';
    selectedCarTable.style.display = 'none';
    totalPriceContainer.style.display = 'none';
}

function showDisplay() {
    checkoutContainer.style.display = 'block';
    selectedCarTable.style.display = 'block';
    totalPriceContainer.style.display = 'block';
}

checkoutBtn.addEventListener('click', () => {
    hideDisplay();

    const selectedCars = document.querySelectorAll('.table-success');
    if (selectedCars.length === 0) {
        return;
    };

    let totalPrice = 0;
    let carIndex = 1;
    
    selectedCars.forEach((row) => {
        const carMake = row.querySelector('.carMake').textContent;
        const carModel = row.querySelector('.carModel').textContent;
        const carPriceText = row.querySelector('.carPrice').textContent;
        orderedCarsData.innerHTML += `
        <tr>
            <th>${carIndex++}</th>
            <td>${carMake}</td>
            <td>${carModel}</td>
            <td>${carPriceText}</td>
        </tr>
        `;
        totalPrice += parseFloat(carPriceText.replace(/[$,]/g, ''));
    });
    totalPriceSpan.textContent = `$${totalPrice.toLocaleString()}`;
    showDisplay();
});