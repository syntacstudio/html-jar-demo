"use strict"
/**
** Example controller
**/
const Controller  =  use("app/controllers/Controller")
const Paginate = use("/config/pagination").Paginate;
const CrudMaster = use("/config/crud");
const crud  = new CrudMaster("world");


class HomeController extends Controller {
	constructor() {
		super();
		crud.config();
	}
	// exampel view index
	async index({req,res,next}) {
	 	let data  =  await crud.all();
	 	    data  =  await Paginate(data,9,"page",req);
		return view("json-crud",{data:data})
	}
	// search
	async search({req,res}) {
		let data  =  await crud.all()
			data  =  data.whereLike("name",req.query.key);
		    data  =  await Paginate(data,9,"page",req);
		return view("json-crud",{data:data})

	}
	// example storing data 
	async create({req,res,next}) {
		return view("json-crud-create");
	}
	// example storing data 
	async store({req,res,next}) {
		await crud.store({
			"name":req.body.name,
			"age":req.body.age,
			"hoby":req.body.hoby
		});
		return res.redirect(route("json.crud"));
	}
	async edit({req,res}) {
		let temp =  await crud.all();
			temp =  temp.where("id",req.params.id)[0];
		return view("json-crud-edit",{"data":temp});
	}
	async update({req,res}) {
		await crud.update("id",req.body.id,{
			"name":req.body.name,
			"age":req.body.age,
			"hoby":req.body.hoby
		})
		return res.redirect(route("json.crud"));
	}
	// delete
	async delete({req,res}) {
		await crud.delete("id",req.params.id);
		return res.redirect(route("json.crud"));
	}
}

module.exports = HomeController;