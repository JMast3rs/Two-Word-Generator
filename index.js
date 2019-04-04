
var http = require('http');
var fs = require("fs");

http.createServer(function (req, res) {

	var page = fs.readFileSync("index.html").toString();

	var words = fs.readFileSync("words.txt").toString();
	words = words.split("\n")

  var special = ["!","@","#","$","%","&","?"];

  for(i = 0; i < words.length; i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  var middleVAR = [];
  middleVAR.push(Math.floor(Math.random() * 9999));
  middleVAR.push(Math.floor(Math.random() * 9999));
  middleVAR.push(special[Math.floor(Math.random()*7)]);
  middleVAR.push(special[Math.floor(Math.random()*7)]);
  middleVAR.push(special[Math.floor(Math.random()*7)] + Math.floor(Math.random() * 9999) + special[Math.floor(Math.random()*7)]);

  var passwords = "";
  var randomNumberOne;
  var randomNumberTwo;
  var len;

  for(i = 0; i < 5; i++){

  	while ( !(len == 15) ){
  		randomNumberOne = Math.floor(Math.random() * 10000);
  		randomNumberTwo = Math.floor(Math.random() * 10000);

  		len = words[randomNumberOne].length + words[randomNumberTwo].length;
  	}
    len = 0;

    passwords = passwords + "<article><h1>" + words[randomNumberOne] + " " + middleVAR[i] + " " + words[randomNumberTwo] + "</h1></article>";

  }


    res.end(page + passwords);
}).listen(8080);
