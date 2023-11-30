const userCreate = require("../../api/user/user")
const createAuth = require('../../api/user/createAuthLocalStorage')
const getUserList =require('../../api/user/getUserList')
const updateRole = require("../../api/user/updateRole")
const getUserRole= require('../../api/user/getUserRole')
const savefeedback= require('../../api/user/userfeedback')
const getuserfeedbak =require('../../api/user/getuserFeedback')
const router = require('express').Router()
const verifyToken= require('../../middleWares/verifyToken');


router.post('/user',userCreate)
router.get('/userList',verifyToken,getUserList)
router.post('/jwt',createAuth)
router.patch('/updateRole',updateRole)
router.get('/getUserRole',getUserRole)
router.post('/savefeedback',savefeedback);
router.get('/userfeedback/:id',getuserfeedbak);
module.exports = router