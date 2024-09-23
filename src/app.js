const express = require('express');

const app = express();

app.use("/hello",(req, res) => {
    res.send("hello from the server !");
})

app.use("/test", (req, res) => {
    res.send('Test routes working');
})

app.use("/", (req, res) => {
    res.send("Dashboard is working");
})

app.listen(8888, ()=> {
    console.log('serever is running on port 8888')
});