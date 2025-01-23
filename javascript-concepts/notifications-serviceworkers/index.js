const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//set static path 
app.use(express.static(path.join(__dirname,'client')))

app.use(bodyParser.json());

const publicVapidKey = 'BLslLXL34m4IISlcVm6FYUzT7njzjVwiCm6gzy-cxMzl9IhtwgYh6KNoG6QkngzJXgbNoIvdgN-7RTmts5Iyg50';
const privateVapidKey = '_Dt8d44gjluYw376e8mjOtTZ0e8xvVxF6-l3RwZMR2g';

webpush.setVapidDetails('mailto:aaaparnap7293@gmail.com', publicVapidKey, privateVapidKey)

//Subscribe route
app.post('/subscribe',(req,res)=>{
    //Get pushSubscription object 
    const subscription = req.body;

    //Send 201 - resource created
    res.status(201).json({})

    //Create payload
    const payload = JSON.stringify({title:'Push Test'});

    //Pass object into send notification 
    webpush.sendNotification(subscription,payload).catch(err => console.error(err))
})

const port = 5000;

app.listen(port,()=>console.log(`Server started on port ${port}`))

