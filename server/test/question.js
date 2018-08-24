'use strict';

process.env.NODE_ENV = 'test';

import Questions from '../data/data';
import App from '../app'
import chai from 'chai';
import chaiHttp from 'chai-http';

const should = chai.should();

chai.use(chaiHttp);

describe('/GET questions', () => {
	it('It should GET all questions in the database', (done) => {
		chai.request(App)
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
		chai.request(App)
			.get('/api/v/questions/' + Questions(id))
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
			done();
		});
	});
});


describe('/POST questions', () => {
	it('It should POST all questions in the database', (done) => {
		const question = {			
      		title: 'What is dynamic data?',
      		content: 'A found out there is dyanmic data in javascript, what does it mean.',
      		timestamp: '12:89pm',      		
      		username: 'debelistic',      		
		}
			chai.request(App)
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


describe('/POST questions', () => {
	it('It should POST all questions in the database', (done) => {
		const newanswer = {			
			content: 'Lorem ipsum',
			username: 'fred'
		};
			chai.request(App)
				.post('/api/v/questions/:id/answers')
				.send(newanswer)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('title');
					res.body.should.have.property('username');					
				done();
			});
	});
});

				

