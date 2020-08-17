
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 6541;

/**
 * Parse the (JSON) request body, if any.
 */

app.use(bodyParser.json());

/**
 * Serve static files from the directory ./static.
 *
 * Just "index.html" is served from here.
 *
 * You don't have to do anything here, apart from ensuring that the
 * asciidoc file in the static directory has been compiled to HTML.
 */

app.use(express.static('./static'));

/* RPN calculator API.
 *
 * Javascript tips:
 *
 *   - Look carefully at the examples above.  Much of what you need to do
 *     can be achieved by copying and tweaking that code.
 *
 *   - stack = stack.concat(values)
 *   - stack.length (length of array "stack", like len(stack) in Python)
 *   - value = stack.pop()
 *   - stack.push(value)
 *
 *   - For the /push request, the JSON body will already have been parsed by
 *     the body parser above.  You don't need to do anything special.  Just
 *     verify that req.body.values exists.
 */

var stack = [];

/**
 * (You shouldn't have to change anything ABOVE here.)
 *
 * YOUR WORK GOES HERE!
 */

app.get("/stack", function(req, res) {
   res.send(JSON.stringify(stack));
});

app.get("/length", function(req, res) {
   res.send(JSON.stringify(stack.length));
});

app.post("/push", function(req, res) {
   if ( req.body && req.body.hasOwnProperty("values") ) {
      stack = stack.concat(req.body.values);
      res.send("ok: " + JSON.stringify(stack));
   }
   else {
      res.status(400).send("bad request (no values)");
   }
});

app.get("/pop", function(req, res) {
   if ( 0 < stack.length ) {
      var value = stack.pop();
      res.send(JSON.stringify(value));
   }
   else {
      res.status(400).send("bad request (stack is empty)");
   }
});

app.get("/peek", function(req, res) {
   if ( 0 < stack.length ) {
      var value = stack.pop();
      stack.push(value);
      res.send(JSON.stringify(value));
   }
   else {
      res.status(400).send("bad request (stack is empty)");
   }
});

app.get("/add", function(req, res) {
   if ( 1 < stack.length ) {
      var value = stack.pop() + stack.pop();
      stack.push(value);
      res.send(JSON.stringify(value));
   }
   else {
      res.status(400).send("bad request (stack is too small)");
   }
});

app.get("/subtract", function(req, res) {
   if ( 1 < stack.length ) {
      var x = stack.pop()
      var value = stack.pop() - x;
      stack.push(value);
      res.send(JSON.stringify(value));
   }
   else {
      res.status(400).send("bad request (stack is too small)");
   }
});

app.get("/multiply", function(req, res) {
   if ( 1 < stack.length ) {
      var x = stack.pop()
      var value = stack.pop() * x;
      stack.push(value);
      res.send(JSON.stringify(value));
   }
   else {
      res.status(400).send("bad request (stack is too small)");
   }
});

app.get("/divide", function(req, res) {
   if ( 1 < stack.length ) {
      var x = stack.pop()
      var value = stack.pop() / x;
      stack.push(value);
      res.send(JSON.stringify(value));
   }
   else {
      res.status(400).send("bad request (stack is too small)");
   }
});

/**
 * Start the server on the indicated port.
 *
 * (You shouldn't have to change anything BELOW here.)
 */

app.listen(port, function() {
   console.log("listening on port", port);

   /**
    * Now, the server is up.
    *
    * Next, if there is a command-line argument, then we'll run that
    * as a test command via make (and then exit).
    *
    * We're doing it this way, because this will be easy to automate in
    * the CI environment.
    */

   switch ( process.argv.length ) {
      case 2:
	 // OK.  There's nothing to do here.  Just leave the server running.
	 break;
      case 3:
	 console.log("launching tests: make", process.argv[2]);
	 runTest(process.argv[2]);
	 break;
      default:
	 // This is an error.
	 console.error("invalid arguments");
	 process.exit(1);
   }
});

var childProcess = require("child_process");

runTest = function(target) {
   make = childProcess.spawn("make", [target]);

   make.stdout.on("data", function(data) {
      console.log(data.toString().trimEnd());
   });

   make.stderr.on("data", function(data) {
      console.error(data.toString().trimEnd());
   });

   make.on("close", function(code) {
      process.exit(code);
   });
}
