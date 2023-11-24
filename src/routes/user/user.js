const userCreate = require("../../api/user/user")

const router = require('express').Router()


router.post('/user',userCreate)
module.exports = router