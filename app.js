// importing module

var express = require('express');
var mongoose=require('mongoose');
var bodyparser = require('body-parser');
var cors=require('cors');
var path = require('path');
var Post = require('./post');

var app = express();
app.use(bodyparser.json());
app.use(cors());

//connect to mongo db
// mongoose.connect('mongodb://localhost:27017/app');
mongoose.connect("mongodb+srv://deepumang1705:mongodbpassword@cluster0.nmfhv.mongodb.net/MongoDB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
//on connection

mongoose.connection.on('connected',()=>{
    console.log('Connected to Database')
})
mongoose.connection.on('error',(err)=>{
if(err){
    console.log('err',err);

}
    console.log('Connected to Database')
})

const port = process.env.PORT || 3000;



//staticfile
app.use(express.static(path.join(__dirname, './dist/material-admin')));
// app.use(express.static(path.join(__dirname ,'public')));

//testing
app.get('/', (req, res) => {
    res.send('foobar');
});

app.post('/api/register', async (req, res) => {
  try { console.log(req.body);
    const post = new Post();
   post.firstName = req.body.firstName;
   post.lastName = req.body.lastName;
   post.email = req.body.email;
   post.password = req.body.password;
   post.confirmPassword = req.body.confirmPassword;
   post.address = req.body.address;
   if(req.body.check===''){
    post.check = false;
   } else {
     post.check = true;
   }
   await post.save();
   res.send({result: post});
  } catch (error) {
      res.status(500)
  }
});

app.listen(port, () => {
    console.log('server started at port:' + port)
});


