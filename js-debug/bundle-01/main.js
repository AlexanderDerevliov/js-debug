/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1 
//errore di sintassi in tutti gli esercizi//


 for (let i = 0; i > 5; i++) {
     console.log(i);
 }


 // ESERCIZIO 2
 function addIfEven(num) {
     if (num % 2 == 0) {
         return num + 5;
     }
     return num;
 }


 // ESERCIZIO 3
 function loopToFive() {
     for (let i = 0; i < 5; i++) {
         console.log(i);
     }
 }

 

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function displayEvenNumbers() {
    let evenNumbers = numbers;
    for (let i = 0; i < numbers.length + 1; i++) {
        if (evenNumbers % 2 == 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
       
    }
}
console.log (displayEvenNumbers()); // dovrebbe restituire [2,4,6,8]