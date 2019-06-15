"use strict"
/**
** Example controller
**/
const Controller  =  use("app/Controller");
const WelcomeMail =  use("app/mails/Welcomemail");
const Mail  =  new WelcomeMail();
//const demo  = .to("de,p")

class MailController extends Controller {
	constructor() {
		super();
	}
	async index() {
		return await view("mail");
	}
	async send({req,res}) { 
		Mail.to(req.body.to)
		Mail.from(req.body.from)
		Mail.subject(req.body.subject)
		await Mail.send();
		console.log("mail sended :)")
		return res.redirect("/mail");
	}
	 
}

module.exports = MailController;