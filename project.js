var fs = require('fs');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require('path');

var getFunctions = require('./others');
var predictFunc = require('./predictFunc');

app.set('view engine', 'pug');
app.use(bodyParser());


app.get('/',function(request,response){
	response.sendFile(__dirname + '/Files/test.html');
})

app.get('/:name',function(request,response){
	if(request.params.name == "admin.php" || request.params.name == "admin.html"){
		var img = fs.readFileSync('images/simpleim.jpg');
     	response.writeHead(200, {'Content-Type': 'image/jpg' });
     	response.end(img, 'binary');
	}
	else if(request.params.name.length > 14){
		//response.send("12 den büyük");
		var string = "dörtyüzdört";
		var arraySpecified = [];
		for(var i = 0 ; i < string.length; i++){
			arraySpecified.push(predictFunc.predictSentence(string[i]));
			//console.log("array["+i+"] -> " + string[i]);
		}
		console.log(arraySpecified);
		console.log("girilen string ->  " + string);
		response.render('greet',{json:arraySpecified,len:arraySpecified.length});
	}else{
		var string = request.params.name;
		string = string.toString('utf-8');
		var arraySpecified = [];
		for(var i = 0 ; i < string.length; i++){
			arraySpecified.push(predictFunc.predictSentence(string[i]));
			console.log("array["+i+"] -> " + string[i]);
		}
		console.log(arraySpecified);
		console.log("girilen string ->  " + string);
		response.render('greet',{json:arraySpecified,len:arraySpecified.length});
		}
})


app.post('/',function(request,response){
	var string = request.body.enteredName;
	var arraySpecified = [];
	for(var i = 0 ; i < string.length; i++){
		arraySpecified.push(predictFunc.predictSentence(string[i]));
		console.log("array["+i+"] -> " + string[i]);
	}
	console.log(arraySpecified);
	console.log("girilen string ->  " + string);
	response.render('greet',{json:arraySpecified,len:arraySpecified.length});
})

app.listen(3000);
