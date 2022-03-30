const db = require('../models')
var cron = require('node-cron');

//create  main model

const UserIssue = db.Userissue
const Agent = db.Agent


// main work

//1. create a addComplain

const addComplain = async (req,res)=>{

    let myjson={
        'create':'create'
    }
    let info={

        title:req.body.title,
        description:req.body.description,
        status:myjson.create

        }
   
    const product = await UserIssue.create(info)
    res.status(200).send(product)
 

}

//2. get all products

   const toAssigntask = async(req,res)=>{
   
    let task= await UserIssue.findAll({
         attributes:[
             'id',
            'status'
        ]
    })
    let assign= await Agent.findAll({

        attributes:[
             'id',
            'status'

        ]
    })
    const task_main=task.filter(check)
    function check(onetask)
        {
         
            return onetask.dataValues.status==='create'
        }
        
    const agent_main=assign.filter(check_agent)
    function check_agent(agent_check)
        {
        
            return agent_check.dataValues.status==='avalible'

        }
        let task_main_length=task_main.length;
        let agent_main_length=agent_main.length;
        let min_index=Math.min(task_main_length,agent_main_length)

       

        for(let i=0;i<min_index;i++)
        {
            if(task_main[i].dataValues.status==='create' && agent_main[i].dataValues.status==='avalible' )
            {
                const abc=task_main[i].dataValues.id
                const xyz=agent_main[i].dataValues.id
                await Agent.update({status:'busy'},{where:{id:xyz}})
                await UserIssue.update({status:'assign'},{where:{id:abc}})
            } 
        }
    res.send('task is assign sucesfully')
   
}

module.exports={
    addComplain,
    toAssigntask,
}