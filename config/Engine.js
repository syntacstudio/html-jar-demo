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

global.view  =  (path,param = "")=> {
	return edge.render(path,param)
}


// config to env 
edge.global("config",function(){
	return process.env;
}) 
