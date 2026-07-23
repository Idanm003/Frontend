const storeNameEl = document.getElementById("storeName");
const priceFinalEl = document.getElementById("priceFinal");
const creditCardEl = document.getElementById("creditCard");
const expirationDateEl = document.getElementById("expirationDate");

document.addEventListener("DOMContentLoaded", () => {
    storeNameEl.value = localStorage.getItem("buyName") || "";
    priceFinalEl.value = localStorage.getItem("buyPrice") || "";
});

function sendOrder() {
    const storeName = storeNameEl.value;
    const totalPrice = priceFinalEl.value;
    const creditCard = creditCardEl.value;
    const expirationDate = expirationDateEl.value;

    if (!storeName || !totalPrice || !creditCard || !expirationDate) {
        alert("Please fill all fields.");
        return;
    }
    alert(`Order sent!\nStore: ${storeName}\ntotalPrice: ${totalPrice}₪`);
}
