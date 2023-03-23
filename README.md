JS-MAIL-DADI
===
**Mail**

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

**Gioco dei dadi**

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

---
## OPERAZIONI
**Mail**
- creo un array contente gli indirizzi mail autorizzati
- chiedo all'utente di inserire la propria mail e salvo il risultato in una variabile
- con un ciclo *for* controllo per ogni elemento dell'array se il dato inserito è presente tra gli indirizzi autorizzati
  - se il controllo risulta positivo visualizzo messaggio positivo
  - in caso contrario visualizzo messaggio di errore

**Gioco dei dadi**
- creo un array contente le facce del dado
- creo un bottone al cui click genero un evento
- in questo evento creo una funzione che estragga randomicamente una faccia del dado per l'utente e una per il computer
- controllo vincitore
    - controllo che il valore del dado estratto per l'utente sia maggiore di quello estratto per il computer, se si utente vincitore
    - altrimenti se dado computer > dado utente, computer vincitore
    - altrimenti, patta, tira di nuovo