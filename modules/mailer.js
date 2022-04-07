const sgMail = require('@sendgrid/mail');
const { sendgridApiKey, sendgridMailAccount } =
  require('../config/config').development;
sgMail.setApiKey(sendgridApiKey);

// to: 'test@example.com',
//   from: 'test@example.com', // Use the email address or domain you verified above
//   subject: ,
//   text:
//   html:

const createMessage = (to, subject, text, html) => {
  return {
    to,
    subject,
    text,
    html,
    from: sendgridMailAccount
  };
};
const mailer = async (mailTo) => {
  const mail = createMessage(
    mailTo,
    'Sending with Twilio SendGrid is Fun',
    'and easy to do anywhere, even with Node.js',
    '<strong>and easy to do anywhere, even with Node.js</strong>'
  );
  try {
    await sgMail.send(mail);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};
module.exports = { mailer, createMessage };
