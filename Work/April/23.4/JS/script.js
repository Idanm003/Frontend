$(document).ready(() => {
    const titleEl = $('.title');
    const customFormEl = $('.custom-form');
    const textInputEl = $('.text-input');
    const buttonClickEl = $('.click-btn');
    const displayContentEl = $('.display-content');
    const clearBtnEl = $('.remove-content-btn');

    $(document).on("click", ".click-btn", (event) => {
        event.preventDefault();
        const textInputValue = textInputEl.val();

        if (textInputValue.trim() === "") {
            return;
        }
        const spanEl = $('<span></span>').text(textInputValue);

        displayContentEl.empty();
        displayContentEl.append(spanEl);
        displayContentEl.addClass('bg-red');

        const spanContent = $(".span-content");
        spanContent.empty();

        const pEl = $('<p></p>').text("This is from the new element");
        spanContent.append(pEl);

        textInputEl.val("");
    });


    clearBtnEl.click(() => {
        displayContentEl.removeClass('bg-red');
        displayContentEl.empty();

        const spanContent = $(".span-content");
        spanContent.empty();

        const extraSpan = $(".extra-span");
        extraSpan.remove();
    });
});