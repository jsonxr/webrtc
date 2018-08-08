import * as express from 'express';
import { Request, Response } from 'express';
import * as WebSocket from 'ws';
import * as http from 'http';
import * as path from 'path';


const app: express.Application = express();

const dir = path.resolve('public');
console.log(dir);
app.use(express.static(dir));

const server: http.Server = app.listen(3000, () => {
  console.log('Listening on port 3000');
});

const wss = new WebSocket.Server({ server: server });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  console.log('connected');
  ws.send('something from server');
});
