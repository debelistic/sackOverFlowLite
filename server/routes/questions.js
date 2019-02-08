import express from 'express';
import bodyParser from 'body-parser';
import questions from '../data/data';


const router = express.Router();
router.use(bodyParser.json());


//GET all questions in database
router.get('/', (req, res) => {
	res.send(questions);
});

//GET question with a specified id
router.get('/:id', (req, res) => {
	const question = questions.find(q => q.id === parseInt(req.params.id));
	if(!question) res.status(404).send('question not fond');
	res.send(question);
});

//GET answers to question with a specified id
router.get('/:id/answers', (req, res) => {
	const question = questions.find(q => q.id === parseInt(req.params.id));
	if(!question) res.status(404).send('question not fond');
	res.send(question.answers);
});

//POST question to db
router.post('/', (req, res) => {
		
	if(!req.body.title){
		return res.status(400).send({
			success: 'false',
			message: 'title is required'
		});
	} else if (!req.body.content){
		return res.status(400).send({
			success: 'false',
			content: 'content is required'
		})
	} else if (!req.body.username){
		return res.status(400).send({
			success: false,
			message: 'user must be logged in'
		})
	}

	const question = {
		id: questions.length +1,
		title: req.body.title,
		content: req.body.content,
		timeStamp: new Date(),
		username: req.body.username
	}
	questions.push(question);
	res.send(question);
});

//POST answer to a question
router.post('/:id/answers', (req, res) => {
	const question = questions.find(q => q.id === parseInt(req.params.id));
	if(!question) res.status(404).send('question not fond');

	if (!req.body.content){
		return res.status(400).send({
			success: false,
			message: 'title is required'
		})
	} else if (!req.body.username){
		return res.status(400).send({
			success: false,
			message: 'user must be logged in'
		})
	}

	const answer = {
		id: question.answers.length + 1,
		content: req.body.content,
		username: req.body.username,
		timeStamp: new Date()
	}
	question.answers.push(answer);
	res.send(question.answers);
});

export default router;