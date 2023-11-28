const  {addVoter,getVoter }= require('../../api/Survey/voter')


const router = require('express').Router()
router.get('/voterget',getVoter)
router.post('/voterAdd',addVoter)
module.exports = router