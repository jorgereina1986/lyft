
var express = require("express");
var myParser = require("body-parser");
var app = express();
var port= 3000;

app.use(myParser.json({
    type: function() {
        return true;
    }
}));
app.post("/test", function(request, response) {
    console.log(JSON.stringify({'sum':sum(request, response)})); //prints out result in console
    response.setHeader('Content-Type', 'appllication/json')
    response.send(JSON.stringify({'sum':sum(request, response)})) //return response with the sum of x and y
});
app.listen(port);

//function to add x and y value
function sum(request, response) {
    var x = request.body.x;
    var y = request.body.y;
    var sum = x+y;
    return sum + '';
}