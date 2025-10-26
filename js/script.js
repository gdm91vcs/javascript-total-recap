//JS è il vero linguaggio di programmazione che si usa per rendere dinamico e interattivo il sito web

//JS VARIABILI
//Sono dei contenitori con all interno dei dati memorizzati. In js esistono 3 variabili (LET, CONST e VAR [VAR non si usa più perchè obsoleta])

//LET ("Lettura")
//E' quella variabile che può cambiare nel corso della sua esecuzione e non è mai fissa (età, giorni del mese ecc, nome e cognome di un utente che vuole cambiare nome del profilo online [sennò di default per i nomi e cognomi si usa sempre CONST]). Vive solo all interno del blocco dov è stata dichiarata e per vederla in console bisogna fare console.log() per stamparla.
//ESEMPI VARI:
//ETA'
let età = 30;
console.log(età);//stamperà 30 (numero)

let userAge = 34;
console.log(userAge);//stamperà 34 (numero)

//NOME e COGNOME
let userName = "Gabriele ";
console.log(userName);//stamperà Gabriele (doppi apici="..."=stringa=parola)

let userSurname = "Del Monaco";
console.log(userName + userSurname);//stamperà Gabriele Del Monaco (stringa)

//OPERAZIONI
let a = 10;
let b = 5;
console.log(a+b);//15 somma
console.log(a-b);//5 sottrazione
console.log(a*b);//50 moltiplicazione
console.log(a/b);//2 divisione

//CONST ("Costante")
//E' quella variabile che non cambia mai nel corso della sua esecuzione ed è sempre fissa(data di nascita, nome e cognome). Vive solo all interno del blocco dov è stata dichiarata e per vederla in console bisogna fare console.log() per stamparla.
//ESEMPI VARI:
//DATA DI NASCITA
const userDate = 1991;
console.log(userDate);//stamperà 1991 (numero)

//NOME e COGNOME
const userNome = "Gabriele";
const userCognome = "Del Monaco";
const fullName = "Gabriele Del Monaco";
console.log(fullName);//stamperà il nome completo (stringa)

