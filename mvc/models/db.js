const mongoose=require("mongoose");
let uri="mongodb://heroku_v8pqm5gv:4165960rsr0ebrpaj4leeb3tsj@ds125555.mlab.com:25555/heroku_v8pqm5gv";
/*
if(process.env.NODE_ENV=="production"){
uri=process.env.MONGOLAB_AMBER_URI;}*/
 mongoose.connect(uri,{useNewUrlParser:true});
 mongoose.connection.on('connected',()=>{
   console.log("============================");
    console.log("============================");
     console.log("============================");
      console.log("============================");
       console.log("============================");
 });
 const shutdown = (msg, callback) => {
     mongoose.connection.close( () => {
         console.log(`Mongoose disconnected through ${msg}`);
         callback();
     });
 };



 process.once('SIGUSR2', () => {
     shutdown('nodemon restart', () => {
         process.kill(process.pid, 'SIGUSR2');
     });
 });


 process.on('SIGINT', () => {
     shutdown('app termination', () => {
         process.exit(0);
     });
 });


 process.on('SIGTERM', () => {
     shutdown('Heroku app shutdown', () => {
         process.exit(0);
     });
 });
