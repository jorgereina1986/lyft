# lyft

This is a simple web application written in Node JS that accepts a POST request to the route "/test" which accepts two arguments `"x"` and `"y"` and returns a JSON object `{"sum":x+y}`. 

Run app with:

`node index.js`

To test the application when running, use command:

 `curl -X POST localhost:3000/test --data '{"x": 4, "y": 2}' -H 'Content-Type: application/json'`