const express = require('express');
const app = express();
const port = 5000;
 

app.get('/', (req,res)=>{
    res.send('Hello World, port number: ' + port);
})

app.post('/login', (req,res)=>{
    res.send('Login');
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})
