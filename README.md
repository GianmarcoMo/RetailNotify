# Incrocio Retail

E' una web app che permette di ricevere in tempo reale l'incrocio che avviene nel mercato, tra i Retail traders che hanno operazione BUY e Retail traders che hanno operazioni SELL.

### Perche' sono importanti queste notifiche? 
Si puo' notare come il mercato sia manipolato, e che cerchera' di andare sempre contro i retail traders.
Se la maggior parte dei retail traders sono a mercato con una determinata operazione, ad esempio BUY, investono sulla salita di quel determinato asset, ma chi manipola il mercato spingera' verso il basso il prezzo per prendere gli stop loss dei retailer piu' piccoli e spingere il mercato ancora piu' in basso.

Questa web app permettera' di aggiornarvi sulle posizioni dei retail traders, e cosa potrebbe fare il mercato dopo questo incrocio.

[<img src="https://i.imgur.com/cXVFE5k.png">](https://i.imgur.com/cXVFE5k.png)

*Grafico e dati di [Myfxbook](https://www.myfxbook.com/community/outlook/EURUSD)*

*Nonostante la maggior parte delle persone erano SHORT sull'asset **EURUSD**, il mercato continuava a salire.*

*Sull'immagine viene segnalato **l'incrocio** dei retail traders*

### Caratteristiche web app
- Sviluppata con Node.js e Express.js
- Richieste dati retail traders tramite API di Myfxbook

### Features
- Collegamento API per la registrazione delle email
- Collegamento API per l'invio delle email che segnalano l'incrocio

---
[DEMO](https://incrocio.herokuapp.com/)
