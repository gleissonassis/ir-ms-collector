const axios = require('axios');
const CointraderMonitorCollector = require('./CointraderMonitorCollector');

module.exports = class CollectorsFactory {
  static getCointraderMonitorCollector () {
    return new CointraderMonitorCollector({axios});
  }
};
