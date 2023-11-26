const router = require('express').Router()
const paymentIntent= require('../../api/Payment/payment')
const savepayment =require('../../api/Payment/savePayement')
const paymetnList = require('../../api/Payment/paymentHistory')

router.post('/create-payment-intent', paymentIntent);
router.post('/payment',savepayment);
router.get('/paymentHistory',paymetnList)
module.exports = router