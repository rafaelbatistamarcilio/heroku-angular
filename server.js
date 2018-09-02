const express = require('express');
const path = require('path');
// const compression = require('compression');

const app = express();

// app.use(compression());

// Serve only the static files form the dist directory
app.use(express.static('./dist'));

//body parsing middleware (for json, urlencoded, and multipart responses)
app.use(express.bodyParser());

//handle any errors
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, err);
});


app.get('/*', (req, res) => {
  res.sendFile(path.join('./dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
