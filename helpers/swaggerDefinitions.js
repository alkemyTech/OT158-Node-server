const path = require('path');

const swaggerDefinitions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'OT158 NodeJs',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: [`${path.join(__dirname, '../docs/*.yaml')}`]
};

module.exports = { swaggerDefinitions };
