// creo 2 numeri casuali
const num1 = Number(prompt("inserisci un numero"));
const num2 = Number(prompt("inserisci un numero"));
let numero

// li salvo in console
console.log("il primo numero è", num1);
console.log("il secondo numero è", num2)

// definisco qual è il maggiore
if (num1 > num2) {
    numero = num1
} else {
    numero = num2
}

console.log("il numero maggiore è", numero);


