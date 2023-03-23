var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    let url = req.url;
    if(url === '/welcome')
    {
        res.writeHead(200, {'Content-type':'text/html'});
        res.write("<h1>Welcome to Dominos!<h1>");
        res.end();
    }
    else if(url === '/contact')
    {
        res.writeHead(200, {'Content-type':'application/json'});
        res.write(JSON.stringify([{phone:'18602100000', email: 'guestcaredominos@jublfood.com'}]))
        res.end();
    }
    else
    {
        res.writeHead(404)
        res.write("404 Not Found");
        res.end();
    }
}
httpServer.listen(8081, ()=>{
    console.log("server started");
});
module.exports = httpServer;