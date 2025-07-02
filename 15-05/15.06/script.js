document.addEventListener("DOMContentLoaded", function () {
    const colorPicker = document.getElementById("colorpicker");

    if (colorPicker) {
        colorPicker.addEventListener("input", function () {
            document.body.style.backgroundColor = colorPicker.value;
        });
    }
});