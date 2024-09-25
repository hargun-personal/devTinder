const express = require('express');

const app = express();

app.use("/hello",

[(req, res, next) => {
    console.log("Handling route 1");
    next();
    // res.send("Response 1 !");
},
(req, res, next) => {
    console.log("Handling route 2");
    // res.send("Response 2 !");
    next();
}],
(req, res, next) => {
    console.log("Handling route 3");
    // res.send("Response 3 !");
    next();
},
[(req, res, next) => {
    console.log("Handling route 4");
    res.send("Response 4 !");
    // next();
}]
)

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