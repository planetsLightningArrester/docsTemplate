let path = require('path');
let express = require('express');
let app = express();
let http = require('http').createServer(app);

const serverPort = 55555;

app.use(express.json()); // if needed
app.use('/', express.static(path.join(__dirname, 'www')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'www', "index.html"));
});
 
http.listen(serverPort);
console.log('Server running. Open http://localhost:' + serverPort.toString() + '/docs-page.html');
console.log('Make changes on ./www/docs-page.html')
console.log('Check examples on ./www/example.html')