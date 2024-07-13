import {createServer} from 'http';

createServer((req, res) => {
  res.statusCode = 200;
  res.end('Microservice 2 works!');
}).listen(4400, () => {
  console.log('Microservice 2 starts!');
});
