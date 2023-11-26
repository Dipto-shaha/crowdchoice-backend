const router = require('express').Router()
const createSurvey= require('../../api/Survey/serveyCreate')
const getSurvey =require('../../api/Survey/getSurvey')
const getSurveyById = require('../../api/Survey/getSurveyById')
const surveyUpdateStatus = require('../../api/Survey/updateServeyStaus')

router.post('/createSurvey',createSurvey)
router.get('/serveyList',getSurvey)
router.get('/serveyById/:id',getSurveyById)
router.patch('/serveyUpdateStatus',surveyUpdateStatus)
module.exports = router