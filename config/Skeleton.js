"use strict"
const path  = require("path");

/**
** This file for creating base global function
** @param string , directory
**/

//method
const config =  [
	{
		name : "use",
		function : (file)=> {
			file  =  file.replace(/.js|_/g,"")
			let _base  =  file.split(".");
			let _reseptor  = "";
			if (_base.length > 1) {
				for (var i = 0; i < _base.length; i++) {
					_reseptor += "/"+_base[i];
				}
			} else {
				_reseptor =  file;
			}
			try {
				return require(path.join(__dirname,"../"+_reseptor))
			} catch(err) {
				console.log(err);
				return null;
			}
		}
	} , {
		name : "base",
		function : (file = "")=> {
			return path.join(__dirname,"../"+file)
		}
	} , {
		name : "route",
		function: function(route) {
			return Routes[route] ? Routes[route] : null; 
		}
	}
]
// Creating global modifier
config.forEach((item)=>{
	global[item.name] =  item.function;
})




// String dir
const dirConfig = [
	{
		name:"skeleton",
		dir : base("bin/skeleton")
	}
]
// Creating global modifier
dirConfig.forEach((item)=>{
	global[item.name] =  item.dir;
})