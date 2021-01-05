const express = require("express")
const path = require("path")
const fs = require("fs")
const bodyparser = require("body-parser")
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/DanceDB', {useNewUrlParser: true});
const app = express()
const port = 80

//Define moongoose schema
const ContactSchema = new mongoose.Schema({
    name: String,
    Phone: String,
    Email: String,
    Age: String,
    Concern: String,
  });

  // compile model (model plural is saved as table)
const Contact = mongoose.model('Contact', ContactSchema);


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // To serve static files
app.use(express.urlencoded())


//PUG SPECIFIC STUFF
app.set('view engine', 'pug' ) // SET TEMPLATE ENGINE AS PUG
app.set('views', path.join(__dirname, 'views')) // SET THE DIRECTORY TO READ TEMPLATES FROM


// ENDPOINTS
app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('home.pug', params)
})

app.get('/contact',(req,res)=>{
    const params = {}
    res.status(200).render('contact.pug', params)
})




// Do post request and save to a db we need a module body-parser
app.post('/contact',(req,res)=>{
    var myData = new Contact(req.body)
    myData.save().then(()=>{
        res.send("data has been sent to db")
    }).catch(()=>{
        res.status(400).send("Item was not saved bro")
    })
    // here .save returns a promise so we handle it using .then ans things in nodejs are asynchronous and .catch is to catch any error
})





//SERVER LISTNING CODE
app.listen(port, ()=>{
    console.log(`The application is started on ${port}`)
})