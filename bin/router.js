"use strict"
/**
** Creating expert router
**/
import { App as Route  } from "./skeleton";
import { Render  } from "./render";

use("app/kernel");
global["Routes"] =  {};
/**
** registering components
**/


/**
** Global creator
**/
/*
Route.post("/hello",parseForm, csrfProtection,function(req,res,next){
	return res.send("demo")
})*/


// Method get 
async function Get(route,controller,param=null) {
	// creatign global name
	try {
		global["Routes"][param["name"]] =  route;
	} catch(e) {}
	Route.get(route,csrfProtection, async function(req,res,next){
		async function _send() {
			return new Promise(async function(resolve,reject) {
				var render =   await Render(req,controller);
				Promise.resolve(res.send(render))
			})
			//return res.send("deni");
			return await res.send(Render(req,controller))
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
		return await _send();
	})
}
// Method post
async function Post(route,controller,param=null) {
	// creatign global name
	try {
		global["Routes"][param["name"]] =  route;
	} catch(e) {}
	Route.post(route, parseForm, csrfProtection,async function(req,res,next){
		async function _send() {
			return new Promise(async function(resolve,reject) {
				var render =   await Render(req,controller);
				Promise.resolve(res.send(render))
			})
			//return res.send("deni");
			return await res.send(Render(req,controller))
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
		return await _send();
	})
}
// Method put
async function Put(route,controller,param=null) {
	// creatign global name
	try {
		global["Routes"][param["name"]] =  route;
	} catch(e) {}
	Route.put(route, parseForm, csrfProtection,async function(req,res,next){
		async function _send() {
			return new Promise(async function(resolve,reject) {
				var render =   await Render(req,controller);
				Promise.resolve(res.send(render))
			})
			//return res.send("deni");
			return await res.send(Render(req,controller))
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
		return await _send();
	})
}
async function Delete(route,controller,param=null) {
	// creatign global name
	try {
		global["Routes"][param["name"]] =  route;
	} catch(e) {}
	Route.delete(route, parseForm, csrfProtection,async function(req,res,next){
		async function _send() {
			return new Promise(async function(resolve,reject) {
				var render =   await Render(req,controller);
				Promise.resolve(res.send(render))
			})
			//return res.send("deni");
			return await res.send(Render(req,controller))
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
		return await _send();
	})
}



module.exports  = {
	Get ,
	Post ,
	Put ,
	Delete
};