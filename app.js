
const express = require('express')
const app = express()
const cors = require("cors");
const port = 5000
const mongoose = require('mongoose');
require('dontenv').config();
//import model/schema that was created
const Form = require('./formSchema');


// connect to the localhost DB
const dbConnect = async () => {
  try {
    /*when connecting mongoose to the database make sure to
      have a user/password associated with the account and the specific database
      that is to be connected to
    */
    await mongoose.connect('mongodb://myTester:password@127.0.0.1:27017/test', () => console.log('connected'));
    
  } catch (error) {
    console.log(error);
  }
  
}
// create a schema
const formSchema = new mongoose.Schema({
  name: String
})


//save the document to the database by calling the save method
const saveForm = async (formData) => {
  try {
    await formData.save();
    console.log(`You've successfully saved to the DB`);
  } catch (error) {
    console.log(error);
  }
};

dbConnect();
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors());
console.log(process.env.MONGO_URI);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/post', async (req,res) => {

 
  //create a model from the schema
const formData = new Form({name : req.body.Name})
saveForm(formData);
console.log(`You've successfully posted`);

});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
