const express = require('express');

const app = express();

app.use("/hello",(req, res) => {
    res.send("hello from the server !");
})

app.get('/test', (req, res) => {
    console.log(req.query);
    res.send("Test Routes works")
})

app.post('/test/:id/:base/:room', (req, res) => {
    console.log(req.params);
    res.send("Post req sent works")
})

app.listen(8888, ()=> {
    console.log('serever is running on port 8888')
});