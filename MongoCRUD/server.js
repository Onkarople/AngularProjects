const express=require('express');
const obj=express();

const {MongoClient}=require("mongodb");
const URL="mongodb://0.0.0.0:27017/";


const client=new MongoClient(URL); //connect ho url shi



obj.listen(5100,function()
{
   console.log("Marvellous Server Started succesfully..!");
});

obj.get('/',function(req,res)
{
   res.send("Server is live");
});

async function getConnection()
{
    let result= await client.connect();  //to connect with dbms
    let db =result.db("Marvellous");     //to connect with database Marvellous
    let collection = db.collection("Batches"); //to connect with collectio name batches
    let response = await collection.find({}).toArray();
    console.log(response);
}

getConnection();