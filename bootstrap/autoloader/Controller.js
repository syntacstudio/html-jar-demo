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


const ControllerFiles  = recursiveReadSync(base("/app/controllers"));	
ControllerFiles.forEach((item)=>{
	try {
		let itemName  =  item.replace(base("app/controllers/"),"").replace(".js","");
		if (itemName != "Controller") {
			global[itemName] =  require(item);
			global[itemName] = eval( "new "+itemName+"() " );
		}
	}
	catch(err) {
		console.log(err)
	}
})

//console.log(global)


/*
 function load(name) {
 	let file  =  name.split(".");
 	let readed = "";
 	if (file.length > 2) {
 		for (var i = 0; i < (file.length - 1); i++) {
 			readed += "/"+file[i]
 		}
 	} else {
 		readed = file[0];
 	}
 	global[file[(file.length - 2)]] = eval('use("app/controllers/'+readed+'")');
 	//delete global[file[(file.length - 2)]]
 	return  eval("new "+file[(file.length - 2)]+"()."+file[(file.length-1)]);
 }*/
