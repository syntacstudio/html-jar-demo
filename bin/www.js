"use strict"
const express  =  require("express");
const fs = require('fs')
const moment = require('moment');
const https = require('https')

/**
** This basic data 
** @note please dont modify :)
**/
import { App } from "./skeleton";
//Load  Controllers
use("bootstrap/autoloader/Controller");



(async ()=>{
	// Listening app server
	if (process.env.SSL == "true") {
		https.createServer({
			key :fs.readFileSync(base("/ssl/server.key"),"utf8"),
			cert : fs.readFileSync(base("/ssl/server.cert","utf8"))
		},App).listen(process.env.PORT, process.env.HOST,function() {
			console.log(`Application listen on Https://${process.env.HOST}:${process.env.PORT}`)
		})
	} else {
		await App.listen(process.env.PORT, process.env.HOST , function() {
			console.log(`Application listen on Http://${process.env.HOST}:${process.env.PORT}`)
		})
	}
})()

// create logging 
if (process.env.LOGGING == "true") {
	App.use("/",function(req,res,next) {
		console.log(`[${moment().format("dddd MMMM HH:mm:ss  YYYY")}] ${(process.env.ssl=="true"?"Https://":"Http://")+process.env.HOST+":"+process.env.PORT} [${res.statusCode}] : ${req.url}` )
		return next();
	})
}

App.use((err,req,res,next)=>{
	if (req.xhr) {
		return res.send({"status":"error","error":{"status":err.status,"name":err.name,"stack":err.stack}})
	}
	return res.send(view("components/errors.edge",{err:err}));
})

// use router 
use("routes.web.js");
//Use public dir
App.use(express.static(base("public")));
// 404
App.use(function (req, res, next) {
  res.status(404).send(view("404"));
})
// bad csurf
App.use((err, req, res, next)=> {
    if (err.code !== 'EBADCSRFTOKEN') return next(err);
    res.status(403).json({"error": "session has expired or tampered with"});
});
