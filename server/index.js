require ('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const DBconnect = require('./db/DBconnect');
const authRouter = require('./routes/auth-router');
const AdminRouter = require('./routes/admin-router');
const contactRouter = require('./routes/contact-router');
const errorMiddleware = require('./middleware/error-middleware');
const cors = require('cors');

const corsOptions = {
    origin: 'http://127.0.0.1:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));
//middleware to interact with json
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.json());







const port = 5000;
 

DBconnect().then(()=>{
    app.listen(port, ()=>{
        console.log(`Server app listening at http://localhost:${port}`);
    })
    
    app.use('/auth/', authRouter);
app.use('/admin/', AdminRouter);
app.use('/contact/', contactRouter);

// middleware should be at the end of the app.use
app.use(errorMiddleware);
    
}
)



// app.get('/', (req,res)=>{
//     res.send('Hello World, port number: ' + port);

// })

// app.get('/login', (req,res)=>{
//     res.send('Login');
// })

