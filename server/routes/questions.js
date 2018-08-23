import express from 'express';
import bodyParser from 'bodyParser';


import questions from '../data/data';


const router = express.Router();



router.get('/', (req, res) => {
	res.send(questions);
});

router.get('/api/questions/:id', (req, res) => {
	const question = questions.find(q => q.id === parseInt(req.params.id));
	if(!question) res.status(404).send('question not fond');
	res.send(question);
});

router.post('/', (req, res) => {
	
	const question = {
		id: questions.length + 1,
		title: req.body.title,
		content: req.body.content,
		username: req.body.username,
	};

	questions.push(question);
	res.send(question)
});



export default router;