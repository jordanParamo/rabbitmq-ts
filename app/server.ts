import express from 'express';

import { handler } from './src/handler';

const app = express();
const PORT:string = process.env.port || '33304';

app.get('/', async (req, res) => {
  try {
    const message = await handler();
    console.log(message);
    res.send(message);
  } catch (e) {
    console.error(e);
    res.status(500).send(e)
  }
});

app.listen(parseInt(PORT), '0.0.0.0', () => {
  console.log(`listening at http://localhost:${PORT}`)
});
