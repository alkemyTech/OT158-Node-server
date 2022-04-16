const sgMail = require('@sendgrid/mail');
const { sendgridApiKey, sendgridMailAccount } = require('../config/config');
sgMail.setApiKey(sendgridApiKey);

const createMessage = (to, subject, text, html) => {
  return {
    to,
    subject,
    text,
    html,
    from: sendgridMailAccount
  };
};

const sendMail = (message) => {
  return sgMail.send(message);
};
module.exports = { sendMail, createMessage };
