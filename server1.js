//port7000
//import http module
var http = require("http");

//define a port to listen to
var port1 = 7000;

//function to handle requests
function handleRequest1(request, response) {
    response.end("You smell like a petunia! " + request.url);
}

var server1 = http.createServer(handleRequest1);

//start server
server1.listen(port1, function() {
    //server is now listening
    console.log("server listening on http://localhost:%s", port1);

});

//port 7500
//define a port to listen to
var port2 = 7500;

//function to handle requests
function handleRequest2(request, response) {
    response.end("You smell like a wet dog on the 4th of july! " + request.url);
}

var server2 = http.createServer(handleRequest2);

//start server
server2.listen(port2, function() {
    //server is now listening
    console.log("server listening on http://localhost:%s", port2);

});


