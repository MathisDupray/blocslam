const exemple = document.getElementById("exemple");
const bold = document.getElementById("bold_check");
const italic = document.getElementById("italic_check");
const under = document.getElementById("under_check");
const barred = document.getElementById("barred_check");
const colorSelect = document.getElementById("color_select");
const fontSizeInput = document.getElementById("number_select");
const fontSelect = document.getElementById("font_select");
const plusSizeButton = document.getElementById("plus_size_font");
const minusSizeButton = document.getElementById("minus_size_font");
// Declarer ttes les variables, plus faciles à manipuler


// Creation function pour tout les styles de textes
// necessaire pour éviter conflits avec underline & strikthrough qui utilisent les
// 2 la propriété css textdecoration
// >>>>> On update tout a chaque input, probablement mieux a faire, ca me convient

function updateText() { 
  exemple.style.fontWeight = bold.checked ? "bold" : "normal";
  exemple.style.fontStyle = italic.checked ? "italic" : "normal";
  const isUnderline = under.checked ? "underline" : "";
  const isStrikeThrough = barred.checked ? "line-through" : "";
  exemple.style.textDecoration = `${isUnderline} ${isStrikeThrough}`.trim();
  exemple.style.color = colorSelect.value;
  exemple.style.fontSize = fontSizeInput.value + "px";
  exemple.style.fontFamily = fontSelect.value;
}


//Listeners des inputs, qui appl la fonction d'update,
bold.addEventListener("change", updateText);
italic.addEventListener("change", updateText);
under.addEventListener("change", updateText);
barred.addEventListener("change", updateText);
colorSelect.addEventListener("change", updateText);
fontSizeInput.addEventListener("change", updateText);
fontSelect.addEventListener("change", updateText);

//calculs de la taille font, + / -  2px
plusSizeButton.addEventListener("click", () => {
  const currentFontSize = parseInt(exemple.style.fontSize) || 16;
  exemple.style.fontSize = currentFontSize + 2 + "px";
  updateText();
});

minusSizeButton.addEventListener("click", () => {
  const currentFontSize = parseInt(exemple.style.fontSize) || 16;
  exemple.style.fontSize = currentFontSize - 2 + "px";
  updateText();
});