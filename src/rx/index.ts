//import '@babel/polyfill';
import { createRxDatabase } from 'rxdb';
createRxDatabase({
  name: 'nextrxtest', // <- name
  adapter: 'memory', // <- storage-adapter
  // password: 'myPassword',     // <- password (optional)
  // multiInstance: true,         // <- multiInstance (optional, default: true)
  //eventReduce: false // <- eventReduce (optional, default: true)
}).then(console.log);
console.log("rx")