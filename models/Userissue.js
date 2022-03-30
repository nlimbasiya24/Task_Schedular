

module.exports = (sequelize,DataTypes)=>{

    const Userissue = sequelize.define("issue",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description: {
                type:DataTypes.TEXT
        },
        status:{
            type:DataTypes.STRING,
        }
        
    })

    return Userissue
}