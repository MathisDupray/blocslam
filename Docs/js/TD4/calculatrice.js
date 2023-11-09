var get_result = document.getElementById("result");

function appendResult(value) {
    get_result.value += value;
}

function clearResult() {
    get_result.value = "";
}

function calculateResult() {
    let result = get_result.value;
    if (result !== "") {//pour être sur que ca ne retourne pas undefined quand on appuie sur = et que #result est vide
        let calculatedResult = eval(result);
        get_result.value = calculatedResult;
    } 
}