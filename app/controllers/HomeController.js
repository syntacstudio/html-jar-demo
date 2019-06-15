"use strict"
/**
** Example controller
**/
const Controller  =  use("app/Controller")
const Paginate = use("/config/pagination").Paginate;
const CrudMaster = use("/config/crud");
const WelcomeMail  =  use("/app/mails/WelcomeMail");

const crud  = new CrudMaster("world");
crud.config();
(async ()=>{
	//console.log(await crud.all())
	//await crud.store([{"name":"ahmed"} , {"name":"jiko"} , {"name":"keiko"}])




	let lsm  =  await crud.all();
		///lsm  = 	lsm.where("name","ahmed")
		lsm  = lsm.whereMin("id",1)
				  .whereMax("id",4)
				  .where("name","ahmed") 
		//console.log(lsm)
	await crud.update("id",3,{
		"name" : "tofik"
	})

})()


class HomeController extends Controller {
	constructor() {
		super();
	}
	async index({req,res,next}) {
	 	///return res.redirect("bgst")
	 	//return next();
	 	let cake  =  await loadData("cake");
	 	    cake  =  await Paginate(cake,9,"cake",req);
		return view("index",{cake:cake})
	}
	// pagination
	async pagination({req,res,next}) {
	 	let cake  =  await loadData("cake");
	 	    cake  =  await Paginate(cake,9,"cake",req);
		return view("pagination",{cake:cake})
	}
	async store({req,res}) {
		///console.log(req.body)
		//return view("index");
		return res.redirect(Routes.home)
	} 
}

module.exports = HomeController;