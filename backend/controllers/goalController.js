const asyncHandler= require('express-async-handler');


//Desc Get goals
//Route GET /api/goals
//Access Private
const getGoals= asyncHandler(async(req,res)=>{
     res.status(200).json({msg:'Get goals'})
})

//Desc Set goal
//Route POST /api/goals
//Access Private
const setGoal= asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400);
        throw new Error('Please add a text field')
    }
    
    
     res.status(200).json({msg:'Create goal'})
})

//Desc Update goals
//Route PUT /api/goals/:id
//Access Private
const updateGoal= asyncHandler(async(req,res)=>{
    res.status(200).json({msg:`updated ${req.params.id} goal`})
})

//Desc Delete goals
//Route DELETE /api/goals/:id
//Access Private
const deleteGoal= asyncHandler(async(req,res)=>{
     res.status(200).json({msg:`Deleted ${req.params.id} goal`})
})



module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}