function calculateTriangleArea(){
    // Get base value
    const triangleBaseInput = document.getElementById("triangle-base").value ; // string value
    const base = parseFloat(triangleBaseInput); //convert to number

    // Get height value
    const triangleHeightInput = document.getElementById("triangle-height").value ; // string value
    const height = parseFloat(triangleHeightInput); //convert to number
    
    const area = 0.5 * base * height;

    // Display area
    const areaSpan = document.getElementById("triangle-area");
    areaSpan.innerText = area;

    // Display area in a text box
    const areaInput = document.getElementById("triangle-area-input");
    areaInput.style.display = "block";
    areaInput.style.textAlign = "center";
    areaInput.value = area;
}