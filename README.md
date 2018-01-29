# lyft

This is a simple web application written in Node JS that accepts a POST request to the route "/test" which accepts two arguments `"x"` and `"y"` and returns a JSON object `{"sum":x+y}`.
To test the application run the following command in the command line;
 `curl -X POST localhost:8080/test --data '{"x": 4, "y": 2}' -H 'Content-Type: application/json'`