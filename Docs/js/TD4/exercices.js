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

/* addition */

function addition() {
    var Chiffre1 = parseInt(document.getElementById("add1").value);
    var Chiffre2 = parseInt(document.getElementById("add2").value);
    document.getElementById("result").innerHTML = Chiffre1 + Chiffre2;
}

/* Afficher image dans liste */

function display_image() {
    var imageid = document.getElementById("image_select").value;
    document.getElementById("image_here").innerHTML = imageid;/* label */
    var image_to_display = document.createElement("img");
    switch (imageid) {
        case "a":
            image_to_display.src = "./../../../assets/images/TD4/ex-js/image_a.jpg";
            break;
        case "b":
            image_to_display.src = "./../../../assets/images/TD4/ex-js/image_b.jpg";
            break;
        case "c":
            image_to_display.src = "./../../../assets/images/TD4/ex-js/image_c.jpg";
            break;
        case "d":
            image_to_display.src = "./../../../assets/images/TD4/ex-js/image_d.jpg";
            break;
        case "e":
            image_to_display.src = "./../../../assets/images/TD4/ex-js/image_e.jpg";
            break;
        case "f":
            image_to_display.src = "./../../../assets/images/TD4/ex-js/image_f.jpg";
            break;
        default:
            image_to_display.src = "";
            break;
    }
    document.getElementById("image_here").innerHTML = ""; /* Pour clear si contenu encore présent */
    document.getElementById("image_here").appendChild(image_to_display);
}

/*  */