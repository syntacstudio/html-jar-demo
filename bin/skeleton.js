"use strict"

/**
** Setup configuration and Autoloader
** 
**/ 
const express  =  require("express");
const env =  require("dotenv").config();
const csrf = require('csurf');
const path  =  require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csrfProtection = csrf({ cookie: true });
const parseForm = bodyParser.urlencoded({ extended: false })
const App  =  express();
global.App  =  App;
App.use(cookieParser());
global.parseForm = parseForm;
global.csrfProtection =  csrfProtection;
// requiring 
require("../config/Skeleton");
// Use engine 
use("config/engine")
//
module.exports  = {
	App 
}