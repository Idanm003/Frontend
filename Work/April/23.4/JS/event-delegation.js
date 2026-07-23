$(document).ready(() => {
    const addBtnEl = $(".add-buttons");
    const btnWrapperEl = $(".button-wrapper");

    addBtnEl.click(() => {
        const newBtnEl = $("<button>Click Me To Add An Alert</button>").addClass("alert-btn");

        btnWrapperEl.append(newBtnEl);
    });

    /*
        Event Delegation Function 
        btnWrapperEl.on("click", ".alert-btn", function () {
         console.log(this);
        });
    */ 

    // Event Delegation Arrow Function
    btnWrapperEl.on("click", ".alert-btn", (event) => {
        const target = event.target;
        console.log(target);
        alert("Button Clicked!");
    });
});