const http = require('http');

const fs = require('fs');


const server = http.createServer((request, response) => {
	console.log('[Request] ' + request.url);
	console.log('[Response] ' + response.statusCode);
	switch (request.url) {
		case '/jobs':
			let jobs = fs.readFileSync('./jobs.html');
			response.end(jobs);
			break;
		case '/about':
			let about = fs.readFileSync('./about.html');
			response.end(about);
			break;
		case '/contact':
			let contact = fs.readFileSync('./contact.html');
			response.end(contact);
			break;
		default:
			let index = fs.readFileSync('./index.html');
			response.end(index);
			break;
	}
	
});

server.listen(3000);