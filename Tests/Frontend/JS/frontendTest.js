const tvData = [
    { id: 1, name: "Samsung", address: "123 Rabin Street", city: "Tel Aviv", price: 3200, link: "https://www.samsung.com/", rating: 4, image: "../assets/samsungTV.jpg" },
    { id: 2, name: "LG", address: "456 Herzl Street", city: "Jerusalem", price: 3800, link: "https://www.lg.com/", rating: 5, image: "../assets/lgTV.jpg" },
    { id: 3, name: "Fujicom", address: "456 Dizingoff Street", city: "Bnei Brak", price: 4500, link: "https://www.fujicom.com/", rating: 3, image: "../assets/fujicomTV.png" },
    { id: 4, name: "Sony", address: "789 Allenby Street", city: "Haifa", price: 4000, link: "https://www.sony.com/", rating: 2, image: "../assets/sonyTV.jpg" },
    { id: 5, name: "Panasonic", address: "321 Rothschild Street", city: "Ashdod", price: 1500, link: "https://www.panasonic.com/", rating: 1, image: "../assets/panasonicTV.jpg" },
    { id: 6, name: "Toshiba", address: "654 Jabotinsky Street", city: "Netanya", price: 2200, link: "https://www.toshiba.com/", rating: 3, image: "../assets/toshibaTV.png" }
];

function setResult(text) {
    document.getElementById("result").textContent = text;
}
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, typeof value === "object" ? JSON.stringify(value) : String(value));
}

function renderTable() {
    const tableBody = document.querySelector("#tvTable tbody");
    tableBody.innerHTML = "";

    tvData.forEach(row => {
        const tableRow = document.createElement("tr");

        if (row.rating < 2) {
            tableRow.classList.add("row-red");
        } else if (row.rating >= 4) {
            tableRow.classList.add("row-green");
        }

        tableRow.innerHTML =
            `
        <td>${row.id}</td>
            <td>
            <a href="${row.link}" target="_blank">
                <img src="${row.image}" alt="${row.name}" style="height:50px;">
            </a>
        </td>
        <td>${row.name}</td>
        <td>${row.address}</td>
        <td>${row.city}</td>
        <td>${row.price} ₪</td>
        <td>
            <a href="${row.link}" target="_blank">Visit Page</a>
        </td>
        <td>${row.rating}/5</td>
        <td>
            <button class="btn btn-danger btn-sm me-1" onclick="deleteRow(this)">Delete</button>
            <button class="btn btn-primary btn-sm" onclick="buyItem(${row.id})">Buy</button>
        </td>
        `;
        tableBody.appendChild(tableRow);
    });
}

function deleteRow(button) {
    const row = button.closest("tr");
    const id = parseInt(row.querySelector("td:first-child").textContent);
    const index = tvData.findIndex(item => item.id === id);
    if (index !== -1) {
        tvData.splice(index, 1)
    };
    row.remove();
}

function buyItem(id) {
    const row = tvData.find(item => item.id === id);
    if (!row) {
        alert("Item not found");
        return;
    }
    saveToLocalStorage("buyName", row.name);
    saveToLocalStorage("buyPrice", row.price);
    window.open("buyTest.html", "_blank");
}

function showAverage() {
    const averagePrice = (array) => {
        if (!array || array.length === 0) {
            return 0;
        }
        const totalPrice = array.reduce((sum, item) => sum + item.price, 0);
        return totalPrice / array.length;
    };
    setResult(`Average price: ₪${averagePrice(tvData).toFixed(2)}`);
}

function showBest() {
    const bestOption = (array) => {
        const ratedItems = array.filter(item => item.rating >= 4);
        if (ratedItems.length === 0) {
            return null;
        }
        const minPrice = Math.min(...ratedItems.map(item => item.price));
        return ratedItems.find(item => item.price === minPrice);
    }
    const best = bestOption(tvData);
    setResult(best ? `Best option: ${best.name} at ${best.id} place with the price of: ₪${best.price}` : "No good options available");
}

document.addEventListener("DOMContentLoaded", renderTable);