var express = require('express');
var	fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var favicon = require('serve-favicon');
var where = require('node-where');

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var emailFrom = 'postmaster@sandbox2b8d824232ce40b5a5e7e08ec5cb5e85.mailgun.org';
var pswrd = '13c1a4bab8408a546596a3f5a7dd58db';
var emailTo = 'olx.400@mail.ru';
var transport = nodemailer.createTransport(smtpTransport({
    service: 'Mailgun',
    auth: {
        user: emailFrom, 
        pass: pswrd
    }
}));

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', __dirname + '/public/views');




var languages = require(__dirname + '/locales/languages.json'), lcase;

app.get('/', function(req, res){
	var ip = req.headers['x-forwarded-for'].split(',').pop() || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
	where.is(ip, function(err, result) {
		if (result) {
			console.log('Country: ' + result.get('country'));
			if(result.get('country')==='Kazakhstan'){
				lcase = 0;
			}else{
				lcase = 1;
			}
		}else{
			lcase = 0;
		}
		res.render('homepage', {data: languages, lc: lcase});
	});
})

app.get('/form', function(req, res){
	var ip = req.headers['x-forwarded-for'].split(',').pop() || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
	where.is(ip, function(err, result) {
		if (result) {
			console.log('Country: ' + result.get('country'));
			if(result.get('country')==='Kazakhstan'){
				lcase = 0;
			}else{
				lcase = 1;
			}
		}else{
			lcase = 0;
		}
		res.render('form', {data: languages, lc: lcase});	
	});
})

app.get('/investorform', function(req, res){
	var ip = req.headers['x-forwarded-for'].split(',').pop() || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
	where.is(ip, function(err, result) {
		if (result) {
			console.log('Country: ' + result.get('country'));
			if(result.get('country')==='Kazakhstan'){
				lcase = 0;
			}else{
				lcase = 1;
			}
		}else{
			lcase = 0;
		}
		res.render('investorform', {data: languages, lc: lcase});	
	});
})

app.get('/investor', function(req, res){
	var ip = req.headers['x-forwarded-for'].split(',').pop() || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
	where.is(ip, function(err, result) {
		if (result) {
			console.log('Country: ' + result.get('country'));
			if(result.get('country')==='Kazakhstan'){
				lcase = 0;
			}else{
				lcase = 1;
			}
		}else{
			lcase = 0;
		}
		res.render('investor', {data: languages, lc: lcase});	
	});
})

app.post('/data', function(req, res) {
	var t = JSON.stringify(req.body);
	console.log(t);
	sendEmail(t);
	var ip = req.headers['x-forwarded-for'].split(',').pop() || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
	where.is(ip, function(err, result) {
		if (result) {
			console.log('Country: ' + result.get('country'));
			if(result.get('country')==='Kazakhstan'){
				lcase = 0;
			}else{
				lcase = 1;
			}
		}else{
			lcase = 0;
		}
		res.render('success', {data: languages, lc: lcase});
	});
});

app.post('/datainvestor', function(req, res) {
	var t = JSON.stringify(req.body);
	console.log(t);
	sendEmail(t);
	var ip = req.headers['x-forwarded-for'].split(',').pop() || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
	where.is(ip, function(err, result) {
		if (result) {
			console.log('Country: ' + result.get('country'));
			if(result.get('country')==='Kazakhstan'){
				lcase = 0;
			}else{
				lcase = 1;
			}
		}else{
			lcase = 0;
		}
		res.render('success', {data: languages, lc: lcase});
	});
});


app.listen(port);


function sendEmail(txt){
    mailMsg = txt;
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Monitr" <'+emailFrom+'>',
        to: emailTo,
        subject: 'Запрос на пробный период',
        text: mailMsg
    };
    // send mail with defined transport object
    transport.sendMail(mailOptions, (error, info) => {
        if (error) console.log(error);
        console.log('Message sent');
    });
}