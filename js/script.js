//JS è il vero linguaggio di programmazione che si usa per rendere dinamico e interattivo il sito web

//JS VARIABILI
//Sono dei contenitori con all interno dei dati memorizzati. In js esistono 3 variabili (LET, CONST e VAR [VAR non si usa più perchè obsoleta])

//LET ("LETTURA")
//E' quella variabile che può cambiare nel corso della sua esecuzione e non è mai fissa (età, giorni del mese ecc, nome e cognome di un utente che vuole cambiare nome del profilo online [sennò di default per i nomi e cognomi si usa sempre CONST]). Vive solo all interno del blocco dov è stata dichiarata e per vederla in console bisogna fare console.log() per stamparla.
//ESEMPI VARI:
//ETA':
let età = 30;
console.log(età);//stamperà 30 (numero)

let userAge = 34;
console.log(userAge);//stamperà 34 (numero)

//NOME e COGNOME:
let userName = "Gabriele ";
console.log(userName);//stamperà Gabriele (doppi apici="..."=stringa=parola)

let userSurname = "Del Monaco";
console.log(userName + userSurname);//stamperà Gabriele Del Monaco (stringa)

//OPERAZIONI:
let a = 10;
let b = 5;
console.log(a+b);//15 somma
console.log(a-b);//5 sottrazione
console.log(a*b);//50 moltiplicazione
console.log(a/b);//2 divisione

//CONST ("COSTANTE")
//E' quella variabile che non cambia mai nel corso della sua esecuzione ed è sempre fissa(data di nascita, nome e cognome). Vive solo all interno del blocco dov è stata dichiarata e per vederla in console bisogna fare console.log() per stamparla.
//ESEMPI VARI:
//DATA DI NASCITA:
const userDate = 1991;
console.log(userDate);//stamperà 1991 (numero)

//NOME e COGNOME:
const userNome = "Gabriele";
const userCognome = "Del Monaco";
const fullName = "Gabriele Del Monaco";
console.log(fullName);//stamperà il nome completo (stringa)

//TIPI DI DATI:
//In JS tutti i valori appartengono ad un certo tipo di "DATO" e questi dati si possono dividere in due grandi categorie = PRIMITIVI e COMPLESSI.

//DATI PRIMITIVI
//Questi tipi di dati sono i più semplici, non sono oggetti e contengono un solo tipo di valore. In tutto sono 7 e sono:

//1.STRINGA (STRING)
//Serve a rappresentare testi (sequenze di caratteri letterari) e in JS ci sono 3 modo per scrivere una STRINGA = Con APICI SINGOLI (' '), con DOPPI APICI (" ") e con il BACKTICK (` `).
//ESEMPIO DI STRINGA:
const userName2 = "Gabriele";
let saluto = "Ciao ";
console.log(saluto + userName2);//stamperà Ciao Gabriele

//ESEMIO DI STRINGA CON APICI SINGOLI:
const nome = 'Mario';
console.log(nome);//stamperà Mario
//Puoi usare gli APICI SINGOLI e DOPPI senza differenze pratiche, l importante è chiudere la stringa con il giusto APICE di apertura!
//Posso includere un APICE SINGOLO dentro una stringa con APICI DOPPI
//ESEMPIO CON APICE SINGOLO DENTRO UNA STRINGA CON APICI DOPPI:
let frase = "L'albero è verde!";
console.log(frase);
//Se volessi includere in una stringa con APICI DOPPI, un ulteriore frase con altri APICI DOPPI devo ESCAPLARLO con "\"
//ESEMPIO CON ESCAPLAZIONE:
let citazione = "Lui ha detto: \"Ciao!\"";
console.log(citazione);

//ESEMPIO DI STRINGA CON BACKTICK `` (tamplate literals)
//Questi sono gli APICI più potenti! Servono per creare TAMPLATE STRING, vere e proprie frasi moltop articolate e si usa ${} e infine si creerà la stringa finale in una nuova const/let per poi stamparla
//ESEMPIO STRINGA CON BACKTICK:
const nome2 = "Marco";
let saluto2 = "Ciao ";
let domanda = "come stai?";
let result = `${saluto2}${nome2}, ${domanda}`;
console.log(result);

//ESEMPIO DI CALCOLI CON BACKTICK:
let c = 3;
let d = 5;
let result2 = `Il risultato della somma è ${c + d}`;
console.log(result2);

//2. NUMERO (NUMBER)
//Serve per rappresentare numeri sia interi che decimali(assolutamente non usare APICI di qualsiasi tipo)
//ESEMPIO NUMERO (NUMBER):
let age = 34;
let prezzo = 19.99;
console.log(age);
console.log(prezzo);

//3.VALORE BOOLEANO (VERO-FALSO/TRUE-FALSE)
//E' quel valore che può essere SOLO TRUE o SOLO FALSE e viene usato per condizioni logiche
//ESEMPIO VALORE BOOLEANO:
let isOnline = true;
let isOffline = false;
console.log(isOnline);
console.log(isOffline);

//4.UNDEFINED (SENZA VALORE)
//E' una var al quale non è stato asssegnato nessun valore, fattibile solo con LET e non con CONST!
//ESEMPIO UNDEFINED:
let x;
console.log(x);

let name3;
console.log(name3);

//5.NULL (VALORE NULLO)
//Rappresenta la mancanza intenzionale di un valore, fattibile solo con LET e non con CONST!
//ESEMPIO DI NULL:
let risposta = null;
console.log(risposta);

//DATI COMPLESSI
//E' un tipo di DATO che può contenere più valori e proprietà e si può dividere i OBJECT, ARRAY e FUNZIONE (FUNCTION).

//OBJECT si tratta di un insieme di valori e proprietà che possono essere prelevati songolarmente tramite parola chiave appropriata
//ESEMPIO CON OBJECT:
const persona = {
    nome: "Gabriele",
    cognome: "Del Monaco",
    età: 34,
};
console.log(persona);//mi stamperà tutto l elenco scritto sopra con i vari valori e propietà specifiche tutto dentro{}
//Per prelevare un singolo elemnmeto all interno dell OBJECT userò la ParolaChiave.ValoreSpecifico:
console.log(persona.nome);//stamperà SOLO Gabriele
console.log(persona.cognome);//stamperà SOLO Del Monaco
console.log(persona.età);//stamperà SOLO 34
//In definitiva l OBJECT può essere considerato come un dizionario con al suo interno tante parole che possono essere prelevate tramite l utilizzo di parole chiave.

//L'ARRAY è molto simile all'OBJECT per contenuti e valori al suo interno ma è definito con [] e per prelevare gli elementi al suo interno si utilizza la parolachiave[] dove all'interno delle quadre metteremo SOLO valori numerici i quali indicizzeranno gli elementi all' interno dell ARRAY, ZERO COMPRESO!
//ESEMPIO DI ARRAY:
let colori = ["blue", "rosso","verde"];
console.log(colori);//stamperà tutta l'ARRAY compresa di []
//Per prelevare un singolo elemento all interno dell ARRAY utilizzaremo la ParolaChiave[NumeroIdicizzato]:
console.log(colori[0]);//stamperà blue
console.log(colori[1]);//stamperà rosso
console.log(colori[2]);//stamperà verde
//In definitiva l ARRAY può essere considerata come una lista di numeri indicizzari e asseganti automaticamente dal sistema che possono essere prelevati tramite l utilizzo della parola chiave e specificando all interno delle [] la posizione idicizzata dell elemento che vogliamo stampare.

//FUNZIONE (FUNCTION ())
//Le funzioni in JS sono definite OGGETTI COMPLESSI SPECIALI ed è invocabile in qualunque parte del codice purchè prima sia stata dichiarata.
//ESEMPIO DI FUNCTION ():
function saluta() {
    console.log("Ciao");
};//qui ho dichiarato la FUNCTION()

saluta()//qui ho evocato la FUNCTION() e in console mi stamperà Ciao
saluta()
saluta()
saluta()
//posso evacarla tutte le volte che voglio senza problemi di conflitti di valori

//CONCATENAZIONE
//Con le STRINGHE possiamo compiere anche operazioni di CONCATENAZIONE ovvero sommare più stringhe tra loro per creare frasi di senso compiuto mediante l utilizzo del simbolo di sommatoria +
//ESEMPIO DI CONCATENZIONE:
const username3 = "Gabriele "
let userCar = " è una Ford EcoSport ";
let userCarColor = "di colore Titanium";
let frase2 = "La macchina di ";
let result3 = frase2 + userName2 +userCar + userCarColor;
/* let result3 = `${frase2}${userName2}${userCar}${userCarColor}`; *///posso anche farlo con il BACKTICK ed avrà lo stesso risultato
console.log(result3)//stamperà in console la macchina di Gabriele è una Ford Ecosport di colore Titanium

//Operatori
//Strutture Condizionale
//Ciclo For
//Array
//Oggetti
//Funzioni
//DOM
//Logica e mini-progetti:
//Calcolatrice, lista della spesa, contatore click, generatore di numeri casuali, gioco(indovina il numero)