const asyncHandler= require('express-async-handler');
const Goal =require('../models/goalModel');


//Desc Get goals
//Route GET /api/goals
//Access Private
const getGoals= asyncHandler(async(req,res)=>{
    const goals = await Goal.find({user: req.user.id})
    
     res.status(200).json(goals)
})

//Desc Set goal
//Route POST /api/goals
//Access Private
const setGoal= asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400);
        throw new Error('Please add a text field')
    }
    
    const goal = await  Goal.create({
        text: req.body.text,
        user:req.user.id
    })
    
     res.status(200).json(goal);
})

//Desc Update goals
//Route PUT /api/goals/:id
//Access Private
const updateGoal= asyncHandler(async(req,res)=>{
    const goal= await Goal.findById(req.params.id);
    
    if(!goal){
        res.status(400);
        throw new Error('Goal not found')
    }
    
//    const user= await User.findById(req.user.id)
    
    
    //check for user
      if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
    
    
    //Ensure only the logged user matches the goal user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    
    const updatedGoal= await Goal.findByIdAndUpdate(req.params.id, req.body, {new:true})
    
    res.status(200).json(updatedGoal)
})

//Desc Delete goals
//Route DELETE /api/goals/:id
//Access Private
const deleteGoal= asyncHandler(async(req,res)=>{
    const goal= await Goal.findById(req.params.id);
    
    if(!goal){
        res.status(400);
        throw new Error('Goal not found')
    }
    
//    const user= await User.findById(req.user.id)
    
    
    //check for user
      if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }
    
    
    //Ensure only the logged user matches the goal user
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    
   const theDeleted= await goal.deleteOne({_id:req.params.id});
    
    res.status(200).json(theDeleted._id)
})



module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}