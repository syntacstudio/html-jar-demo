"use strict"
/**
** Creating expert router
**/
import { App as Route  } from "./skeleton";
use("app/kernel");
global["Routes"] =  {};
/**
** registering components
**/


/**
** Global creator
**/


async function get(route,controller,param=null) {
	// creatign global name
	if (param["name"]) {
		global["Routes"][param["name"]] =  route;
	}
	Route.get(route,function(req,res,next){
		function _send() {
			return res.send(controller(req,res,next))
		}
		if (param) {
			if (param["middleware"]) {
				try {
					if (typeof param.middleware == 'object' ) {
						for (var i = 0; i <  param.middleware.length; i++) {
							return middleware[param.middleware[i]].run(req,response,next) === true ? _send() : false;		
						}
					}
					else {
						return middleware[param.middleware].run(req,res,next) === true ? _send() : false;
					}
				} catch (e) {
					throw e;
				}
			}
		}
		return next();
	})
}



module.exports  = {
	get
};