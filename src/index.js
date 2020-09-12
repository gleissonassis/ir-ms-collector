const CollectorsFactory = require('./collectors/CollectorsFactory');
const sleep = require('sleep-promise');
const fs = require('fs');

(async () => {
  const cmCollector = CollectorsFactory.getCointraderMonitorCollector();

  let currentDate = new Date('2018-01-10T10:00:00-0300');
  const now = new Date();

  const data = [];

  while (currentDate < now) {
    console.log(`Getting cotation to ${currentDate}`);
    data.push(await cmCollector.getCotation(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);

    await sleep(1000);

    fs.writeFileSync('cm.json', JSON.stringify(data));
  }

  console.log(data);
})();
