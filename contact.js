var express=require("express");
var mysql=require("mysql2");

var app=express();

app.listen(3000 || process.env.PORT,function()
{
    console.log("Server Started");
})
app.use(express.static("public"));

app.get("/",function(req,resp)
{
      resp.sendFile(process.cwd()+"/public/index.html");
})



var dbConfig={
    host:"127.0.0.1",
    user:"root",
   password:"",
   database:"portfolio"
}
var dbCon=mysql.createConnection(dbConfig);

dbCon.connect(function(err)
{
    if(err==null)
    console.log("Connected Successsfully")
    else
    resp.send(err);
})

app.get("/do-submit", function (req, resp) {

console.log(req.query);
    dbCon.query("insert into contact(email,name,subject,mobile,dos,message) values(?,?,?,?,current_date(),?)", [req.query.kuchemail, req.query.kuchname, req.query.kuchsubject,req.query.kuchnumber,req.query.kuchmessage], function (err) {
      if (err == null) {
        resp.send("Submit successfully")
        
      }
      else {
        resp.send(err);
      }
    })
    
  
    
  
  })
