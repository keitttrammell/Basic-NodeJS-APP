
const express = require('express');

const app = express();
const port = process.env.PORT || 1227;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res, next) {  
    res.render('index'); // rendering index.html
});
app.get('/table', function(req, res, next) {  
    res.render('table'); // rendering table.html
});
app.get('/layout', function(req, res, next) {  
    res.render('layout'); // rendering layout.html
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
  