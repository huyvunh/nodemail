var bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const { sendEmailService } = require('../app/router/mailrouting/emailService');

module.exports = function(app){

    // app.set('mailrouting',path.join(__dirname,'../../app/router/mailrouting'))

    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json());
};