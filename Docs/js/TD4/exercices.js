/* ------- Background color ------- */

function changeBackgroundColor(){
    var colorInput = document.getElementById("color-input");
    var selectedColor = colorInput.value;
    document.body.style.backgroundColor = selectedColor;
}

/* add select in text */

function addText() {
    var textInput = document.getElementById("text-input");
    var TextToAdd = textInput.value;
    document.getElementById("add_here").innerHTML += TextToAdd; /* += >>> append */
}

var default_text = "Il s'ajoutera ici";/* declarer la var default pour le reset */

function reset_text() {
    document.getElementById("add_here").innerHTML = default_text;
}