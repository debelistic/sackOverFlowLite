import express from 'express';
import questions from '../data/data';

const router = express.Router();

<<<<<<< HEAD
router.get('/api/', (req, res) => {
	// res.status(200).send({
	// 	success: "true",
	// 	message: "questions successful retrived",
	// 	questions: questions
	// })
=======
router.get('/', (req, res) => {
>>>>>>> ft-one-question-endpoint-159989301

	res.send(questions);
});

router.get('/api/questions/:id', (req, res) => {
	const question = questions.find(q => q.id === parseInt(req.params.id));
	if(!question) res.status(404).send('question not fond');
	res.send(question);
});



export default router;