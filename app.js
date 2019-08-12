const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();
const productRoute = require('./api/routes/product');
const orderRoute = require('./api/routes/order');
const userRoute = require('./api/routes/user');


app.use('/product', productRoute);
app.use('/order', orderRoute);
app.use('/user', userRoute);

app.use(morgan('dev'));
app.use('/public',express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())


mongoose.Promise = global.Promise;
const dbConfig = require('./database.config');





    mongoose.connect(dbConfig.url, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    })




app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow_headers",
        "Origin","X-Requested-With","Content-Type","Accept","Authorization"
        );
        if(req.method ==="OPTION") {
            res.header("Access-Control-Allow-Methods", "PUT","POST","DELETE","PATCH");

          return  res.status(200).json({})
        }
});







app.use(( req, res, next) => {
    const error = new Error('Not Found');
    error.status = 400;
    next(error)
});


app.use((error, req, res, next) => {
    
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
    next(error)
});





module.exports = app;