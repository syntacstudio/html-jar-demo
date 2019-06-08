const Controller  =  use("app/Controllers/Controller")

class HomeController extends Controller {
	constructor() {
		super();
	}
	index() {
		console.log("demo")
	}
}

module.exports = HomeController;