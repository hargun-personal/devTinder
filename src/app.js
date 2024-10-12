const express = require('express');
const { adminAuth, userAuth } = require("./middlewares/auth")

const app = express();

app.use("/admin", adminAuth)

app.get("/admin/getAllRoutes", (req, res) => {
    res.send("Get All Routes");
})

app.get("/admin/deleteAccount", (req, res) => {
    res.send("Delete Account");
})

app.get("/user/data",userAuth, (req, res) => {
    res.send("User data");
})

app.get("/user/login", (req, res) => {
    res.send("user logged in");
})

app.get("/hello", (req, res, next) => {
    console.log("Handling route 1");
    // next();
    res.send("Response 1 !");
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
    console.log('server is running on port 8888')
});