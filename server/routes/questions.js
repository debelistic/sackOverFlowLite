import express from 'express';
import bodyParser from 'body-parser';
import questions from '../data/data';


const router = express.Router();
router.use(bodyParser.json());

router.get('/', (req, res) => {
	res.send(questions);
});

router.get('/:id', (req, res) => {
	const question = questions.find(q => q.id === parseInt(req.params.id));
	if(!question) res.status(404).send('question not fond');
	res.send(question);
});

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
	}

	const question = {
		id: questions.length +1,
		title: req.body.title,
		content: req.body.content
	}
	questions.push(question);
	res.send(questions);
});

router.post('/:id/answers', (req, res) => {
	
	const answer = questions[req.params.id - 1].answers;
	const newanswer = {
		id: answer.length +1,
		content: req.body.content,
		username: req.body.username
	};
	answer.push(newanswer);	
	res.send(answer);
});



export default router;