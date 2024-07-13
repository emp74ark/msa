import {createServer} from 'http';

createServer((req, res) => {
  res.statusCode = 200;
  res.end('Microservice 1 works!');
}).listen(4300, () => {
  console.log('Microservice 1 starts!');
});
