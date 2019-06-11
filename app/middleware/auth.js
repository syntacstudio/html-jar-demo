class auth {
	
	constructor() {
		this.auth  =  true;
	}
	
	run({req,res,next}) {
		return this.auth == true ? true : res.sendStatus(404) ; 
	}

	
}

module.exports = auth;
