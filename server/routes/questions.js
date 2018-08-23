import express from 'express';
import data from '../data/data';

const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).send({
		success: "true",
		message: "questions successful retrived",
		questions: data
	})
})



export default router;