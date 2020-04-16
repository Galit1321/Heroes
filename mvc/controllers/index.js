const mongoose=require("mongoose");
const Hero =  require("../models/schema");

let data=require("../../default_Heros");
let heroData=data.heroes;

reset=function(req,res){
  Hero.deleteMany({},(err,info)=>{
    if (err){return res.send({error:err});}
    Hero.insertMany(heroData,(err,info)=>{
      if (err){return res.send({error:err});}
      res.redirect( '/heroes')
    });
  });
}
getIndex = function(req, res, next) {
  res.render('index', { title: 'Mongoose' });
}

getHerosIndex=function(req,res){
  Hero.find((err,heroes)=>{
    if (err){return res.send({error:err});}
    res.render("heroes",{title:"Hall Of Heros",heroes:heroes});
  });

}

getHerosForms=function(req,res){
  res.render("create-hero",{title:"Hall Of Heros"});
}

createNewHero=function({body},res){
  let hero={
    name:body.name,
    description:body.desc,
    stats:{
      strength:body.strength,
      perception:body.perception,
      endurance:body.endurance,
      charisma:body.charisma,
      intelligence:body.intelligence,
      agility:body.agility,
      luck:body.luck,
    },
  }

  body.origin&&(hero.origin=body.origin);
  Hero.create(hero,(err,newHero)=>
  {
    if (err){
      return res.send({error:err});}
      res.redirect('/heroes')
    });
  }


  getUpdateHero=function ({params},res){
    Hero.findById(params.heroid,(err,hero)=>{
      if (err){return res.send({error:err});}
      console.log(hero);
      res.render('update-hero',{title:"Update Hero",hero:hero});
    });
  }


  updateHero =function ({params,body},res){
    let hero={
      name:body.name,
      description:body.desc,

      stats:{
        strength:body.strength,
        perception:body.perception,
        endurance:body.endurance,
        charisma:body.charisma,
        intelligence:body.intelligence,
        agility:body.agility,
        luck:body.luck,
      },
    };
    body.origin&&(hero.origin=body.origin);
    console.log(hero);
    Hero.findByIdAndUpdate(params.heroid,hero,err=>{
      if (err){return res.send({error:err});}
      res.redirect('/heroes');}
    );
  }

deleteHero=function({params},res){
  Hero.findByIdAndRemove(params.heroid,(err,hero)=>{
    if (err){return res.send({error:err});}
    res.redirect('/heroes');
  });
}

module.exports = {
  getIndex,
  getHerosIndex,
  getHerosForms,
  createNewHero,
  deleteHero,
  updateHero,
  getUpdateHero,
  reset
};
