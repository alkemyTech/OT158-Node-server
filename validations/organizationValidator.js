const {
  check,
  body
} = require('express-validator');

const updateForm = [

  body('name')
  .custom(value => (value || value == "") ? (value.match(/^[A-Za-z ]+$/)) : true),

  body('image')
  .custom(value => (value || value == "") ? value.length > 3 : true),

  body('address')
  .custom(value => (value || value == "") ? value.match(/^[A-Za-z 0-9]+$/) : true),

  body('phone')
  .custom(value => (value || value == "") ? value.match(/^[- 0-9]+$/) : true),

  body('email')
  .custom(value => (value || value == "") ? value.match(/^[a-zA-Z0-9.&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) : true),

  body('welcomeText')
  .custom(value => (value || value == "") ? value.match(/^[A-Za-z 0-9]+$/) : true),

  body('aboutUsText')
  .custom(value => (value || value == "") ? value.match(/^[A-Za-z 0-9]+$/) : true),

]

module.exports = {
  updateForm,
}
