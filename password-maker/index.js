

const textLowercase = "azertyuiopqsdfghjklmwxcvbn";
const textUppercase = textLowercase.toUpperCase();
const textNumbers = "0987654321";
const textSymbols = "&é\"'(-è_çà)=$*ù!:;,?!"
const barr = document.getElementById("password-length")
console.log(barr.value)
const textpass = document.getElementById("password-output")




function generateur() {
    let data = [];
    let pass = "";
    if (lowercase.checked) data.push(...textLowercase)
    if (uppercase.checked) data.push(...textUppercase)
    if (numbers.checked) data.push(...textNumbers)
    if (symboles.checked) data.push(...textSymbols)

    if (data.length === 0) {
        alert("Choisi vite")
        return;
    }

    for (i = 0; i < barr.value; i++) {
        pass += data[Math.floor(Math.random() * data.length)]
        console.log(pass)
    }

    textpass.value = pass;
    textpass.select();
    document.execCommand('copy');



    generateurButtom.textContent = "Copié";
    setTimeout(() => {
        generateurButtom.textContent = "Validé";
    }, 2000)


}


generateurButtom.addEventListener("click", generateur)