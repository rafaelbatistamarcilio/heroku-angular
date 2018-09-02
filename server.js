const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

// app.use(compression({
//   filter: (req, res) => {
//     if (req.headers['x-no-compression']) {
//       // don't compress responses with this request header
//       return false
//     }

//     // fallback to standard filter function
//     return compression.filter(req, res)
//   }
// }));

// Serve only the static files form the dist directory
app.use(express.static('./dist'));

app.get('/*', (req, res) => {
  res.sendFile(path.join('./dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
