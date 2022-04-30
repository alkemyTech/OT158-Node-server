const { body } = require('express-validator');
const {Categories} = require('../models');

const updateForm = [

    body('name')
    .custom( value => (value || value == "")? value.match(/^[A-Za-z ]+$/) : true),
    
    body('image')
    .custom( value => (value || value == "")? value.length>3 : true),
    
    body('categoryId')
    .custom( value => {
        if(value || value == ""){
            return Categories.findByPk(+value)
            .then(result => {
                if(result == null) return Promise.reject();
            })
            .catch(error => Promise.reject());
        }
        
        return true;
    }),
    
    body('type')
    .custom( value => (value || value == "")? value.match(/^[A-Za-z]+$/) : true),

]

module.exports = {
    updateForm,
}