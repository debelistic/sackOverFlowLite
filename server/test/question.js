'use strict';

process.env.NODE_ENV = 'test';

import Questions from '../data/data';
import app from '../app';
import chai from 'chai';
import chaiHttp from 'chai-http';
import bodyParser from 'body-parser';



const should = chai.should();

chai.use(chaiHttp);
app.use(bodyParser.json());

describe('/GET questions', () => {
	it('It should GET all questions in the database', (done) => {
		chai.request(app)
			.get('/api/v/questions')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
			done();
		});
	});
});

describe('/GET questions/:id', () => {
	it('It should GET questions with the specified id from database', (done) => {
		const question = {
			id: Questions.length + 1,
      		title: 'What is big machine?',
      		content: 'A found out there is dyanmic data in javascript, what does it mean.',
      		timestamp: 'Sep 8, 2016: 12:45pm',
      		username: 'debelistic',
		}
		Questions.push(question);
		chai.request(app)		
			.get('/api/v/questions/' + question.id)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
			done();
		});
	});
});


describe('/POST question', () => {
	it('It should POST a question to the database', (done) => {
		const question = {			
      		title: 'What is dynamic data?',
      		content: 'A found out there is dyanmic data in javascript, what does it mean.',
      		timestamp: '12:89pm',      		
      		username: 'debelistic',      		
		}
			chai.request(app)
				.post('/api/v/questions')
				.send(question)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('title');
					res.body.should.have.property('content');					
				done();
			});
	});
});


describe('/PUT answers', () => {
	it('It should update answers to a question in the database', (done) => {
		const question = {
			id: Questions.length + 1,
      		title: 'What is big machine?',
      		content: 'A found out there is dyanmic data in javascript, what does it mean.',
      		timestamp: 'Sep 8, 2016: 12:45pm',
			username: 'debelistic',
			answers: []			  
		};
		const newanswer = {	
			id: question.answers.length + 1,	
			content: 'Lorem ipsum',
			username: 'fred'
		};

		question.answers.push(newanswer);
		Questions.push(question);
			chai.request(app)
				.put('/api/v/questions/' + newanswer.id)
				.send(newanswer)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('content');
					res.body.should.have.property('username');					
				done();
			});
	});
});

				

