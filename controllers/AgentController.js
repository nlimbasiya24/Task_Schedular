const db = require('../models')
const agent = db.Agent


//1. create a product

const Agent = async (req,res)=>{

    let myjson={
        'create':'avalible'
    }
    let info={

        
        status:myjson.create

    }

    const supportagent = await agent.create(info)
    res.status(200).send(supportagent)
  


}
module.exports={
    Agent
}