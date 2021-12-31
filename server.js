
const express = require('express')
const app = express()
const cors = require("cors");
const port = 5000
const mongoose = require('mongoose');
require('dotenv').config();
//import model/schema that was created
const Form = require('./formSchema');


// connect to the localhost DB
const dbConnect = async () => {
  try {
    /*when connecting mongoose to the database make sure to
      have a user/password associated with the account and the specific database
      that is to be connected to
    */
    await mongoose.connect(process.env.MONGO_URI, () => console.log('connected'));
    
  } catch (error) {
    console.log(error);
  }
  
}


//save the document to the database by calling the save method
const saveForm = async (formData) => {
  try {
    await formData.save();
    console.log(`You've successfully saved to the DB`);
  } catch (error) {
    console.log(error);
  }
};
//get the forms/documents from the database.
const getForms = async () => {
  try {
    await Form.find({});;
  } catch (error) {
    console.log(form)
  }
}
//middleware
dbConnect();

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/info', (req, res) => {
  //Query
 Form.find({}).then((data) => {

   res.json(data)
 }).catch(error => {
   console.log(error);
 })

  //console.log(req);

});

app.post('/post', async (req,res) => {

 
  //create a model from the schema
const formData = new Form({username : req.body.name, password: req.body.password})
saveForm(formData);
console.log(`You've successfully posted`);

});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
