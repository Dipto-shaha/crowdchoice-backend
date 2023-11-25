const userCreate = require("../../api/user/user")
const createAuth = require('../../api/user/createAuthLocalStorage')
const getUserList =require('../../api/user/getUserList')
const updateRole = require("../../api/user/updateRole")
const getUserRole= require('../../api/user/getUserRole')
const router = require('express').Router()


router.post('/user',userCreate)
router.get('/userList',getUserList)
router.post('/jwt',createAuth)
router.patch('/updateRole',updateRole)
router.get('/getUserRole',getUserRole)
module.exports = router