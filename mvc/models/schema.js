const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const StatsSchema=new Schema({
    strength:{type:String,default:30,max:100,min:0},
    perception:{type:String,default:30,max:100,min:0},
    endurance:{type:String,default:30,max:100,min:0},
    charisma:{type:String,default:30,max:100,min:0},
intelligence:{type:String,default:30,max:100,min:0},
    agility:{type:String,default:30,max:100,min:0},
    luck:{type:String,default:30,max:100,min:0},
});

const HeroSchema=new Schema({
  name:{type:String,require:true,unique:true},
  description:{type:String,require:true},
  origin:{type:String, default:"unknown"},
  stats: {type:StatsSchema,require:true},
});



const squadSchema=new Schema({
  name:{type:String,require:true,unique:true}
});


module.exports =mongoose.model('Hero',HeroSchema);
