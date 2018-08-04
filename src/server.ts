import * as express from 'express';
import { Request, Response } from 'express';

const app: express.Application = express();

app.use((req: Request, res: Response) => {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
