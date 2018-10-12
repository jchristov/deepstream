const deepstream = require('deepstream.io-client-js');
const ds = deepstream('ws://localhost:8080');
ds.login();

// events
ds.event.subscribe('error', function(eventData) {
  console.log('Error', eventData);
});

ds.event.subscribe('test-event', function(eventData) {
  console.log('Test event occured', eventData);
});

ds.event.emit('test-event', { some: 'data' });
ds.event.emit('test-event', { some: 'data' });
ds.event.emit('test-event', { some: 'data' });

// records
/*
let rec = ds.record.getRecord('assets/cryptocurrencies');

rec.set({
  pairs: [
    { pair: 'BTC/USD', price: 6234 },
    { pair: 'ETH/USD', price: 202 },
    { pair: 'BCH/USD', price: 498 }
  ]
});

let recData = rec.get();
console.log(recData);
*/
let myRecord = ds.record.getRecord('test/johndoe');

myRecord.set({
  firstname: 'John',
  lastname: 'Doe'
});

myRecord.set('hobbies', ['sailing', 'reading']);

let data = myRecord.get(); // returns the entire data
console.log(data);
