const dbConfig=require('../config/dbConfig.js')
var cron = require('node-cron');
const {Sequelize,DataTypes}= require('sequelize')

const sequelize = new Sequelize(
        
        dbConfig.DB,
        dbConfig.USER,
        dbConfig.PASSWORD,{
            host:dbConfig.HOST,
            dialect:dbConfig.dialect,
            operatorsAliases:false,

            pool: {
                max:dbConfig.pool.max,
                min:dbConfig.pool.min,
                acquire:dbConfig.pool.acquire,
                idle:dbConfig.pool.idle

            }
    }
)

 
sequelize.authenticate()
.then(()=>{

    console.log('connected...')
})
.catch(err=>{
    console.log('ERROR',err)
})

const db={}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Userissue = require ('./Userissue.js')(sequelize,DataTypes)
db.Agent = require ('./Agent.js')(sequelize,DataTypes)

db.sequelize.sync({force:false})
.then(()=>{
    console.log('yes re-sync done')
})

module.exports =db
