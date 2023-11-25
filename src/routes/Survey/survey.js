const router = require('express').Router()
const createSurvey= require('../../api/Survey/serveyCreate')
const getSurvey =require('../../api/Survey/getSurvey')
const getSurveyById = require('../../api/Survey/getSurveyById')


router.post('/createSurvey',createSurvey)
router.get('/serveyList',getSurvey)
router.get('/serveyById/:id',getSurveyById)

module.exports = router