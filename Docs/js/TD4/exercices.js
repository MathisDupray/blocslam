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

/* AlertBox on mouse-over */

function alert_mouse_over() {
    alert("Vous survolez l'élement en question")
}

/* Horloge numérique */

function update_horloge() {
    var heureactuelle = new Date();
    var heures = heureactuelle.getHours();
    var minutes = heureactuelle.getMinutes();
    var secondes = heureactuelle.getSeconds();
    heures = (heures < 10 ? "0" + heures : heures);
    minutes = (minutes < 10 ? "0" + minutes : minutes);
    secondes = (secondes < 10 ? "0" + secondes : secondes);
    var clockElement = document.getElementById("horloge");
    clockElement.textContent = heures + ":" + minutes + ":" + secondes;
}

update_horloge(); /* appel fonction pour afficher un 1er display */
setInterval(update_horloge, 1000); /* refresh tte les 1s */

/*  delte conf */

function delete_element() {
    var selected_div_id = document.getElementById("div_select").value;
    var selected_div = document.getElementById(selected_div_id);
    selected_div.remove();
}

function delete_element_reset () {
    location.reload();
}

/* Ajoutée cette fonction qui permet de lister les elements de la page sans avoir a les nommer dans le HTML */
/* J'ai essayé avec window.onload = GetDivIDs mais les options du select étaient vides, besoin d'un bouton */
function getDivIDs() {
    var divElements = document.getElementsByTagName("div");
    var selectElement = document.getElementById("div_select");
    selectElement.innerHTML = "";
    for (var i = 0; i < divElements.length; i++) {
        var option = document.createElement("option");
        option.value = divElements[i].id;
        option.textContent = divElements[i].id;
        selectElement.appendChild(option);
    }
}

/* Toggle check */

function toggleCheckbox() {
    var checkbox = document.getElementById("toggleCheckbox");
    var div = document.getElementById("myDiv");
    if (checkbox.checked) {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

/* Form contact */

function send_to_logs_submit() {
    var name = document.getElementById("nameInput");
    var email = document.getElementById("emailInput");
    var msg = document.getElementById("messageInput");

       console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
}