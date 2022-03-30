module.exports = (sequelize,DataTypes)=>{

    const Agent = sequelize.define("agent",{
      
        status:{
            type:DataTypes.STRING,
        }
        
    })

    return Agent
}