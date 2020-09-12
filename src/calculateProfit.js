const Decimal = require('decimal.js');
const cm = require('./cm.json');

btcTotal = 0;
brlTotal = 0;
brlInvestment = 100;

lastCotation = 0;

for (item of cm) {
  lastCotation = item.last;

  if (lastCotation && item.var24h < -20) {
    const btcAmount = new Decimal(brlInvestment).dividedBy(lastCotation).toFixed(8);
    btcTotal = new Decimal(btcAmount).plus(btcTotal).toNumber();
    brlTotal += brlInvestment;
  }
}

const result = new Decimal(new Decimal(btcTotal).times(cm[cm.length - 1].last).toFixed(2)).toNumber();
console.log(btcTotal, brlTotal, result, (result / brlTotal * 100 - 100).toFixed(2));
