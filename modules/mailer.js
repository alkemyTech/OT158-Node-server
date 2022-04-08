const sgMail = require('@sendgrid/mail');
const { sendgridApiKey, sendgridMailAccount } = require('../config/config').development;
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

const mailer = (message) => {
  return sgMail.send(message);
};
module.exports = { mailer, createMessage };
