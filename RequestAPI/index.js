var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('home');
});

app.get('/results', function(req,res){
    var query = req.query.search;
    var url = 'http://www.omdbapi.com/?apikey=thewdb&s=' + query;
    request(url, function(error, response, dataStream){
        if(!error && response.statusCode == 200){
            //console.log(dataStream);
            var data = JSON.parse(dataStream);
            res.render('results', {data: data});
        }
    });
});

app.get('*', function(req,res){
    res.render('error');
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Server has been started');
});