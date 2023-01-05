var express = require("express");
var cors = require("cors");
const bcrypt = require('bcrypt');
const saltRounds = 10;
var mongoClient = require("mongodb").MongoClient;
var connectionString = "mongodb://localhost:27017";
var app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));
app.get("/getusers", (req, res)=>{
    mongoClient.connect(connectionString,(err, clientObj)=>{
        if(!err){
            var database = clientObj.db("reactnativedb");
            database.collection("users").find({}).toArray((err, documents)=>{
                if(!err) {
                    res.send(documents);
                }
            })
        }
    })
});
app.post("/registerusers", (req,res)=>{
            var details={
                FirstName:req.body.FirstName,
                LastName:req.body.LastName,
                Mobile:req.body.Mobile,
                Email:req.body.Email,
                Pwd:req.body.Pwd,
               //  Password:
            }
mongoClient.connect(connectionString,(err,clientObj)=>{
 if(!err){
         clientObj.db("reactnativedb").collection("users").insertOne(details,()=>{
         console.log("data inserted successfully")
         //jwt.sign({_id: details._id }, 'avijibfebcjdbcjkdshckdcmdsckdfjnkkkdfnkn', { algorithm: 'RS256' }, function(err, token) {
         //return console.log(token);
          //});
     })
 }
})
})
////with bcrypt
// app.post("/registerusers", (req,res)=>{

//     var details;
//     bcrypt.hash(req.body.Pwd, saltRounds, function(err, hash) {
//         details={
//             FirstName:req.body.FirstName,
//             LastName:req.body.LastName,
//             Mobile:req.body.Mobile,
//             Email:req.body.Email,
//             Pwd:hash,
//            //  Password:
//         }
// mongoClient.connect(connectionString,(err,clientObj)=>{
// if(!err){
//      clientObj.db("reactnativedb").collection("users").insertOne(details,()=>{
//      console.log("data inserted successfully")
//      //jwt.sign({_id: details._id }, 'avijibfebcjdbcjkdshckdcmdsckdfjnkkkdfnkn', { algorithm: 'RS256' }, function(err, token) {
//      //return console.log(token);
//       //});
//  })
// }
// })
// })
// })
app.listen(4080);
console.log("Server Started : http://127.0.0.1:4080")