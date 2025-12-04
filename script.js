// creo 2 numeri casuali
const num1 = Math.floor(Math.random() * 100);
const num2 = Math.floor(Math.random() * 100);
let numero

// definisco qual è il maggiore
if (num1 > num2) {
    numero = num1
    console.log(num1)
} else {
    numero = num2
    console.log(num2)
}

console.log(numero);


