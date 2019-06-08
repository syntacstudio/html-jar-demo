"use strict"

/**
** This basic data 
** @note please dont modify :)
**/
import { App } from "./skeleton";
//Load  Controllers
use("bootstrap/autoloader/Controller");



(async ()=>{
	// Listening app server
	await App.listen(process.env.PORT, process.env.HOST)
	// callback console
	console.log(`Application listen on ${process.env.HOST}:${process.env.PORT}`)
})()


// use router 
use("routes/web.js");

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
