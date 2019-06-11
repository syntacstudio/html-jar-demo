const Controller  =  use("app/Controllers/Controller")
const Paginate = use("/config/pagination").Paginate;

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