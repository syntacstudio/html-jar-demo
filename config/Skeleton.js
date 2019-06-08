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
			try {
				return require(path.join(__dirname,"../"+file))
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