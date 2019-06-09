"use strict"
const express  =  require("express");
var fs = require('fs')
var https = require('https')

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


// use router 
use("routes.web.js");
//Use public dir
App.use(express.static(base("public")));


// 404
App.use(function (req, res, next) {
  res.status(404).send(view("404"));
})
// 
App.use((err,req,res,next)=>{
	if (req.xhr) {
		return res.status(500).send({"status":"error","error":{"status":err.status,"name":err.name,"stack":err.stack}})
	}
	return res.status(500).send(view("components/errors.edge",{err:err}));
})
// bad csurf
App.use(function(err, req, res, next) {
    if (err.code !== 'EBADCSRFTOKEN') return next(err);
    res.status(403).json({"error": "session has expired or tampered with"});
});
