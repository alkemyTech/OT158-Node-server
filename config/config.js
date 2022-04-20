require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    secretToken: process.env.SECRET_TOKEN,
    roleAdmin: process.env.ROLE_ADMIN,
    sendgridApiKey: process.env.SENDGRID_API_KEY,
    sendgridMailAccount: process.env.SENDGRID_MAIL_ACCOUNT
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    secretToken: process.env.SECRET_TOKEN,
    roleAdmin: process.env.ROLE_ADMIN,
    sendgridApiKey: process.env.SENDGRID_API_KEY,
    sendgridMailAccount: process.env.SENDGRID_MAIL_ACCOUNT
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    secretToken: process.env.SECRET_TOKEN,
    roleAdmin: process.env.ROLE_ADMIN,
    sendgridApiKey: process.env.SENDGRID_API_KEY,
    sendgridMailAccount: process.env.SENDGRID_MAIL_ACCOUNT
  }
};
