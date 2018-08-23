import express from 'express';
import questions from '../data/data';

const router = express.Router();

router.get('/', (req, res) => {

	res.send(questions);
});

router.get('/:id', (req, res) => {
	const question = questions.find(q => q.id === parseInt(req.params.id));
	if(!question) res.status(404).send('question not fond');
	res.send(question);
});



export default router;