const DeepstreamServer = require('deepstream.io');
const RethinkDBStorageConnector = require('deepstream.io-storage-rethinkdb');
const ElasticSearchStorageConnector = require('deepstream.io-storage-elasticsearch');
const MemcachedCacheConnector = require('deepstream.io-cache-memcached');
const C = DeepstreamServer.constants;

const server = new DeepstreamServer();

/*
server.set(
  'storage',
  new ElasticSearchStorageConnector({
    host: 'localhost:9200',
    pingTimeout: 200,
    splitChar: '/'
  })
);
*/

// set storage
server.set(
  'storage',
  new RethinkDBStorageConnector({
    port: 28015,
    host: 'localhost',
    database: 'deepstream',
    defaultTable: 'deepstream_records',
    splitChar: '/'
  })
);

// start the server
server.start();
