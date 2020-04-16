const mongoose=require("mongoose");
 let url="mongodb://localhost:27017/the_supers";
 mongoose.connect(url,{useNewUrlParser:true});
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
