import express from 'express';
import bodyParser from 'body-parser';

import questions from './routes/questions';

const app = express();

app.use('/api/v/questions/', questions);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const port = process.env.PORT || 3000
app.listen(port, () => console.log('You are on port ' + port) )


export default app;