
var express = require("express");
var myParser = require("body-parser");
var app = express();

app.use(myParser.json({
    type: function() {
        return true;
    }
}));
app.post("/test", function(request, response) {
    console.log(sum(request, response)); //prints out result in console
    response.send(sum(request, response)); //return response with the sum of x and y
});
app.listen(8080);

//function to add x and y value
function sum(request, response) {
    var x = request.body.x;
    var y = request.body.y;
    var sum = x+y;
    return sum + ' ';
}