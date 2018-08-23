import express from 'express';
import bodyParser from 'bodyParser';

import questions from './routes/questions';



const app = express();

app.use('/questions/', questions);


const port = process.env.PORT || 3000
app.listen(port, () => console.log('You are on port ' + port) )


export default app;