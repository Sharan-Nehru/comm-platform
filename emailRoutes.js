const express = require('express');
const { sendEmail, getEmails } = require('../controllers/emailController');
const router = express.Router();

router.post('/send', sendEmail);
router.get('/history', getEmails);

module.exports = router;
