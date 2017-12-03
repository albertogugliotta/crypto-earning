/****************************
  * Supported Exchangers:
  - MercadoBitcoin (BTC/BRL)
  - CEX (BTC/GBP/EUR)
*****************************/

var core = require('./earn-core');
var transactions = new Array();

const mcdBrl = "https://www.mercadobitcoin.net/api/BTC/ticker";
const cexEur = "https://cex.io/api/last_price/BTC/EUR";
const cexGbp = "https://cex.io/api/last_price/BTC/GBP";

/* Add your transactions here below - Modify amountBTC & amountPaid */
transactions.push({ currency : 'BRL', amountBTC : 0.098583, amountPaid : 2000,  url: mcdBrl });
transactions.push({ currency : 'EUR', amountBTC : 0.075435, amountPaid : 500,   url: cexEur });
transactions.push({ currency : 'GBP', amountBTC : 0.085432, amountPaid : 500,   url: cexGbp });

core.elaborate(transactions);
