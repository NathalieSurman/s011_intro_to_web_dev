// These elements will be used in both functions.
// We use document.forms to grab our form by its name.
// We use document.getElementById to grab the other elements by id.

var numberFun = document.forms["numberFun"];
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

//--------- Validate the Form ------//

function validate() {

// we set the form's className to needs‑validation. This removes any validation styles that were activated by a previous validation.
    numberFun.className = "needs-validation";

//we check the form's validity with the Constraint Validation API's checkValidity function.
//checkValidity adds validation pseudo classes to each invalid element.
    if (!numberFun.checkValidity()) {
        numberFun.className = "was-validated";
        return false;
    }

// Remembering!! that form data is always treated as strings, we parse each input's value to an integer
    var operand1 = parseInt(num1.value, 10);
    var operand2 = parseInt(num2.value, 10);
    
    document.getElementById("addResult").innerText = operand1 + operand2;
    document.getElementById("subtractResult").innerText = operand1 - operand2;
    document.getElementById("multiplyResult").innerText = operand1 * operand2;
    document.getElementById("divideResult").innerText = operand1 / operand2;

    results.style.display = "block";
    submitButton.innerText = "Recalculate";

    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}

//----- we need to reset the entire page. That is where the resetView function comes in.---//
function resetView() {
    numberFun.className = "needs-validation";
    results.style.display = "none";
    submitButton.innerText = "Calculate";
    num1.focus();
}

// 1. The resetView function hides Bootstrap validation by removing the was-validated class and replacing it with needs-validation
// 2. It then hides the results table by setting its display style to none. 
// 3. It switches the submit button's text back to "Calculate".
// 4. finally put focus in the first numeric input with its focus function.