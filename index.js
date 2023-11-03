window.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();
    const spinnerContainer = document.querySelector(".spinner-container");
    const quadraticEquationContainer = document.getElementById("main");
    setTimeout(() => {
        spinnerContainer.style.display = "none";
        quadraticEquationContainer.classList.remove("hide-container");
    }, 1000)
})

const quadraticEquationElement = document.getElementById('quadratic-equation');
quadraticEquationElement.textContent = '\\(ax^2 + bx + c\\)';
MathJax.typeset([quadraticEquationElement]);


function calculate() {
    const a = parseFloat(document.getElementById('field-1').value);
    const b = parseFloat(document.getElementById('field-2').value);
    const c = parseFloat(document.getElementById('field-3').value);
    const result = document.querySelector('.result');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.innerText = 'Invalid input. Please enter numeric values for coefficients.';
        return;
    }
    const discriminant = b * b - 4 * a * c;

    const quadraticEquationFormula = ` = \\[a x^2 + b x + c = 0\\]`;
    const quadraticEquationFormulaResult = ` = \\[${a} x^2 + ${b} x + ${c} = 0\\]`;

    const quadraticEquationFormulaElement = document.querySelector(".formula");
    const quadraticEquationFormulaResultElement = document.querySelector(".formula-result");

    quadraticEquationFormulaElement.textContent = `Formula: ${quadraticEquationFormula}`;
    quadraticEquationFormulaResultElement.textContent = quadraticEquationFormulaResult;

    MathJax.typeset([quadraticEquationFormulaResultElement, quadraticEquationFormulaElement]);

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result.innerText = `= \\\[ \\text{Roots: } x_1 = \\frac{${-b} + \\sqrt{${discriminant}}}{${2 * a}}, \\ x_2 = \\frac{${-b} - \\sqrt{${discriminant}}}{${2 * a}} \\]`;

        MathJax.typeset([result]);
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        result.innerText = `Root: x = ${root}`;
    } else {
        result.innerText = 'No real roots';
    }
}
