'use strict'

const express = require('express')
const users = require('../models/users')
const modules = require('../modules/index')

function signUp (req, res) {
    const users = new users({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })

    users.save((er) => {
        if (er) res.status(500).send({ message: 'Errors when creating the user: ${er}'})
    
        return res.status(200).send({ token, serviceToken(users) })
    })    
}


function singIn (req, res) {

}

module.exports = {
    signup,

};

