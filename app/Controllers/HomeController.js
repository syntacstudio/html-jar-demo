const Controller  =  use("app/Controllers/Controller")

class HomeController extends Controller {
	constructor() {
		super();
	}
	 async index(req) {
		return view("index")
	}
	async store(req) {
		console.log(req.body)
		return view("index");
	} 
}

module.exports = HomeController;