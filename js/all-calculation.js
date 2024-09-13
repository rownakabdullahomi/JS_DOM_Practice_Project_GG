function calculateTriangleArea() {
    const base = getFirstValue("triangle-base");
    const height = getSecondValue("triangle-height");
    const triangleArea = 0.5 * base * height;
    //console.log(triangleArea);

    showArea("triangle-area", triangleArea);
    showAreaTextBox("triangle-area-input", triangleArea);
}

//Rectangle Area Calculate Using addEventListener() function instead of onclick() function
//------------------  Method 1 (Preferable) Using Anonymous Function ---------------------
const btnRectangleCalculate = document.getElementById("btn-rectangle-calculate");
btnRectangleCalculate.addEventListener("click", function () {
    const width = getFirstValue("rectangle-width");
    const length = getSecondValue("rectangle-length");
    const rectangleArea = width * length;

    showArea("rectangle-area", rectangleArea);
    showAreaTextBox("rectangle-area-input", rectangleArea);
});

//--------------------  Method 2 Using Defined Function ------------------------------
// const btnRectangleCalculate = document.getElementById("btn-rectangle-calculate");
// btnRectangleCalculate.addEventListener("click", calculateRectangleArea());
// function calculateRectangleArea() {
//     const width = getFirstValue("rectangle-width");
//     const length = getSecondValue("rectangle-length");
//     const rectangleArea = width * length;

//     showArea("rectangle-area", rectangleArea);
//     showAreaTextBox("rectangle-area-input", rectangleArea);
// }



function getFirstValue(firstInputId) {
    const firstText = document.getElementById(firstInputId).value;
    const firstValue = parseFloat(firstText);
    return firstValue;
}
function getSecondValue(secondInputId) {
    const secondText = document.getElementById(secondInputId).value;
    const secondValue = parseFloat(secondText);
    return secondValue;
}

function showArea(placeId, area) {
    const place = document.getElementById(placeId);
    place.innerText = area;
}
function showAreaTextBox(textBoxId, area) {
    const textBox = document.getElementById(textBoxId);
    //textBox.style.display = "block";   it is also ok
    textBox.removeAttribute("hidden");
    textBox.style.textAlign = "center";
    textBox.value = area;
}