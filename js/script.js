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


//Ciclo For
//Array
//Oggetti
//Funzioni
//DOM
//Logica e mini-progetti: calcolatrice, lista della spesa, contatore click, generatore di numeri casuali, gioco (indovina il numero)