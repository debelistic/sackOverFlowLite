import express from 'express';


import questions from './routes/questions';



const app = express();

app.use('/questions/', questions);

app.listen(3000);
console.log('You are on port 3000');

export default app;