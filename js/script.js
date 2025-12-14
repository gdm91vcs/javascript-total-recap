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
//NOTA AGGIUNTIVA SULLE OPERAZIONI: ESISTE ANCHE IL MODULO (%) IL QUALE SERVE A FARCI SAPERE IL VALORE DEL RESTO DELLA DIVISIONE
//ESEMPIO DI MODULO (%):
console.log(a % b);//stamperà 0 perchè il resto della divisone tra 10 e 5 è nullo!
let e = 3;
console.log(a % e)//stamperà 1 perchè il resto della divisione tra 10 e 3 è esattamente 1!

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
//E' un tipo di DATO che può contenere più valori e proprietà e si può dividere in OBJECT, ARRAY e FUNZIONE (FUNCTION()).

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
console.log(result3)//stamperà in console la macchina di Gabriele è una Ford Ecosport di colore Titanium.

//TRASFORMARE UNA STRINGA IN UN NUMERO E VICEVERSA (PARSEINT per i NUMERI INTERI - PARSEFLOAT per i NUMERI DECIMALI)
//Esempio da STRINGA a NUMERO INTERO con PARSEINT():
const number = "34";
console.log(number);//stamperà 34 STRINGA

const stringNumber = parseInt(number);
console.log(stringNumber);//Stamperà 34 NUMERO INTERO

//Esempio da STRINGA a NUMERO DECIMALE con PARSEFLOAT():
const decimNumber = "3.14";
console.log(decimNumber);//stamperà 3.14 STRINGA

const stringDecimNumber = parseFloat(decimNumber);
console.log(stringDecimNumber);//stamperà 3.14 NUMERO DECIMALE

//Esempio da NUMERO INTERO A STRINGA con STRING():
const num = 34;
console.log(num);//stamperà 34 NUMERO
const stringNum = String(num);
console.log(stringNum);//stamperà 34 STRINGA

//Esempio da NUMERO DECIMALE a STRINGA con STRING():
const decimNum = 3.14;
console.log(decimNum);//stamperà 3.14 NUMERO DECIMALE
const stringDecimNum = String(decimNum);
console.log(stringDecimNum);//stamperà 3.14 STRINGA

//Esempio da NUMERO INTERO a STRINGA con .TOSTRING():
const num2 = 34;
console.log(num2);//stamperà 34 NUMERO INTERO
const stringNum2 = num2.toString();
console.log(stringNum2);//stamperà 34 STRINGA

//Esempio da NUMERO DECIMALE a STRINGA con .TOSTRING():
const decimNumber2 = 3.14;
console.log(decimNumber2);//stamperà 3.14 NUMERO DECIMALE
const stringDecimNum2 = decimNumber2.toString();
console.log(stringDecimNum2);//stamperà 3.14 STRINGA

//QUANTO E' LUNGA UNA STRINGA?
//posso anche sapere da quanti caratteri (spazi e simboli compresi) è composta una STRINGA specifica con .length
//ESEMPIO:
let text = "Ciao mondo!";
console.log(text);//stamperà Ciao mondo!
let lengthText = text.length;
console.log(lengthText);//stamperà 11 caratteri compresi di spazi e simboli

//CHE LETTERA C'E' IN UNA DETERMINATA POSIZIONE IN UNA FRASE?
//in JS posso accederea una lettera in una certa posizione della stringa usando le parentesi [] o il metodo .chart()
//La STRINGA in JS si comporta quasi come se fosse un ARRAY indicizzato (compreso lo zero iniziale)!
//ESEMPIO CON []:
let testo = "Ciao mondo!";
let lettera = testo[2];
console.log(lettera);//stamperà a che nella STRINGA è indicizzata con il numero 2

//ESEMPIO CON .CHART():
let testo2 = "Ciao mondo!";
let letter = testo2.charAt(2);
console.log(letter);//stamperà a esattamente come sopra con le []
//NOTA FINALE: [] E .CHART() HANNO LA STESSA FUNZIONE, SOLO CHE .CHART() E' UN METODO PIù SICURO ANCHE SUI BROWSER PIù DATATI)

//VOGLIO ESTRARRE UNA PORZIONE DI TESTO DA UN STRINGA
//Posso anche estrarre una porzione di testo da una stringa (cioè una sottostringa) usando .slice() esattamente come in un ARRAY, scrivendo nelle () da che indice a che indice estrarre.
//ESEMPIO CON .SLICE():
let text2 = "Ciao mondo!";
let porzioneText = text2.slice(0,4);
console.log(porzioneText); 

//POSSO ANCHE USARE INDICI NEGATIVI PER CONTARE DALLA FINE DELLA STRINGA SEMPRE USANDO .SLICE()
//ESEMPIO:
let text3 = "Ciao mondo!";
let fineTesto = text3.slice(-6)
console.log(fineTesto);//stamperà mondo! perchè siamo partiti a contare dalla fine della stringa andando al contrario
//NOTA FINALE: .SLICE() CON INDICI NEGATIVI SI COMPORTA ESATTAMENTE COME QUELLO POSITIVO DOVE IL PRIMO INDICE (0) è SEMPRE COMPRESO MENTRE L ULTIMO NO.

//VOGLIO CONTROLLARE SE UN CERTO VALORE è PRESENTE DENTRO UN ARRAY O IN UNA STRINGA
//Il metodo per il controllo avviene mediate l utilizzo di .includes() il quale ci restituirà un valore Booleano (TRUE/FALSE)
//TRUE se il valore cercato è stato trovato
//FALSE se il valore cercato non è stato trovato
//ESEMPIO .INCLUDES() CON UN ARRAY:
const frutti = ["mela","banana","pera"];
console.log(frutti);//stamperà tutta l ARRAY in console
console.log(frutti.includes("banana"));//stamperà TRUE perchè il valore che ho cercato è presente nell mio ARRAY
console.log(frutti.includes("arancia"));//stamperà FALSE perchè il valore che ho cercato non è presente nel mio ARRAY

//ESEMPIO .INCLUDES() SU UNA STRINGA:
const frase3 = "Ciao mondo!";
console.log(frase3.includes("Ciao"));//stamperà TRUE perchè il valore che ho cercato è presente nella STRINGA
console.log(frase3.includes("Salve"));//stamperà FALSE perchè il valore che ho cercato non è presente nella STRINGA

//VOGLIO SOSTITUIRE UNA PARTE DI UN ASTRINGA CON UN ALTRA
//Il metodo di sostituzione nelle STRINGHE è CON .REPLACE() IL QUALE RESTITUISCE UNA NUOVA STRINGA SENZA MODIFICARE QUELLA ORIGINALE
//ESEMPIO .REPLACE() SOSTITUZIONE PAROLA:
const testo3 = "Ciao mondo!";
const nuovoTest3 = testo3.replace("mondo!", "Gab!");
console.log(nuovoTest3);//stamperà Ciao Gab! mantenendo la stringa originale qui nel codice
//NOTA FINALE: .REPLACE() ANDRà A SOSTITUIRE SOLO LA PRIMA PAROLA DELLA FRASE/STRINGA

//VOGLIO SOSTITUIRE PIù PARTI DI UNA STRINGA
//Il metodo di sostituzione di più parti di una STRINGA avviene tramite l utilizzo di .REPLACEALL()
//ESEMPIO .REPLACEALL():
const frase4 = "ciao ciao mondo ciao!";
const nuovaFrase4 = frase4.replaceAll("ciao","hello");//qui ho specificato che bisogna sostituire tutti i ciao con hello
console.log(nuovaFrase4);//stamperà hello hello mondo hello andando a sostituire hello con tutti i ciao presenti nella stringa

//VOGLIO TRASFORMARE LE PAROLE DI UNA STRINGA IN MAIUSCOLO
//Per applicare questo metodo useremo .toUpperCase() il quale trasformerà le parole da noi selezionate in maiuscolo
//ESEMPIO .TOUPPERCASE():
let parola = "casa";
let maiuscolaParola = parola.toLocaleUpperCase();
console.log(maiuscolaParola);//stamperà CASA tutto maiuscolo

//VOGLIO TRASFORMARE UNA PAROLA DI UNA STRINGA IN MINUSCOLO
//Useremo .TOLOWERCASE() per trasformare la parola tutti in minuscolo
//ESEMPIO .TOLOWERCASE():
let parola2 = "AUTOMOBILE";
let minuscolaParola2 = parola2.toLocaleLowerCase();
console.log(minuscolaParola2);//stamperà automobile tutto in minuscolo

//VOGLIO SAPERE DOVE SI TROVA UNA CERTA LETTERA O PAROLA IN UNA STRINGA
//Per applicare questa ricerca useremo .indexOf() per trovare sia la posizione di un parola e sia quella di una lettera
//ESEMPIO .INDEXOF() PER TROVARE LA POSIZIONE DI UNA PAROLA:
let frase5 = "Mi piace la pizza!";
let posizioneParola = frase5.indexOf("pizza!");//qui gli sto dicendo di verificare in quale posizione inizi la parola pizza
console.log(posizioneParola);//stamperà 12 perchè nell idice 12 la parola pizza ha la p iniziale

//ESEMPIO .INDEXOF() PER TROVARE UNA LETTERA IN UNA PAROLA:
let frase6 = "banana";
let posizioneLettera = frase6.indexOf("n");//qui gli sto dicendo di stampare la posizone indice della prima lettera n disponibile in quella parola
console.log(posizioneLettera);//stamperà 2 perchè la prima n disponibile nella parola banana si trova nella posizione indice pari a 2
//NOTA FINALE: se la nostra ricerca tramite .indexOff() darà come risultato -1 vuol dire che la ricerca di quella parola/lettera ha dato esito negativo

//VOGLIO DIVIDERE UNA STRINGA IN PIù PARTI, RACCOGLIERE IL RISULTATO IN UN ARRAY E USARE UN SEPARATORE DA ME SCELTO
//Per applicare questo metodo utilizzerò .split() il quale mi creerà un array dividendole parole racchiuse in doppo apici
//ESEMPIO .SPLIT() DI UNA FRASE CLASSICA:
let frase7 = "Ciao come stai?";
let divisioneFrase = frase7.split(" ");//qui ho detto di creare un ARRAY e dividere ogni parola con i doppi apici 
console.log(divisioneFrase);//stamperà ["Ciao","come","stai?"]

//ESEMPIO .SPILT() PER LE LETTERE CHE VOGLIO TOGLIERE:
let parola3 = "banana";
let pezziParola = parola3.split("n");//qui ho detto creami un ARRAY di quella parola eliminandi tutte le n
console.log(pezziParola);//stamperà ["ba", "a", "a"]

//ESEMPIO .SPLIT() DIVIDERE OGNI SINGOLA LETTERA:
let testo4 = "Ciao";
let singoleLettere = testo.split("")//qui ho detto di creare un ARRAY con dentro ogni singola lettera divisa della parola ciao racchiuse nei doppi apici
console.log(singoleLettere);//stamperà ['C', 'i', 'a', 'o', ' ', 'm', 'o', 'n', 'd', 'o', '!']

//VALORI SPECIALI (ISNAN - NAN - NUMBER.ISNAN())
//Sono anche chiamti FUNZIONI SPECIALI e servono per gestire casi particolari con i numeri

//NAN (NOT A NUMBER)
//è un valore speciale che significa "QUESTO NON è UN NUMERO VALIDO" e compare quando un operazione matematica o una conversione non riesce a produrre un numero
//ESEMPI CON NAN:
console.log(0/0);//stamperà NAN perchè 0 diviso 0 in matematica non è un numero valido e non ha senso
console.log(parseInt("ciao"));//stamperà NAN perchè ciao non si può trasformare in un numero

//ISNAN (IS NOT A NUMBER)
//è una funzione speciale che CONTROLLA se un valore è NAN oppure non può essere convertito in un numero. Serve per capire se un valore rappresenta qualcosa di non numerico
//detto più semplicemente, risponde alla domanda: "PUò ESSERE CONVERTITO IN UN NUMERO?"
//NO! PERCHè ALLORA è GIà UN NUMERO
//SI! PUò ESSERE CONVERTITO IN UN NUMERO
//ESEMPI CON ISNAN:
console.log(isNaN(123));//stamperà FALSE perchè 123 è già un numero
console.log(isNaN("123"));//stamperà FALSE perchè può essere convertito in un numero
console.log(isNaN("ciao"));//stamperà TRUE perchè è vero che non può essere convertito in un numero
console.log(isNaN(NaN));//stamperà TRUE perchè è vero che non è un numero

//SE VOLESSI VERIFICARE SE QUEL NUMERO è UN NUMERO OPPURE NO?
//In questo caso userei NUMBER.ISNAN() il quale no fa per conversioni ma controlla solo se il valore in questione è numerico oppure no (NAN)
//ESEMPIO NUMBER.ISNAN():
let x1 = NaN;
console.log(Number.isNaN(x1));//stamperà TRUE perchè x1 è proprio un NAN
let y = "123";
console.log(Number.isNaN(y));//stamperà FALSE perchè è una STRINGA e non un numero
let z = "ciao";
console.log(Number.isNaN(z));//stamperà FALSE perchè è una STRINGA
let w = 123;
console.log(Number.isNaN(w));//stamperà FALSE perchè è un numero valido

//GLI OPERATORI AND, OR, NOT
//Sono degli OPERSTORI LOGICI che ci permettono di controllare il valore di verità di una o più espressioni. Questo operatori spesso li utilizziamo per decidere cosa fare in base a determinate condizioni richieste (IF o FOR)
//NELLA PRATICA SIMBOLICA:
//AND (&&): E
//OR (||): O
//NOT (!): NON

//AND (&&) restituisce il primo valore FALSO o, se tutti sono VERI, solo l'ultimo
//ESEMPIO CON AND (&&) IN UN IF:
let età1 = 21;
let patente = true;
//ENTRIAMO NEL CONTROLLO TRAMITE IF
if(età1 >= 18 && patente) {
    console.log("Sei maggiorenne, puoi guidare!");
} else {
    console.log("Sei minorenne, non puoi guidare!")
}
//AND (&&) dice TUTTE E DUE LE CONDIZIONI DEVONO ESSERE VERE
//1. SE UN VALORE è FALSO: FALSE
//2. SE TUTTI I VALORI SONO VERI: TRUE

//OR (||) è MOLTO UTILE QUANDI BASTA UNA SOLA CONDIZIONE DI VERIFICA VERA O FALSA
//ESEMPIO OR (||) IN UN IF:
let haiLeChiavi = true;
let haiIlTelecomando = false;
if(haiLeChiavi || haiIlTelecomando) {
    console.log("Puoi entrare in casa!")
}
//OR (||) DICE BASTA CHE UNA DELLE DUE CONDIZIONI SIA VERA E FUNZIONA AL CONTRARIO DI AND (&&)

//NOT(!) SERVE PER INVERTIRE IL VALORE DI UNA CONDIZIONE:
 //ESEMPIO NOT(!) IN UN IF:
let portaChiusa = true;
if(!portaChiusa) {
    console.log("La porta è aperta!");
} else {
    console.log("La porta è chiusa!");
}
//NOT(!) DICE BASTA CHE UNA CONDIZIONE SIA VERA O FALSA ED IO TE LA CONVERTO NELL OPPOSTO!

//OPERATORI RELAZIONALI
//Questi operatori servono a confrontare due valori e restituiscono sempre TRUE o FALSE
//MAGGIORE DI > controlla se il valore di sinistra è maggiore di quello di destra
//ESEMPIO CON >:
let a1 = 5;
let b1 = 3;
console.log(a1>b1);//stamperà TRUE
console.log(b1>a1);//stamperà FALSE

//MINORE DI < controlla se il valore di sinistra è minore di quello di destra
//ESEMPIO CON <:
let a2 = 10;
let b2 = 8;
console.log(b2<a2);//stamperà TRUE
console.log(a2<b2);//stamperà FALSE

//MAGGIORE O UGUALE DI >= controlla se il valore di sinistra è maggiore o uguale a quello di destra
//ESEMPIO CON >=:
let a3 = 6;
let b3 = 7;
console.log(b3>=a3);//stamperà TRUE
console.log(a3>=b3);//stamperà FALSE

//MINORE UGUALE DI <= controlla se il valore di sinistra è minore o uguale di quello di destra
//ESEMPIO CON <=:
let a4 = 5;
let b4 = 9;
console.log(a4<=b4);//stamperà TRUE
console.log(b4<=a4);//stamperà FALSE

//UGUALE == controlla se i valori sono uguali dopo la conversione dei tipi
//ESEMPIO CON ==:
let a5 = 5;//numero
let cinque = "5";//stringa
console.log(a5==cinque);//stamperà TRUE perchè la STRINGA verrà convertita in numero perchè hanno lo stesso valore! Se ci fosse stato 6 (in a5 o in "cinque") in console sarebbe stato stampato FALSE perchè i due valori di base, numero e stringa, sono diversi e non convertibili

//UGUALE STRETTAMENTE === controlla se i valori sono puramente uguali tenendo conto dei loro valori (stringa/numero)
//ESEMPIO CON ===:
let a6 = 5;
let cinque1 = "5";
console.log(a6===cinque1);//stamperà FALSE perchè il numero 5 non sarà mai uguale alla stringa "5"!

//DIVERSO != controlla sei i valori non sono uguali con la conversione dei tipi
//ESEMPIO CON !=:
let a7 = 8;
let b7 = "6";
let c1 = "8";
console.log(a7!=b7);//stamperà TRUE
console.log(a7!=c1);//stamperà FALSE

//DIVERSO STRETTAMENTE !== controlla se i valori o il tipo siano diversi
//ESEMPIO CON !==:
let a8 = 5;
let b8 = "5";
console.log(a8!==b8);//stamperà TRUE
console.log(a8!==a8);//stamperà FALSE
console.log(b8!==b8);//stamperà FALSE
//NOTE FINALI: USA SEMPRE === E !== PER NON AVERE PROBLEMI CON LE VARIE CONVERSIONIDEI TIPI!

//STRUTTURE CONDIZIONALI (IF) (ELSE IF) (ELSE)
//Queste istruzioni servono per eseguire e verifcare le condizioni di un codice e stabilire se sono vere o false
//ESEMPIO PRATICO: "SE SUCCEDE X, ALLORA FAI Y ALTRIMENTI FAI Z"
//STRUTTURA BASE:
//let (CONDIZIONE) {
//CODICE DA ESEGUIRE PER VERIFCARE LA CONDIZIONE;
//}
//ESEMPIO CON IF:
let età2 = 18;
if(età2 >= 18) {
    console.log("Puoi entrare!");
}
//SPIEGAZIONE:LA CONDIZIONE PRINCIPALE DI VERIFICA è AVERE 18 ANNI. SE L ETà è MAGGIORE UGUALE DI 18 ALLORA STAMPERà "PUOI ENTRARE!", SE NO NON SUCCEDE NULLA! 

//AGGIUNGIAMO ELSE
//SE VOGLIO DIRE "ALTRIMENTI FAI QUALCOS ALTRO" USERò ELSE PER AVERE UNA CONDIZIONE E UNA RISPOSTA DIVERSA
//ESEMPIO CON ELSE:
let età3 = 16;
if(età3 >= 18) {
    console.log("Puoi entrare!");
} else {
    console.log("Non puoi entrare!");
}
//SPIEGAZIONE: LA CONDIZIONE PRINCIPALE DI VERIFICA è QUELLA DI AVERE 16 ANNI. SE L ETà è MAGGIORE UGUALE DI 18 STAMPERà "PUOI ENTRARE!" ALTRIMENTI (COME IN QUESTO CASO) STAMPERà "NON PUOI ENTRARE!"

//AGGIUNGIAMO ELSE IF
//SERVE PER CONTROLLARE PIù CONDIZIONI E DOVRò AGGIUNGERE LA SUA CONDIZIONE DI VERIFICA APPROPRIATA. NE POSSO USARE QUANTI NE VOGLIO.
//ESEMPIO CON ELSE IF:
let voto = 7;
if (voto >= 9) {
    console.log("Ottimo");
} else if (voto >= 7) {
    console.log("Buono");
} else if (voto === 6) {
    console.log("Sufficiente")
} else {
    console.log("Insufficiente")
}
//SPIEGAZIONE: LA CONDIZIONE PRINCIPALE DI VERIFCA è IL VOTO 7. SE IL VOTO è MAGGIORE UGUALE DI 9 STAMPERà "OTTIMO". SE IL VOTO è MAGGIORE UGUALE DI 7 STAMPERà "BUONO". SE IL VOTO è UGUALE A 6 STAMPERà "SUFFICIENTE". ALTRIMENTI STAMPERà "INSUFFICIENTE"

//ESERCIZI:
//CHIEDI ALL UTENTE UN NUMERO (USANDO PROMPT) E STAMPA:
//POSITIVO: SE IL NUMERO è > DI 0
//NEGATIVO: SE IL NUMERO è < DI 0
//ZERO: SE IL NUMERO è === A 0
/* const userNumber = Number(prompt("Scrivi un numero!"));
console.log(userNumber);
if (userNumber > 0) {
    console.log("Positivo");
} else if (userNumber < 0) {
    console.log("Negativo")
} else if (userNumber === 0) {
    console.log("Zero")
} else {
} */
//SPIEGAZIONE: LA CONDIZIONE PRINCIPALE è VERIFICARE IL NUMERO CHE SCRIVERà L UTENTE. USERò PROMPT PER CREARE IL POP UP DI RICHIESTA. USERò NUMBER PRIMA DEL PROMPT PER CONVERTIRE IMMEDIATAMENTE IL VALORE SCRITTO DALL UTENTE IN NUMERO (ALTRIMENTI SAREBBE STATO STRINGA). SE IL NUMERO è MAGGIORE DI 0 ALLORA STAMPERè "POSITIVO". SE IL NUMERO è MINORE DI 0 STAMPERà "NEGATIVO". SE IL NUMERO è 0 STAMPERà 0.

//CHIEDI ALL UTENTE LA SUA ETà E STAMPA LA RISPOSTA: SE è MAGGIORENNE STAMPA SEI MAGGIORENNE, SE MINORENNE STAMPA SEI MINORENNE.
/* let userAge1 = Number(prompt("Scrivi la tua età!"));
console.log(userAge1);
if (userAge1 >= 18) {
    console.log("Sei maggiorenne!");
} else if (userAge1 <= 17) {
    console.log("Sei minorenne!");
} */

//VOTO SCOLASTICO CON TUTTE LE VALUTAZIONI.
/* let votoStudente = 10;
console.log(votoStudente);
if (votoStudente <= 5) {
    console.log("Insufficiente");
} else if (votoStudente === 6) {
    console.log("Sufficiente");
} else if (votoStudente === 7) {
    console.log("Buono");
} else if (votoStudente === 8 || votoStudente === 9) {
    console.log("Ottimo");
} else {
    console.log("Eccellente");
} */
//SPIEGAZIONE: LA CONDIZIONE PRINCIPALE è IL VOTO DELLO STUDENTE RACCHIUSO IN UN LET. UNA VOLTA VERIFICATO QUESTO VOTO HO APPLICATO LE RELATIVE VALUTAZIONI DA INSUFFCIENTE FIN AD ARRIVARE A ECCELLENTE! NELLA SEZIONE DELL OTTIMO (VOTO TRA 8/9) NON VA LA VIRGOLA MA L OPERATORE OR!

//SCRIVI UN PICCOLO PROGRAMMA CHE CONTROLLI SE UN NUMERO è PARI O DISPARI
/* let userNumber1 = Number(prompt("Scrivi un numero!"));
if(userNumber1 % 2 === 0) {
    console.log("E' un numero pari!");
} else {
    console.log("E' un numero dispari!");
} */
//SPIEGAZIONE: LA CONDIZIONE PRINCIPALE è IL NUMERO CHE L UTENTE SCRIVERà! SE IL NUMERO è DIVISIBILE PER 2 (MINOR NUMERO POSSIBILE PER SODDISFARE LA PARITà) E DA RESTO UGUALE A ZERO ALLORA STAMPO E UN NUMERO PARI, ALTRIMENTI STAMPA E UN NUMERO DISPARI!

//VALUTA LA TEMPERATURA AMBIENTALE: SE è SOTTO I 10 GRADI SCRIVI FA FREDDO! SE è TRA 10 E 25 SCRVII TEMPERATURA PIACEVOLE. SE è SUPERIORE A 25 GRADI SCRIVI FA CALDO!
let temperatura = 26;
if(temperatura <= 10) {
    console.log("Fa freddo!");
} else if (temperatura > 10 && temperatura <= 25) {
    console.log("Temperatura piacevole!")
} else if (temperatura > 25) {
    console.log("Fa caldo!");
}
//SPIEGAZIONE: LA CONDIZIONE PRINCIPALE è LA TEMPERATURA AMBIENTALE DA VERIFICARE E VALUTARE. SE LA TEMP è MINORE UGUALE DI 10 STAMPO FA FREDDO! SE LA TEMPERATURA è COMPRESA RTA 10 E 25 STAMPO TEMPERATURA PIACEVOLE (USANDO L OPERATORE && IL QUALE MI AIUTA A CONTROLLARE IL RANGE DA ME VOLUTO). SE LA TEMP è MAGGIORE DI 25 STAMPO FA CALDO!

//LOGIN SEMPLICE. CHIEDI ALL UTENTE DI INSERIRE I SUOI DATI E CONTROLLA SE LA PASSWORD E L USERNAME DA LUI INSERITI SIANO CORRETTI.
/* let userNomeUtente = prompt("Inserisci il nome utente:");
let passwordUtente1 = Number(prompt("Inserisci la password:"));

let userName4 = "admin";
let passwordUtente2 = 1234;

if (userNomeUtente === userName4 && passwordUtente1 === passwordUtente2) {
    console.log("Accesso riuscito!")
} else {
    console.log("Accesso negato!")
} */

//CHIEDI ALL UTENTE 3 NUMERI E STAMPA IN CONSOLE IL NUMERO PIù GRANDE TRA LORO
/* let userNumber1 = Number(prompt("Scrivi il primo numero"));
let userNumber2 = Number(prompt("Scrivi il secondo numero"));
let userNumber3 = Number(prompt("Scrivi il terzo numero"));
console.log(userNumber1, userNumber2, userNumber3);

if (userNumber1 >= userNumber2 && userNumber1 >= userNumber3) {
    console.log("Il primo numero è il più grande");
} else if (userNumber2 >= userNumber1 && userNumber2 >= userNumber3) {
    console.log("Il secondo numero è il più grande");
} else if (userNumber3 >= userNumber1 && userNumber3 >= userNumber2) {
    console.log("Il terzo numero è il più grande");
} */

//CHIEDI ALL UTENTE UN NUMERO. SE è DIVISIBILE PER 3 STAMPA "è MULTIPLO DI 3" ALTRIMENTI STAMPA "NON è MULTIPLO DI 3"
/* let userNumber = Number(prompt("Scrivi un numero"))
console.log(userNumber);

if (userNumber % 3 === 0) {
    console.log("Il numero è un multiplo di 3");
} else {
    console.log("Il numero non è un multiplo di 3");
} */

//CHIEDI UN NUMERO ALL UTENTE E INDOVINA SE è MAGGIORE DI 100 STAMPA "NUMERO PIù GRANDE DI 100". SE è PIù PICCOLO STAMPA "NUMERO è PIù PICCOLO DI 100". SE UGUALE SCRIVI "NUMERO UGUALE A 100"
/* let userNumber = Number(prompt("Scrivi un numero"));
console.log(userNumber);
 if (userNumber < 100) {
    console.log("Il numero è minore di 100");
 } else if (userNumber === 100) {
    console.log("Il numero è uguale a 100");
 } else {
    console.log("il numero è maggiore di 100");
 }
 */

//CHIEDI ALL UTENTE UNA PAROLA. SE INIZIA PER A STAMPA CHE LA PAROLA INIZIA PER A. SE FINISCE CON Z STAMPA CHE FINISCE CON Z. ALTRIMENTI STAMPA è UNA PAROLA NORMALE.
/* let userWord = prompt("Scrivi una parola")

if (userWord.startsWith("A")) {
    console.log("La parola inizia con A");
} else if (userWord.startsWith("a")) {
    console.log("La parola inizia con a");
} else if (userWord.endsWith("z")) {
    console.log("La parola finisce con z")
} else {
    console.log("E' una parola normale")
} */

//CHIEDI ALL UTENTE DUE NUMERI E VERIFICA CHI DEI DUE è IL MAGGIORE, IL MINORE O SE SONO UGUALI
/* let userNumber1 = Number(prompt("Scrivi il primo numero"))
let userNumber2 = Number(prompt("Scrivi il secondo numero"))
console.log(userNumber1, userNumber2);

if (userNumber1 > userNumber2) {
    console.log("Il primo numero è maggiore");
} else if (userNumber1 < userNumber2) {
    console.log("Il secondo numero è maggiore");
} else if (userNumber1 === userNumber2) {
    console.log("I numeri sono uguali");
} */

//CONTROLLO PASSWORD SICURA. CHIEDI ALL UTENTE UNA PASSWORD. CONSIDERA LA PASSWORD SICURA SE CONTIENE ALMENO UNA LETTERA MAIUSCOLA, UN NUMERO ED è ALMENO DI 8 CARATTERI. SE NON SODDISFA QUESTI REQUISITI STAMPA PASSWORD DEBOLE
/* let userPassword = prompt("Scrivi QUI la tua password");
console.log(userPassword);

if (userPassword.length >= 8 && /[0-9]/.test(userPassword) && /[A-Z]/.test(userPassword) && /[\!\@\#\$\%\^\&\*]/.test(userPassword)) {
    console.log("PASSWORD SICURA");
} else {
    console.log("PASSWORD DEBOLE, DEVE CONTENERE UNA LETTERA MAIUSCOLA, UN NUMERO, UN CARATTERE SPECIALE ED ESSERE LUNGA ALMENO 8 CARATTERI!");
} */

//CHIEDI UN NUMERO ALL UTENTE. STAMPA PARI SE è PARI. STAMPA DISPARI SE è DISPARI
/* let userNumber = Number(prompt("Scrivi un numero"));
console.log(userNumber);

if(userNumber % 2 === 0) {
    console.log("PARI");
} else {
    console.log("DISPARI");
} */

//CHIEDI UN NUMERO ALL UTENTE. SE è POSITIVO STAMPA POSITIVO, SE NEGATIVO STAMPA NEGATIVO SE è ZERO STAMPA ZERO.
/* let userNumber = Number(prompt("Scrivi un numero"));
console.log("userNumber");

if(userNumber > 0) {
    console.log("POSITIVO");
} else if (userNumber < 0) {
    console.log("NEGATIVO");
} else if (userNumber === 0) {
    console.log("ZERO");
} */

//CHIEDI ALL UTENTE DUE NUMERI. STAMPA QUALE DEI DUE è MAGGIORE O SE SONO UGUALI
/* let userNumber = Number(prompt("Scrivi il primo numero"));
let userNumber2 = Number(prompt("Scrivi il secondo numero"));
console.log(userNumber, userNumber2);

if(userNumber > userNumber2) {
    console.log(userNumber);
} else if (userNumber < userNumber2) {
    console.log(userNumber2);
} else if (userNumber === userNumber2) {
    console.log("I NUMERI SONO UGUALI");
} */

//CHIEDI ALL UTENTE UN NUMERO DA 1 A 10. STAMPA IL RELATIVO VOTO SCOLASTICO ASSOCIATO
/* let userNumber = Number(prompt("Scrivi un numero da 1 a 10"));
console.log(userNumber);

if(userNumber > 10) {
    console.log("NUMERO NON VALIDO");
} else if (userNumber < 6) {
    console.log("Insufficiente");
}else if (userNumber === 6 || userNumber === 7 ) {
    console.log("Sufficiente");
} else if (userNumber === 8) {
    console.log("Buono")
} else if (userNumber === 9) {
    console.log("Distinto");
} else if (userNumber === 10) {
    console.log("Ottimo");
} */

//CHIEDI ALL UTENTE LA SUA ETà E POI STAMPA LA RELATIVA FASCIA D ETà D APPARTENENZA
/* let userAgee = Number(prompt("Scrivi la tua età"));
console.log(userAgee);

if(userAgee < 13) {
    console.log("SEI UN BAMBINO");
} else if (userAgee >= 13 && userAgee <= 17) {
    console.log("SEI ADOLESCENTE");
} else if (userAgee >= 18 && userAgee <= 64) {
    console.log("SEI ADULTO");
} else if (userAgee >= 65) {
    console.log("SEI ANZIANO")
} */

//CHIEDI ALL UTENTE UN NUMERO DA 1 A 4 E STAMPA LA RELATIVA STAGIONE ASSOCIATA
/* let userNumber = Number(prompt("Scrivi un numero da 1 a 4"));
console.log(userNumber);

if(userNumber === 1) {
    console.log("Inverno");
} else if (userNumber === 2) {
    console.log("Primavera");
} else if (userNumber === 3) {
    console.log("Estate");
} else if (userNumber === 4) {
    console.log("Autunno");
} else {
    console.log("NUMERO NON VALIDO")
} */

//CHIEDI ALL UTENTE 3 NUMERI. STAMPA SOLO QUELLO PIù GRANDE
/* let userNumber = Number(prompt("Scrivi il primo numero"));
let userNumber2 = Number(prompt("Scrivi il secondo numero"));
let userNumber3 = Number(prompt("Scrivi il terzo numero"));
console.log(userNumber, userNumber2, userNumber3);

if (userNumber > userNumber2 && userNumber > userNumber3) {
    console.log(userNumber);
} else if (userNumber2 > userNumber && userNumber2 > userNumber3) {
    console.log(userNumber2);
} else if (userNumber3 > userNumber && userNumber3 > userNumber2) {
    console.log(userNumber3);
} else if (userNumber === userNumber2 || userNumber === userNumber3 || userNumber2 === userNumber3) {
    console.log("I NUMERI SONO UGUALI");
} */

//CHIEDI ALL UTENTE 3 NUMERI (LATI). CONTROLLA SE POSSONO FORMARE UN TRIANGOLO EQUILATERO, ISOSCELE O SCALENO.
/* let userNumber = Number(prompt("Scrivi il primo numero"));
let userNumber2 = Number(prompt("Scrivi il secondo numero"));
let userNumber3 = Number(prompt("Scrivi il terzo numero"));
console.log(userNumber, userNumber2, userNumber3);

if (userNumber === 0 && userNumber2 === 0 && userNumber3 === 0) {
    console.log("NUMERI NON VALIDI! INSERIRE NUMERI REALI!")
} else if (userNumber === userNumber2 && userNumber2 === userNumber3) {
   console.log("Puoi creare un triangolo equilatero");
} else if (
    userNumber === userNumber2 && userNumber3 !== userNumber && userNumber2 
    ||
    userNumber2 === userNumber3 && userNumber !== userNumber2 && userNumber3
    ||
    userNumber3 === userNumber && userNumber2 !== userNumber3 && userNumber) {
    console.log("Puoi creare un triangolo isoscele")
} else if (userNumber !== userNumber2 && userNumber !== userNumber3) {
    console.log("Puoi creare un triangolo scaleno")
} */

//CHIEDI UN NUMERO DA 1 A 23 E STAMPA LA RELATIVA FASCIA ORARIA
/* let userOra = Number(prompt("Scrivi un numero da 0 a 23"));
console.log(userOra);

if (userOra >= 0 && userOra <= 5) {
    console.log("Notte");
} else if (userOra >= 6 && userOra <= 11) {
    console.log("Mattina");
} else if (userOra >= 12 && userOra <= 17) {
    console.log("Pomeriggio");
} else if (userOra >= 18 && userOra <= 23) {
    console.log("Sera");
} else {
    console.log("ORA NON VALIDA! INSERIRE L' ORARIO CORRETTO!")
} */

//CHIED ALL UTENTE UNA DATA QUALSIASI. CONTROLLA SE QUEL VALORE è BISESTILE.
/* let userData = Number(prompt("Scrvi una data qualsiasi"));
console.log(userData);

if (userData === 0) {
    console.log("DATA NON VALIDA! SCRIVERE UN DATA CORRETTA!")
} else if (userData % 400 === 0) {
    console.log("Non è un anno bisestile!");
} else if (userData % 100 === 0) {
    console.log("Non è un anno bisestile!");
} else if (userData % 4 === 0) {
    console.log("E' un anno bisestile!");
} else {
    console.log("Non è un anno bisestile!")
} */

//CHIEDI ALL UTENTE DI SCEGLIERE UN TIPO DI CAFFè ASSOCIATO AI NUMERI 1, 2 E 3 E STAMPA COSA HA SCELTO.

/* let userCaffè = Number(prompt("Scegli il tuo caffè tra 1, 2 e 3:"));
console.log("userCaffè");
 if (userCaffè === 0) {
    console.log("SCELTA NON VALIDA!");
 } else if (userCaffè === 1) {
    console.log("Hai scelto CAFFE' ESPRESSO")
 } else if (userCaffè === 2) {
    console.log("Hai scelto CAPPUCCINO")
 } else if (userCaffè === 3) {
    console.log("Hai scelto LATTE MACCHIATO")
 } else {
    console.log("SCELTA NON VALIDA!")
 } */

//CHIEDO ALL UTENTE UN PREZZO INTERO. APPLICA POI LO SCONTO ASSOCIATO AD ESSO.
/* let userPrezzo = Number(prompt("Scrivi un prezzo"))
console.log("userPrezzo");

if (userPrezzo === 0) {
    console.log("PREZZO NON VALIDO!");
} else if (userPrezzo < 50) {
    console.log("Nessuno sconto applicabile!");
} else if (userPrezzo > 100) {
    console.log("Hai lo sconto del 20%");
} else if (userPrezzo > 50 || userPrezzo < 100) {
    console.log("Hai lo sconto del 10%")
} */

//CHIEDO IL NOME ALL UTENTE. SE CORRISPONDE AI NOMINATIVI GIUSTI HA L ACCESSO CONSENTITO ALTRIMENTI NO.
/* let userNamee = prompt("Scrivi il tuo nome per l'accesso")
console.log(userNamee);

const userName1 = "Gabriele";
const userName22 = "Marco";
const userName3 = "Franco";

if (userNamee === userName1 || userNamee === userName22 || userNamee === userName3) {
    console.log("ACCESSO RIUSCITO");
} else {
    console.log("ACCESSO NEGATO")
} */

//CHIEDI L ETà ALL UTENTE E STAMPA LA FASCIA D ETà CORRISPONDENTE
/* let userAgee = Number(prompt("Scrivi qui la tua età"));
console.log(userAgee);

if (userAgee >= 0 && userAgee <= 2) {
    console.log("Neonato");
} else if (userAgee >= 3 && userAgee <= 12) {
    console.log("Bambino");
} else if (userAgee >= 13 && userAgee <= 17) {
    console.log("Ragazzo");
} else if (userAgee >= 18 && userAgee <= 64) {
    console.log("Adulto");
} else {
    console.log("Anziano");
} */

//CALCOLATRICE AVANZATA. CHIEDI ALL UTENTE NUMERO 1 E NUMERO 2 E STAMPA TUTTI I RISULTATI DELLE VARIE OPERAZIONI MATEMATICHE
/* let userNumber1 = parseFloat(prompt("Scrivi qui il primo numero"));
let userOperation = prompt("Scrivi qui l'operazione che desideri effettuare (+,-,*,/,%)");
let userNumber2 = parseFloat(prompt("Scrivi qui il secondo numero"));
console.log(userNumber1, userOperation, userNumber2);

if (userNumber2 === 0 && userOperation === "/" || userNumber2 === 0 && userOperation === "%") {
    console.log("L'operazione è impossibile!")
} else if (userOperation === "+") {
    console.log(userNumber1 + userNumber2);
} else if (userOperation === "-") {
    console.log(userNumber1 - userNumber2);
} else if (userOperation === "*") {
    console.log(userNumber1 * userNumber2);
} else if (userOperation === "/") {
    console.log(userNumber1 / userNumber2);
} else if (userOperation === "%") {
    console.log(userNumber1 % userNumber2);
} else {
    console.log("Operazione non valida");
} */

//TRIANGOLO VALIDO. CHIEDI ALL UTENTE 3 NUMERI (I LATI DI UN TRIANGOLO). è UN TRIANGOLO VALIDO SE OGNI LATO è MINORE DELLA SOMMA DEGLI ALTRI DUE.
/* let userNumber1 = Number(prompt("Scrivi il primo numero"))
let userNumber2 = Number(prompt("Scrivi il secondo numero"))
let userNumber3 = Number(prompt("Scrivi il terzo numero"))

if (userNumber1 + userNumber2 > userNumber3
    &&
    userNumber2 + userNumber3 > userNumber1
    &&
    userNumber1 + userNumber3 > userNumber2) {
    console.log("Triangolo valido")
} else {
    console.log("Tringolo non valido");
} */

//CONTROLLA SE IL TRIANGOLO è EQUILATERO, ISOSCELE O SCALENO
/* let userNumber1 = Number(prompt("Scrivi il primo numero"))
let userNumber2 = Number(prompt("Scrivi il secondo numero"))
let userNumber3 = Number(prompt("Scrivi il terzo numero"))

if (userNumber1 === userNumber2 
    && 
    userNumber2 === userNumber3) {
    console.log("Triangolo Equilatero")
} else if (
    userNumber1 === userNumber2
    ||
    userNumber2 === userNumber3
    ||
    userNumber3 === userNumber1) {
        console.log("Triangolo isoscele");
} else if (
    userNumber1 !== userNumber2
    &&
    userNumber2 !== userNumber3  
    &&
    userNumber3 !== userNumber1) {
    console.log("Triangolo scaleno");
} else {
    console.log("Triangolo non valido")
}
 */

//CICLO FOR
//ESEMPI:
//CONTARE DA 0 A 4:
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//CONTARE DA 1 A 5:
for (let i = 1; i < 6; i++) {
    console.log(i);
}

//CONTARE ALL INDIETRO:
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

//RIPETERE UNA PAROLA 3 VOLTE:
for (let i = 0; i < 3; i++) {
    console.log("Ciao");
}

//SALATARE DI 2 IN 2 FINO A 10:
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

//STAMPARE "GIRO NUMERO...":
for (let i = 1; i <= 10; i++) {
    console.log("Giro numero "+ i);
}

//ESEGUIRE UN GIRO ANCHE SENZA USARE i:
for (let i = 1; i <= 10; i++) {
    console.log("Sto girando...");
}

//ALTRI ESERCIZI:
//STAMPA I NUMERI DA 0 A 3:
for (let i = 0; i <= 3; i++) {
    console.log(i);
}

//STAMPA I NUMERI DA 1 A 4:
for (let i = 1; i <= 4; i++) {
    console.log(i);
}

//STAMPA LA PAROLA "CIAO" 5 VOLTE:
for (let i = 1; i <= 5; i ++) {
    console.log("Ciao");
}

//CONTA ALL INDIETRO DA 4 A 1:
for (let i = 4; i >= 1; i--) {
    console.log(i);
}

//STAMPA SOLO I NUMERI PARI DA 0 A 10:
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

//STAMPA SOLO I NUMERI DISPARI DA 0 A 10:
for (let i = 0; i <= 10; i += 3) {
    console.log(i);
}

//CONTA DA 2 A 10 SALTANDO DI 2:
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

//CONTA DA 5 A 20 SALTANDO DI 5:
for (let i = 5; i <= 20; i += 5) {
    console.log(i);
}

//CONTA ALL INDIETRO DA 10 A 0 SALTANDO DI 2:
for (let i = 10; i <= 1; i += 2) {
    console.log(i);
}

//STAMPA I NUMERI DA 3 A 15 E SALI DI 3 ALLA VOLTA:
for (let i = 3; i <= 15; i += 3) {
    console.log(i)
}

//CONTA ALL INDIETRO DA 10 A 0 SALTANDO DI 2:
for (let i = 10; i >= 0; i -= 2) {
    console.log(i)
}

//STAMPA 7 VOLTE LA FRASE "STO IMPARANDO!":
for (let i = 1; i <= 7; i ++) {
    console.log("Sto imparando!");
}

//STAMPA I NUMERI DA 10 A 50 SALTANDO DI 10:
for (let i = 10; i <= 50; i += 10) {
    console.log(i)
}

//STAMPA I NUEMRI DA -5 A 5:
for (let i = -5; i <= 5; i++) {
    console.log(i)
}

//CONTA DA 1 A 9 MA STAMPA SOLO I MULTIPLI DI 3:
for (let i = 3; i <= 9; i += 3) {
    console.log(i);
}

//CONTA ALL INDIETRO DA 20 A 5:
for (let i = 20; i >= 5; i--) {
    console.log(i);
}

//CONTA DA 0 A 30 SALTANDO DI 7:
for (let i = 0; i <= 30; i += 7) {
    console.log(i)
}

//STAMPA I NUMERI DA 100 A 50 SCENDENDO DI 5:
for (let i = 100; i >= 50; i -= 5) {
    console.log(i)
}

//STAMPA BOOM 12 VOLTE MA FAI INIZIARE I DA 3 (IL CICLO NON PARTE DA 0):
for (let i = 3; i <= 14; i++) {
    console.log("BOOM")
}

//CONTA ESATTAMENTE 4 A 14 MA ASSICURATI DI STAMPARLI ESATTAMENTE 6 VOLTE:
for (let i = 4; i <= 14; i += 2) {
    console.log(i);
}

//STAMPA I NUMERI DISPARI DA 1 A 19:
for (let i = 1; i <= 19; i +=2) {
    console.log(i);
}

//STAMPA LA FRASE "CICLO NUMERO..." PER I VALORI DA 5 A 10:
for (let i = 5; i <= 10; i++) {
    console.log("Ciclo numero " + i);
}

//STAMPA I NUMERI DA 1 A 5:
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//STAMPA I NUMERI DA 2 A 6:
for (let i = 2; i <= 6; i++) {
    console.log(i);
}

//STAMPA LA PAROLA "OK" 4 VOLTE:
for (let i = 0; i <= 3; i++) {
    console.log("OK");
}

//STAMPA I NUMERI DA 10 A 7:
for (let i = 10; i >= 7; i--) {
    console.log(i);
}

//STAMPA SOLO I NUMERI PARI DA 2 A 12:
for (let i = 2; i <= 12; i += 2) {
    console.log(i);
}

//CONTA DA 3 A 21 SALTANDO DI 3:
for (let i = 3; i <= 21; i += 3) {
    console.log(i);
}

//CONTA DA 7 A 35 SALTANDO DI 7:
for (let i = 7; i <= 35; i += 7) {
    console.log(i);
}

//CONTA ALL INDIETRO DA 16 A 0 SALTANDO DI 4:
for (let i = 16; i >= 0; i -= 4) {
    console.log(i);
}

//STAMPA I NUMERI DA 5 A 25 SALENDO DI 5:
for (let i = 5; i <= 25; i += 5) {
    console.log(i);
}

//STAMPA 6 VOLTE "FORZA!":
for (let i = 1; i <= 6; i++) {
    console.log("FORZA!");
}

//STAMPA I NUMERI DA 15 A 60 SALTANDO DI 15:
for (let i = 15; i <= 60; i += 15) {
    console.log(i);
}

//STAMPA I NUMERI DA -10 A 0:
for (let i = -10; i <= 0; i++) {
    console.log(i);
}

//STAMPA SOLO I MULTIPLI DI 4 DA 4 A 20:
for (let i = 4; i <= 20; i += 4) {
    console.log(i);
}

//CONTA ALL INDIETRO DA 30 A 10:
for (let i = 30; i >= 10; i--) {
    console.log(i);
}

//STAMPA I NUMERI DA 1 A 40 SALTANDO DI 9:
for (let i = 1; i <= 40; i += 9) {
    console.log(i);
}

//STAMPA I NUMERI DA 200 A 150 SCENDENDO DI 10:
for (let i = 200; i >= 150; i -= 10) {
    console.log(i);
}

//STAMPA "VIA!" 8 VOLTE MA FAI INIZIARE i DA 5:
for (let i = 1; i <= 8; i++) {
    console.log("VIA!");
}

//STAMPA I NUMERI DA 10 A 20 MA DEVI STAMPARNE ESATTAMENTE 6:
for (let i = 10; i <= 20; i += 2) {
    console.log(i);
}

//STAMPA I NUMERI DISPARI DA 3 A 27 USANDO i += 2:
for (let i = 3; i <= 27; i += 2) {
    console.log(i);
}

//STAMPA "SONO AL CICLO NUMERO..." CON VALORI DA 12 A 18:
for (let i = 12; i <= 18; i++) {
    console.log("Sono al ciclo numero "+ i);
}

//STAMPA I NUMERI DA 100 A 50 SCENDENDO DI 3:
for (let i = 100; i >= 50; i -= 3) {
    console.log(i);
}
console.log(50);//forzatura manuale

//STAMPA I NUMERI DA -30 A 30 SALENDO DI 6:
for (let i = -30; i <= 30; i += 6) {
    console.log(i);
}

//USA UN CICLO CHE VA DA 0 A 10 MA STAMPA i x 5:
for (let i = 0; i <= 10; i++) {
    console.log(i * 5);
}

//USA UN FOR CHE VA DA 10 A 20 MA STAMPA I VALORI i - 10:
for (let i = 10; i <= 20; i++) {
    console.log(i - 10);//shift matematico
}

//CONTA DA 1 A 7 MA STAMPA IL QUADRATO DEL NUMERO:
for (let i = 1; i <= 7; i++) {
    console.log(i * i);//calcola il quadrato senza modificare i
}

//FAI UN FOR DA 20 A 40 MA STAMPA SOLO NUMERI PARI:
for (let i = 20; i <= 40; i += 2) {
    console.log(i);
}

//CICLA DA 50 A 70 MA STAMPA i + 100:
for (let i = 50; i <= 70; i++) {
    console.log(i + 100);
}

//CICLA DA 0 A 5 MA STAMPA UNA SEQUENZA DISCENDENTE USANDO 5-i:
for (let i = 0; i <= 5; i++) {
    console.log(5 - i);//crea l inverso del risultato
}

//CONTA DA 0 A 12 SALENDO DI 3:
for (let i = 0; i <= 12; i += 3) {
    console.log(i);
}

//CICLA CHE VA DA 1 A 5 MA STAMPA i*10 + i:
for (let i = 1; i <= 5; i++) {
    console.log(i * 10 + i);//moltiplica i x 10 e aggiunge i vicino (senza sommare)! tipo: 1+1= 11 - 2+2= 22 ecc...
}

//CICLA DA 3 A 12 MA STAMPA LA METà DEI VALORI:
for (let i = 3; i <= 12; i++) {
    console.log(i / 2);//applicazione divisione
}

//CICLA DA 0 A 9 MA STAMPA i IN FORMA INVERTITA:
for (let i = 0; i <= 9; i++) {
    console.log((9-i)*2);//inverte l' ordine di i e lo raddoppia x2!
}

//CICLA DA 10 A 100 SALENDO DI 10
for (let i = 10; i <= 100; i += 10) {
    console.log(i);
}

//CICLA DA 1 A 8 MA STAMPA 3 X(i-1)
for (let i = 1; i <= 8; i++) {
    console.log((i-1)*3);//trasforma la sequenza naturale aggiungendo lo zero e togliendo però l ultimo valore (non più da 1 a 8 ma da 0 a 7) e con il 3* ho detto di moltiplicare ogni valore che abbiamo adesso x3!
}

//CICLA DA 0 A 4 MA STAMPA UN CONTO ALLA ROVESCIA:
for(let i = 0; i <= 4; i++) {
    console.log(20-(i*4));//i*4 crea la sequenza da 0 a 16. 20-(i*4) sottrae questi numeri da 20
}

//FORMULE DI SEQUENZA
//ESERCIZI:

//FOR DA 0 A 5 STAMPA i * 2:
for (let i = 0; i <= 5; i++) {
    console.log(i*2);//moltiplica i numeri naturali i x 2
}

//FOR DA 0 A 4 STAMPA 10-i:
for (let i= 0; i <= 4; i++) {
    console.log(10-i);//sottrae i numeri naturali di i a 10
}
//FOR DA 1 A 7 STAMPA (i-1)*4:
for (let i = 1; i <= 7; i++) {
    console.log((i-1)*4);//fa scalare di un numero la sequenza naturale di i e poi moltiplica il risultato x 4
}

//FOR DA 1 A 5 STAMPA i-1:
for (let i = 1; i <= 5; i++) {
    console.log(i-1);//fa scalare di 1 la sequenza naturale di i
}

//STAMPA LA SEQUENZA DEI NUMERI PARI PARTENDO DA 0 FINO A 10:
for (let i = 0; i <= 10; i +=2) {
    console.log(i);
}

//ARRAY:
//LISTA DELLA SPESA:
/* let spesa = ["pane","latte", "uova"]; */
//AGGIUNGIAMO BURRO ALLA FINE DELL ARRAY:
/* spesa.push("burro");
console.log(spesa); */
//RIMUOVI IL PRIMO ELEMENTO:
/* spesa.shift();
console.log(spesa); */
//CONTROLLA SE LATTE è ANCORA PRESENTE NELL ARRAY
/* console.log(spesa.includes("latte"));
console.log(spesa.includes("arancia")); */
//TROVA L INDICE DI UOVA:
/* console.log(spesa.indexOf("uova")); */
//TRASFORMA L ARRAY IN UNA STRINGA SEPARATA DA VIRGOLE:
/* let stringaSpesa = spesa.join(", ");
console.log(stringaSpesa) */

//ARRAY DI NUMERI:
/* let numeriArray = [10, 20, 30, 40, 50];
console.log(numeriArray); */
//RIMUOVI L ULTIMO NUMERO:
/* console.log(numeriArray.pop());//stampa solo 50
console.log(numeriArray);//stampa l array senza il 50 */
//AGGIUNGI 60 ALL INIZIO DELL ARRAY:
/* console.log(numeriArray.unshift(60)); */
//SOSTITUISCI IL NUMERO 20 CON 25:
/* console.log(numeriArray.splice(1, 0, 25)); */
//CREA UN NUOVO ARRAY CHE CONTENGA SOLO I PRIMI 3 NUMERI:
/* console.log(numeriArray.slice(0, 3)); */

//ARRAY NOMI:
/* let nomi = ["Anna","Luca","Marco"];
console.log(nomi); */
//AGGIUNGI GIULIA E SIMONE ALLA FINE DELL ARRAY:
/* console.log(nomi.push("Giulia","Simone")) */
//RIMUOVI ANNA DALL INIZIO:
/* console.log(nomi.shift()); */
//TROVA L INDICE DI MARCO:
/* console.log(nomi.indexOf("Marco")); */
//CREA UN NUOVO ARRAY CON SOLO GLI ULTIMI DUE NOMI:
/* console.log(nomi.slice(3)); */
//TRSFORMA IL NUOVO ARRAY APPENA FATTO IN UNA STRINGA:
/* console.log(nomi.slice(3).join(", ")); */
//ARRAY FRUTTI:
/* let fruttii = ["mela","banana","arancia"];
console.log(frutti); */
//CHIEDI ALL UTENTE DI INSERIRE UN FRUTTO:
/* let userFruit = prompt("Inserisci un frutto!");
console.log(userFruit); */
//CONTROLLA SE IL FRUTTO E' PRESENTE NEL ARRAY OPPURO NO!
/* if (fruttii.includes(userFruit)) {
    console.log("Frutto trovato!");
} else {
    fruttii.push(userFruit);
    console.log(fruttii);
} */

//GESTIONE PLAYLIST:
let playList = ["Song1", "Song2", "Song3"];
/* console.log(playList); */
//AGGIUNGI SON4 E SONG5:
playList.push("Song4","Song5");
console.log(playList);
//RIMUOVI L ULTIMA CANZONE:
playList.pop();
console.log(playList);
//TROVA L INDICE DI SONG2:
console.log(playList.indexOf("Song2"));
//RIMUOVI SONG2 DALL ARRAY:
playList.splice(1,1);
console.log(playList);
//TRASFORMA LA NUOVA ARRAY UN UN ASTRINGA SEPARATA DA ;
console.log(playList.join("; "));

//CONTROLLO LUNGHEZZA E AGGIUNTA:
let lista = [];
//CHIEDI ALL UTENTE DI INSERIRE 3 ELEMENTI:
/* let userElem1 = prompt("Scrivi qualcosa");
let userElem2 = prompt("Scrivi qualcosa");
let userElem3 = prompt("Scrivi qualcosa"); */
//AGGIUNGILI ALL ARRAY:
/* lista.push(userElem1, userElem2, userElem3);
console.log(lista); */
//STAMPA LA LUNGHEZZA DELL ARRAY:
/* console.log(lista.length); */
//AGGIUNGI UN ALTRO ELEM ALL INIZIO:
/* lista.unshift("t");
console.log(lista); */
//RIMUOVI IL SECONDO ELEMENTO:
/* lista.splice(2,1);
console.log(lista); */

//MANIPOLAZIONE DEI NUMERI:
let numbers = [5, 10, 15, 20];
console.log(numbers);
//RIMUOVI IL PRIMO E L ULTIMO NUMERO:
console.log(numbers.shift() && numbers.pop());
//AGGIUNGI 1 ALL INIZIO E 25 ALLA FINE:
console.log(numbers.unshift(1) && numbers.push(25));
//TROVA IL NUMERO 15:
console.log(numbers.indexOf(15));
//CREA UN NUOVO ARRAY CON SOLO GLI ULTIMI 2 NUMERI:
console.log(numbers.slice(2));

//ARRAY CITTà:
let città = ["Roma","Milano","Napoli"];
console.log(città);
//AGGIUNGI TORINO ALL INIZIO:
città.unshift("Torino");
console.log(città);
//RIMUOVI MILANO:
città.splice(2, 1);
console.log(città);
//CONTROLLA SE FIRENZE è NELL ARRAY:
console.log(città.includes("Firenze"));
//TRASFORMA L ARRAY IN UNA STRINGA SEPARATA DA |:
console.log(città.join("| "));

//GESTIONE DI UNA TO-DO-LIST:
let toDoList = ["Studiare", "Fare la spesa", "Pulire casa"];
console.log(toDoList);
//AGGIUNGI CHIAMARE IDRAULICO ALLA FINE DELLA LISTA:
toDoList.push("Chiamare l'idraulico");
console.log(toDoList);
//RIMUOVI STUDIARE DALL INIZIO:
console.log(toDoList.splice(0,1));
console.log(toDoList);
//STAMPA L INDICE DI PULIRE CASA:
console.log(toDoList.indexOf("Pulire casa"));
//CREA UNA NUOVA ARRAY CON SOLO GLI ULTIMI DUE ELMENTI:
console.log(toDoList.slice(1));

//CONTROLLO ELEMENTI DUPLICATI:
let animali = ["cane","gatto","cane","uccello"];
console.log(animali);
//TROVA LINDIE DELLA PRIMA OCCORRENZA DI CANE:
console.log(animali.indexOf("cane"));
//RIMUOVI IL PRIMO CANE:
console.log(animali.splice(0,1));
console.log(animali);
//CONTROLLA SE CANE è ANCORA PRESENTE:
console.log(animali.includes("cane"));
//AGGIUNGI PESCE ALLA FINE E STAMPA L ARRAY FINALE:
animali.push("pesce");
console.log(animali);

//NUMERO RANDOM:
/* let randomNum = Math.floor(Math.random()*10);
console.log(randomNum); */

//LANCIO DELLA MONETA:
/* let lancioMoneta = Math.floor(Math.random()*2);
if (lancioMoneta === 0) {
    console.log("Testa");
} else {
    console.log("Croce");
} */

//GENERALE NUMERO CASUALE DA UN ARRAY:
let colorii = ["rosso", "blue", "verde", "viola"];
let casualColors = Math.floor(Math.random()*colorii.length);
console.log(colorii[casualColors]);

//SCOPE:
//SCOPE GLOBALE:
let colore = "rosso";//scope globale visibile in tuttp il codice
console.log(colore);

//SCOPE DI BLOCCO:
/* const password = "12345";
let userPassword = prompt("DIGITA LA PASSWORD");

if (password === userPassword) {
    console.log("ACCESSO CONSENTITO")//scope di blocco dentro le {}
} else {
    console.log("ACCESSO NEGATO");//scope di blocco dentro le {}
} */
/* console.log()//ERRORE */

//PARTI DA UN ARRAY VUOTO ED AGGIUNGI AL SUO INTERO DEGLI ELEMENTI:
/* let arrayEmpty = [];
arrayEmpty.push("limone","arancia","melone","spinaci");
console.log(arrayEmpty); */

//PARTI DA UN ARRAY CON 3 ELEMENTI AGGIUNGI UN NUOVO ELEMENTO ALL INIZIO:
/* let arrayThree = ["sedia","tavolo","fruttiera"];
arrayThree.unshift("candelabro");
console.log(arrayThree); */

//PARTI DA UN ARRAY DI ALEMENO 5 ELEMENTI E TOGLI LULTIMO:
/* let array = ["sedia", "tavolo", "fruttiera","candelabro", "bicchiere"];
console.log(array.splice(4,1));
console.log(array); */

//PARTI DA UN ARRAY CON 4 ELEMENTI TOGLI IL PRIMO:
/* let array = ["sedia", "tavolo", "fruttiera", "candelabro",];
array.shift("sedia");
console.log(array); */

//CREA UN ARRAY CON 6 ELEMENTI E MOSTA QUANTI ELEM CI SONO:
/* let array = ["sedia", "tavolo", "fruttiera", "candelabro", "bicchiere","lampadario"];
console.log(array.length); */

//CREA UN ARRAY CON ALCUNI VALORI RIPETUTI E TROVA LA POSIZIONE DELLA PRIMO OCCORRENZA DI UNO DI ESSI:
/* let array = ["sedia", "tavolo", "fruttiera","fruttiera", "candelabro", "bicchiere", "bicchiere"];
console.log(array.indexOf("fruttiera"));
console.log(array.indexOf("bicchiere")); */

//HAI UN ARRAY DI 5 ELEM MODIFICA IL TERZO ELEM:
/* let array = ["sedia", "tavolo", "fruttiera", "candelabro", "bicchiere"];
array[2] = "posacenere";
console.log(array); */

//CREA DUE ARRAY DIVERSI ED UNISCILI IN UN UNICO ARRAY CON SPREAD(...)
/* let array = ["sedia", "tavolo", "fruttiera", "candelabro", "bicchiere"];
let numerii = [10, 20, 30, 40, 50];
let doubleArray = [...array, ...numerii];
console.log(doubleArray); */

//CREA DUE ARRAY DIVERSI ED UNISCILI IN UN UNICO ARRAY CON .CONCAT()
/* let array = ["sedia", "tavolo", "fruttiera", "candelabro", "bicchiere"];
let numerii = [10, 20, 30, 40, 50];
let arrayUniti = array.concat(numerii);
console.log(arrayUniti); */

//CREA UN ARRAY DI 7 ELEM E RICAVA UN SECONDO ARRAY AVENTE SOLO UNA PARTE CENTRALE DEGLI ELEM
//CREA DUE ARRAY DIVERSI ED UNISCILI IN UN UNICO ARRAY CON SPREAD(...)
/* let array = ["sedia", "tavolo", "fruttiera", "candelabro", "bicchiere", "forchetta", "tovagliolo"];
console.log(array.slice(2, 5)); */

//CREA UN ARRAY POI RIMUOVI UN ELEMENTO DAL CENTRO E INSERIESCINE UNO NUOVO AL SUO POSTO:
/* let array = ["sedia", "tavolo", "fruttiera", "candelabro", "bicchiere", "forchetta", "tovagliolo"];
array[3] = "tovaglia";
console.log(array); */

//
//ESERCIZI BASATI SU ARRAY, CICLO FOR, IF E .PUSH() (TUTTO INSIEME):
//

//HAI UN ARRAY DI NUMERI: CREA UN NUOVO ARRAY CHE CONTIENE SOLO GLI ELEMENTI CHE SI TROVANO IN POSIZIONI PARI
/* let arrayNum = [1,2,3,4,5,6,7,8,9,10];
let nuovoArray = [];
for (let i = 0; i < arrayNum.length; i++) {
    if (i % 2 === 0) {
        nuovoArray.push(arrayNum[i]);
    }
}
console.log(nuovoArray); */

//HAI UN ARRAY DI NUMERI: CREA UN NUOVO ARRAY CONTENENTE SOLO I NUMERI MAGGIORI DI 5:
/* let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nuovoArray = [];
for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] > 5) {
        nuovoArray.push(arrayNum[i]);
    }
}
console.log(nuovoArray); */

//HAI UN ARRAY DI NUMERI: CREA UN NUOVO ARRAY CON SOLO I NUMERI PARI
/* let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayNuovo = [];
for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] % 2 === 0) {
        arrayNuovo.push(arrayNum[i]);
    }
}
console.log(arrayNuovo); */

//HAI UN ARRAY DI NUMERI: CREA UN NUOVO ARRAY DOVE OGNI NUMERO è RADDOPPIATO (QUI L IF NON CI VUOLE IN QUANTO LA RICHIESTA NECESSITA DI UNA SOLA RISPOSTA SENZA ALTERNATIVE!)
/* let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nuovoArray = [];
for (let i = 0; i < arrayNum.length; i++) {
    nuovoArray.push(arrayNum[i]*2);
}
console.log(nuovoArray); */

//HAI UN ARRAY DI PAROLE: CREA UN NUOVO ARRAY DI PAROLE CHE HANNO PIU DI 4 LETTERE
/* let parole = ["pane","gelato","farina","uova","carne","formaggio","olio di oliva"]
let nuovoArray = [];
for (let i = 0; i < parole.length; i++) {
    if (parole[i].length > 4) {
        nuovoArray.push(parole[i]);
    }
}
console.log(nuovoArray); */

//HAI UN ARRAY MISTO (NUMERI E STRINGHE): CREA DUE ARRAY SEPARATI, UNO CON I NUMERI ED UNO CON LE STRINGHE
/* let numeriStringhe = [0, 1, 2, 3, "sedia", "tavolo", "poltrona", "divano"];
let arrayNumeri = [];
let arrayStringhe = [];
for (let i = 0; i < numeriStringhe.length; i++) {
    if (typeof numeriStringhe[i] === "string") {
        arrayStringhe.push(numeriStringhe[i]);
    } else if (typeof numeriStringhe[i] === "number") {
        arrayNumeri.push(numeriStringhe[i])
    }
}
console.log(arrayStringhe);
console.log(arrayNumeri); */

//HAI UN ARRAY DI NUMERI: CREA UN NUOVO ARRAY CON I NUMERI SUPERIORI ALLA MEDIA DELL'ARRAY ORIGINALE
/* let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somma = 0;
let nuovoArray = [];
for(let i = 0; i < arrayNum.length; i++) {
    somma = somma + arrayNum[i];
}
console.log(somma);

let media = somma/arrayNum.length;
console.log(media);

for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] > media) {
        nuovoArray.push(arrayNum[i]);
    }
}
console.log(nuovoArray); */

//HAI UN ARRAY DI PAROLE: CREA UN NUOVO ARRAY CON LE PAROLE CHE INIZIANO CON LA STESSA LETTERA DI UNA PAROLA SCELTA DA ME
/* let parole = ["sedia", "sedano","banco","tavolo","soggiorno","lampadina"]
let nuovoArray = []
for (let i = 0; i < parole.length; i++) {
    if (parole[i].startsWith("s")) {
        nuovoArray.push(parole[i]);
    }
}
console.log(nuovoArray); */

//HAI UN ARRAY DI NUMERI: CREA UN NUOVO ARRAY CON SOLO I VALORI UNICI, RIMUOVI I DUPLICATI
/* let numeri = [1,2,3,3,4,5,6,6,7,7,8,9,10,10]
let nuovoArray = [];
for (let i = 0; i < numeri.length; i++) {
    if (nuovoArray.indexOf(numeri[i])=== -1) {
        nuovoArray.push(numeri[i]);
    }
}
console.log(nuovoArray); */

//HAI UN ARRAY DI NUMERI: DIVIDI L ARRAY IN MINI ARRAY DI 3 ELEMENTI CIASCUNO. LULTIMO MINI-ARRAY PUò AVRE MENO ELEMENTI
/* let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let miniArray = [];
for (let i = 0; i < numeri.length; i+=3) {
    let pezzo = numeri.slice(i, i+3);
    miniArray.push(pezzo);
}
console.log(miniArray); */

//HAI UN ARRAY DI NUMERI: MODIFICA DIRETTAMENTE OGNI NUMERO RADDOPPIANDOLO NELL ARRAY ORIGINALE, SENZA CREARNE UNO NUOVO
/* let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < numeri.length; i++) {
    numeri[i] = numeri[i]*2;
}
console.log(numeri); */

//HAI UN ARRAY DI NUMERI: CREA UN NUOV0 ARRAY CON I NUMERI CHE VUOI SOMMARE E POI SOMMALI:
/* let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somma = 0;
let nuovoArray = [];
for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] > 5) {
        somma = somma + numeri[i];
        nuovoArray.push(numeri[i]);
    }
}
console.log(nuovoArray);
console.log(somma); */

//HAI UN ARRAY DI PAROLE: CONTA SOLO QUANTE PAROLE HANNO PIù DI 4 LETTERE:
/* let parole = ["sedia", "sedano", "banco", "tavolo", "soggiorno", "lampadina", "cane", "gatto", "uovo", "arancia"];
let paroleGrandiQuattro = [];
for (let i = 0; i < parole.length; i++) {
    if(parole[i].length > 4) {
        paroleGrandiQuattro.push(parole[i]);
    }
}
console.log(paroleGrandiQuattro.length); */

//HAI UN ARRAY DI NUMERI: CREA UN NUOVO ARRAY DEL QUADRATO DI TUTTI I NUMERI PRESENTI NELL ARRAY ORIGINALE
/* let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nuovoArray = [];
for (let i = 0; i < numeri.length; i++) {
    numeri[i] = numeri[i] ** 2;//in questo esempio però ho modificato l array originale!
    nuovoArray.push(numeri[i]);
}
console.log(nuovoArray); */


/* let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nuovoArray = [];
for (let i = 0; i < numeri.length; i++) {
    nuovoArray.push(numeri[i]);//in questo esempio invece non ho modificato l array originale!
}
console.log(nuovoArray); */



















//FUNCTION
/* function saluta() {
    console.log("Ciao Gab!");
}

saluta()
saluta()
saluta()
saluta()
saluta()
saluta()
saluta()
saluta()
saluta()
 */


/* function saluta(nome) {
    console.log("Ciao"+ nome);
}

saluta(" Marco"); */


/* let salutaa = function() {
    console.log("ciao Gab!");
};

salutaa(); */
















//OGGETTI
//DOM