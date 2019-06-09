class Auth {
	
	constructor() {
		this.auth  =  true;
	}
	
	run(req,res,next) {

		return this.auth == true ? true : res.sendStatus(404,"cant access this page") ; 
	}

	
}

module.exports = Auth;