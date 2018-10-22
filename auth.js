var express = require('express');
var app = express();

var auth = require('http-auth');
var basic = auth.basic({
    realm: "panel",
    file: "/home/pixel/bot/user.htpasswd"
});
app.use(auth.connect(basic));



var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var path = require('path');
var public = path.join(__dirname, 'public');
var port = process.env.PORT || 8089;
var history = require('connect-history-api-fallback');
var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://wqrld.auth0.com/.well-known/jwks.json"
    }),
    audience: 'https://botback.feroxmc.ga',
    issuer: "https://wqrld.auth0.com/",
    algorithms: ['RS256']
});

//app.use(jwtCheck);

app.use('/templates', express.static('templates'))
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/handleauth.html', function (req, res) {
  res.sendFile(__dirname + '/handleauth.html')
})



app.get('/callback', function (req, res) {
res.sendFile(__dirname + '/handleauth.html')
});

app.get('/authed', jwtCheck, function (req, res) {
res.send("dsa");
console.log("das");
});

app.use(function(req, res, next){
  //res.status(404);

  // respond with html page
    res.sendFile(__dirname + '/index.html')


});

app.listen(port);