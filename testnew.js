let base = "9-47 EOE, 53, 60-64 even";

let questions = base.split(', ');

for (question in questions) {
    let pointAndMode = questions[question].split(' ');
    let hasMode = pointAndMode.length > 1;
    let minAndMax = pointAndMode[0].split('-');
    let hasMax = minAndMax.length > 1;

    createPoints(minAndMax[0], (hasMax ? minAndMax[1] : minAndMax[0]), (hasMode ? pointAndMode[1].toLocaleLowerCase() : "none"))
}


function createPoints(min, max, mode) {
    console.log(min, max, mode);

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
            skipped = true
        }

        console.log(i + ". ")
    }
}