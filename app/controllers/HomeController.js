"use strict"
/**
** Example controller
**/
const Controller  =  use("app/Controller")
const Paginate = use("/config/pagination").Paginate;
const CrudMaster = use("/config/crud");

class HomeController extends Controller {
	constructor() {
		super();
	}
	// index
	async index({req,res,next}) {
	 	let cake  =  await loadData("cake");
	 	    cake  =  await Paginate(cake,9,"cake",req);
		return view("index");
	}	
}

module.exports = HomeController;