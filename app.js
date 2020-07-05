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