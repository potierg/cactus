var express = require('express')
var app = express()


app.set('port', (process.env.PORT || 5000))


app.use(express.static('release',{
    index: false, 
    immutable: true, 
    cacheControl: true,
    maxAge: "30d"
}));

// app.use('/bower_components', express.static(__dirname + '/bower_components'))
console.log("dirname "+__dirname)
app.get('/', function(request, response) {
    response.sendFile(__dirname+'/release/index.html')
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})