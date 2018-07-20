var express = require('express'),
    server = require('http').createServer(),
    WebSocket = require('ws'),
    app = express();
app.use(express.static('./public'));
// app.use(cors());

app.post('/register', function (req, res) {
    res.sendfile(__dirname + '/public/chat.html');
});


app.post('/send', function (req, res) {
  console.log(res);
});

// clinet


app.listen(2000, function () {
    console.log('App listening on port http://127.0.0.1:2000');
});


