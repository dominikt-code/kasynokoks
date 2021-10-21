const http = require("http");
const fs = require("fs");
const port = 6969;

const server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    fs.readFile("index.html", function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write("Wypierdalaj nobie")
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if(error) {
        console.log("Coś nie działa", error)
    } else {
        console.log("Chyba działa" + port)
    }
})