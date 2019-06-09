"use strict"

/**
** Setup configuration and Autoloader
** 
**/ 
const express  =  require("express");
const env =  require("dotenv").config();
const path  =  require("path");
const recursiveReadSync = require('recursive-readdir-sync');
const App  =  express();
global.App  =  App;
// requiring 
require("../config/Skeleton");
// Use engine 
use("config/engine")
//
module.exports  = {
	App 
}