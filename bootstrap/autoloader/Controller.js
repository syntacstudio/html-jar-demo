"use strict"
const path  = require("path");
const recursiveReadSync = require('recursive-readdir-sync');

/**
** This file for load all controllers file and send to global data 
** @param String ,  object
** @func eval , recursive
** @target root/app/controller
**  
**/

/**
** @void Main
**/

const ControllerFiles  = recursiveReadSync(path.join(__dirname+"../../../app/controllers") );	
ControllerFiles.forEach((item)=>{
	try {
		let itemName  =  item.replace(path.join(__dirname,"../../app/controllers/"),"").replace(".js","");
		if (itemName != "Controller") {
			global[itemName] =  require(item);
			let obj = "new "+itemName+"() ";
			global[itemName] = eval( "new "+itemName+"() " );
		}
	}
	catch(err) {
		console.log(err)
	}
})
//console.log(global)

 HomeController.index()