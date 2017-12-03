const fetch = require("node-fetch");
var exports = module.exports = {};


const getMarketValue = async trx => {

  try {
    const response = await fetch(trx.url);
    const json = await response.json();

    if(trx.url.includes('mercado')){
      var gain = (json.ticker.last * trx.amountBTC) - trx.amountPaid;
      console.log('Gain: ' + trx.currency + ' ' + gain + ' - MercadoBitcoin');
    }else if(trx.url.includes('cex')){
      var gain = (json.lprice * trx.amountBTC) - trx.amountPaid;
      console.log('Gain: ' + trx.currency + ' ' + gain + ' - CEX');
    }

  } catch (error) {
    console.log(error);
  }
};


exports.elaborate = function(transactions) {
  for(var i=0; i<transactions.length; i++){
    getMarketValue(transactions[i]);
  }
}
