const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

const cors = require('cors');

app.use(cors());

app.use(express.static('web'));

const pro = []
app.get('/getdata',(req,res)=>{
    res.send(pro);
    // pro = []
})

app.post('/datatoserver',(req,res)=>{
    console.log(req.body)
     entry = {
        temp : req.body.temp,
        name : req.body.cityname
    }
    pro.push(entry)
})


const port = 3030;

app.listen(port,()=>{
    console.log('listening')
})
