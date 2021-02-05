const http = require('http');

const fs = require('fs');


const server = http.createServer((request, response) => {
	console.log('[Request] ' + request.url);
	console.log('[Response] ' + response.statusCode);
	switch (request.url) {
		case '/jobs':
			response.write('<h1>Welcome to the Jobs Section</h1>');
			response.write('<hr>');
			response.end();
			break;
		case '/about':
			response.write('<h1>Welcome to the About Section</h1>');
			response.write('<hr>');
			response.end();
			break;
		case '/contact':
			response.write('<h1>Welcome to the Contact Section</h1>');
			response.write('<hr>');
			response.end();
			break;
		default:
			response.write('<h1>Welcome to my Node Server</h1>');
			response.write('<hr>');
			response.end();
			break;
	}
	
});

server.listen(3000);