const router = require('express').Router()
const paymentIntent= require('../../api/Payment/payment')
const savepayment =require('../../api/Payment/savePayement')
const paymetnList = require('../../api/Payment/paymentHistory')
const verifyToken= require('../../middleWares/verifyToken');

router.post('/create-payment-intent', paymentIntent);
router.post('/payment',verifyToken,savepayment);
router.get('/paymentHistory',verifyToken,paymetnList)
module.exports = router