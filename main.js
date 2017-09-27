var http = require("http");

http.createServer(requestListener).listen(8081);

function requestListener(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write("<!DOCTYPE html>");
    response.write("<html><head><title>Hi</title></head>");
    response.write("<body><h1>This is Kishan Kalburgi Srinivas</h1></body></html>");
    response.write("<body><h1>Have nice Day!!</h1></body></html>");
    response.end();
}

console.log('Server running at http://127.0.0.1:8081/');
