const Controller  =  use("app/Controllers/Controller")

class HomeController extends Controller {
	constructor() {
		super();
	}
	index(req,res) {
		console.log(route("home"))
		return view("index")
	}
}

module.exports = HomeController;