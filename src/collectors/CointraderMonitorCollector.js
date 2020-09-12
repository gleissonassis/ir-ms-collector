const moment = require('moment');

module.exports = class CointraderMonitorCollector {
  constructor ({axios}) {
    this.axios = axios;
  }

  async getCotation (date) {
    const d = date.toISOString().split('.')[0] + '-0300';
    const endpoint = `https://cointradermonitor.com/api/pbb/v1/ticker?time=${d}`;
    console.log(endpoint);
    const data = await this.axios.get(endpoint);

    return data.data;
  }
};
