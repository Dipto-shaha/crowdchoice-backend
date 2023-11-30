const router = require('express').Router()
const createSurvey= require('../../api/Survey/serveyCreate')
const getSurvey =require('../../api/Survey/getSurvey')
const getSurveyById = require('../../api/Survey/getSurveyById')
const surveyUpdateStatus = require('../../api/Survey/updateServeyStaus')
const updateByServeyor = require('../../api/Survey/update')
const commentAdd = require('../../api/Survey/comentAdd')
const published = require('../../api/Survey/surveyPublished')
const feedback  = require('../../api/Survey/getSurveyfeadback')
const verifyToken= require('../../middleWares/verifyToken');

router.post('/createSurvey',createSurvey)
router.get('/serveyList', getSurvey)
router.get('/serveyById/:id',getSurveyById)
router.patch('/serveyUpdateStatus',verifyToken,surveyUpdateStatus)
router.patch('/serveyUpdate',updateByServeyor)
router.patch('/commentAdd',commentAdd)
router.patch('/publishedSurvey',published);
router.post('/surveyFeedback',feedback);
module.exports = router