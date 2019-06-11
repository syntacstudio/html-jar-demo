const path = require('path')
const edge = require('edge.js')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const parseForm = bodyParser.urlencoded({ extended: false })
const fs  = require("fs");
App.use(bodyParser.urlencoded({
  extended: true
}))
App.use(bodyParser.json());
App.use(cookieParser());


// register directory
edge.registerViews(base('resources/views/'))
global.edge =  edge;

// Requiring engine helpers
use("/helpers/helper");


// get file data
const getFile = async (file) => {
	
	///return await 
}

global.view  =  (path,param = "")=> {

	try {
		return edge.render(path,param);
	} catch (e) {
		throw e;
	}
}


