const express = require("express")
const path = require("path")
const app = express()
const hostname = 0.0.0.0
// const fs = require("fs")
var mongooose = require("mongoose")
const bodyparser = require("body-parser")
const { default: mongoose } = require("mongoose")
mongoose.connect('mongodb://localhost/contact_explore', {useNewUrlParser: true})
const port= 80

const ContactSchema = new mongoose.Schema({
    Name: String,
    Phone: String,
    Email: String,
    Message: String
});

const Contact = mongoose.model('Contact', ContactSchema);

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views')) 

app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
})

// app.post('/', (req, res)=>{
//     // name = req.body.name
//     // age = req.body.age
//     // gender = req.body.gender
//     // address = req.body.address
//     // more = req.body.more
//     console.log(req.body)
//     let str_content = JSON.stringify(req.body)

//     fs.appendFileSync('output.txt', "\n"+ str_content)
//     // let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
//     const params = {'message': 'Your form has been submitted successfully'}
//     res.status(200).render('index.pug', params);

// })



app.post('/contact', (req,res)=>{
    var myData = new Contact(req.body)
    console.log(myData);
    myData.save().then(()=>{
        res.send("This item has been save to the database")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    })

})



app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
