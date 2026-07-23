$(document).ready(function () {
    const imgEl = document.querySelector("#dog-image");
    const errorEl = document.querySelector("#error-message");

    /* GET Request Example
    $.ajax({
        type: "GET",
        datatype: "json",
        url: "https://dog.ceo/api/breeds/image/random",
        success: function (data){
            console.log(data);
            const dogImgURL = data.message;
            imgEl.src = dogImgURL;
        },
        error: function (error){
            errorEl.textContent = error.responseJSON.message;
            console.log(error);
        }
    });
    */

    /* POST Request Example
    $.ajax({
        type: "POST",
        headers: {
            "x-api-key": "03b9c8e1-5a3c-4d9b-8f0e-2a1b2c3d4e5f",
        },
        url: "https://api.restful-api.dev/collections/ecom/objects",
        contentType: "application/json",
        datatype: "json",
        data: JSON.stringify({
            name: "John Doe",
            email: "john.doe@example.com",
            password: "password123",
        }),
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(error);
        },
    })
    */
});