
const express = require('express');

const app = express();
const port = process.env.PORT || 1227;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res, next) {  
    res.render('./index.html'); // rendering index.html
});
app.get('/table', function(req, res, next) {  
    res.render('./table.html'); // rendering table.html
});
app.get('/layout', function(req, res, next) {  
    res.render('./layout.html'); // rendering layout.html
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
  
