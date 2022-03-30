const reviewController = require('../controllers/AgentController.js')

const router = require('express').Router()


router.post('/addagent',reviewController.Agent)


module.exports = router