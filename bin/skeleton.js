"use strict"

/**
** Setup configuration and Autoloder
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
// creating base application
App.use(express.static(base("public")));

module.exports  = {
	App 
}