const Postmark = require('postmark');
const Email = require('../models/Email');

const client = new Postmark.ServerClient(process.env.POSTMARK_API_KEY);

exports.sendEmail = async (req, res) => {
  const { subject, body, to } = req.body;
  const userId = req.user.id;

  try {
    await client.sendEmail({
      From: process.env.FROM_EMAIL,
      To: to,
      Subject: subject,
      HtmlBody: body
    });

    const email = new Email({
      userId,
      subject,
      body,
      to
    });
    await email.save();

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error });
  }
};

exports.getEmails = async (req, res) => {
  const userId = req.user.id;

  try {
    const emails = await Email.find({ userId });
    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching emails', error });
  }
};
