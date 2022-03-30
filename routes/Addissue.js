const usercomplain = require('../controllers/ComplainRegister.js')

const router = require('express').Router()


router.post('/addissue',usercomplain.addComplain)


router.get('/assigntask',usercomplain.toAssigntask)


module.exports = router