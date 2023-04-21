const setElement = document.getElementById("set"); // Problem Set input
const generateElement = document.getElementById("generate"); // generate button after using all inputs
const textareaElement = document.getElementById("output"); // Text area for the output

generateElement.addEventListener("click", generate); // fire function on click

function generate() {
    let ready = hasAllValues();
    if (!(ready === "")) {
        textareaElement.value = ready;
    }

    let base = setElement.value;

    let questions = base.split(', ');

    for (question in questions) {
        let pointAndMode = questions[question].split(' ');
        let hasMode = pointAndMode.length > 1;
        let minAndMax = pointAndMode[0].split('-');
        let hasMax = minAndMax.length > 1;

        console.log(minAndMax);
        createPoints(Number(minAndMax[0]), Number((hasMax ? minAndMax[1] : minAndMax[0])), (hasMode ? pointAndMode[1].toLocaleLowerCase() : "none"))
    }
}

function createPoints(min, max, mode) {

    let skipped = false;

    for (let i = min; i <= max; i++) {
        if (mode === "even") {
            if (i % 2 != 0) {
                continue;
            }
        } else if (mode === "odd") {
            if (i % 2 == 0) {
                continue;
            }
        } else if (mode === "eoe") {
            if (i % 2 != 0) {
                continue;
            }
            if (skipped) {
                skipped = false;
                continue;
            }
            skipped = true
        } else if (mode === "eoo") {
            if (i % 2 == 0) {
                continue;
            }
            if (skipped) {
                skipped = false;
                continue;
            }
            skipped = true;
        }

        textareaElement.value += i + ". \n";
    }
}

function hasAllValues() {
    textareaElement.value = "";
    if (setElement.value.length < 1) {
        return "Please fill out all the fields";
    }
    
    return "";
}

