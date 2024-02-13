const express = require('express');
const app = express();
const port = 5000;
//middleware to interact with json
app.use(express.json());

const authRouter = require('./routes/auth-router');
const AdminRouter = require('./routes/admin-router');

app.use('/auth/', authRouter);
app.use('/admin/', AdminRouter);
 

app.get('/', (req,res)=>{
    res.send('Hello World, port number: ' + port);
})

// app.get('/login', (req,res)=>{
//     res.send('Login');
// })

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})
