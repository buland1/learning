console.log("Buland Neupane")

const http = require("http")

const server = http.createServer(
function(request, response) {
 response.end("hello world")
} )
server.listen(300, function(){
console.log("server is running")
})
