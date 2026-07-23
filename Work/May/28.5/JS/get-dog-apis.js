$(document).ready(function () {
    const queryEl = document.querySelector("#query");
    const submitBtn = document.querySelector("#submit-btn");
    const imgEl = document.querySelector("#dog-image");
    const errorMessage = document.querySelector("#error-message");

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const quertyToSearch = queryEl.value;
        console.log(quertyToSearch);
        errorMessage.textContent = "";
        imgEl.src = "";

        const url = `https://dog.ceo/api/breed/${quertyToSearch}/images/random`;
        console.log(url);

        $.ajax({
            "type:": "GET",
            "datatype": "json",
            "url": url,
            success: function (data) {
                console.log(data);
                const dogImgURL = data.message;
                imgEl.src = dogImgURL;
            },
            error: function (data) {
                console.log(data);
                errorMessage.textContent = data.responseJSON.message;
            }
        })
    });
});