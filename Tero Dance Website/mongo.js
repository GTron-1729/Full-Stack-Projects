// Inserting data in Mongo------------------------------------------->

use ganesh  // This will create the database

db.items.insertOne({name: "ganesh" , price: 22000 , rating: 4.5 , qty: 223 , sold:98}) // here we insert in collection(table) items a documnet(record)

db.items.insertMany([{name: "ganesh" , price: 22000 , rating: 4.5 , qty: 223 , sold:98} , {name: "tanya" , price: 92000 , rating: 4.1 , qty: 22 , sold:97} , {name: "soham" , price: 2200 , rating: 5.5 , qty: 423 , sold:28}]) // here we insert multiple in collection(table) items a documnet(record)

// we can also add addition property to single Object. No need for all objects to follow same schema like mysql

// Now querying in MongoDB ------------------------------------------->

db.items.find() // if no param all documents will be printed
db.items.find({rating: 4.5}) // specific search inside this is filer object
db.items.find({rating: {$gte: 4.5}}) // this is a complex query where rating greater than equal 4.5 will be shown

db.items.find({rating: {$gte: 4.5} , price:{$gt: 10000}}) // this is AND operator simple comma 


db.items.find({$or: 
    [{rating: {$gte: 4.5}} , {price:{$gt: 10000}}]
})// this is for OR quite wierd and complex


db.items.find({rating: {$gte: 4.5}} , {rating: 1}) // here instead off all document we will only see ratings other attributes will be skipped

// Deleting data ------------------------------------------------------->
db.items.deleteOne({rating: 4.5}) // deletes first occurence
db.items.deleteMany({rating: 4.5}) // here all matching enteries are deleted

// Update data-------------------------------------------------------->
db.items.updateOne({name:"ganesh"} , {$set: {price:2}}) // here provide 2 params 1st what to search and second what to update
db.items.updateMany({name:"tanya"} , {$set: {price:2 , rating:7.0}})  // here we will update multiple matching enteries and multiple changes acordingly

