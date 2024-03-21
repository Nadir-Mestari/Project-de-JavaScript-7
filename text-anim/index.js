

const target = document.getElementById("target")

let arrey = ["Je suis votre Coach", " De Yoga ", "Situé à Sarcelles"]

let mot = 0;
let letter = 0;

const creat = () => {
    const span = document.createElement("span");
    target.appendChild(span);

    span.textContent = arrey[mot][letter];

    setTimeout(() => {
        span.remove();
    }, 1800)

};


const loop = () => {
    setTimeout(() => {
        if (mot >= arrey.length) {
            mot = 0;
            letter = 0;
            loop();

        } else if (letter < arrey[mot].length) {
            creat();
            letter++;
            loop();

        } else {

            setTimeout(() => {
                mot++;
                letter = 0;
                loop();
            }, 1800)

        }

    }, 30);

};
loop();
