 
var http = require('http');

http.createServer(function (req, res) {
    
	
	var fs = require("fs");
	
	var page = fs.readFileSync("index.html").toString();
	
	var words = fs.readFileSync("words.txt").toString();
	words = words.split("\n")

	
	while (1 == 1){
		var randomNumberOne = Math.floor(Math.random() * 370087);
		var randomNumberTwo = Math.floor(Math.random() * 370087);
		
		var len = words[randomNumberOne].length + words[randomNumberTwo].length;
		
		if (len == 15){
			break;
		};
	}
	
	
    res.end(page + "<article><h1>" + words[randomNumberOne] + " " + words[randomNumberTwo] + "</h1></article>");
}).listen(8080);