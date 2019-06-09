const path = require('path')
const edge = require('edge.js')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const parseForm = bodyParser.urlencoded({ extended: false })
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


global.view  =  (path,param = "")=> {
	return edge.render(path,param)
}


