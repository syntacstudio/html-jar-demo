"use strict"
/**
** Example controller
**/
const Controller  =  use("app/Controller");
const WelcomeMail =  use("app/mails/WelcomeMail");

class MailController extends Controller {
	constructor() {
		super();
	}
	index() {
		return view("mail");
	}
	async send({req,res}) { 
		const Mail  =  new WelcomeMail();
		Mail.to(req.body.to)
		Mail.from(req.body.from)
		Mail.subject(req.body.subject)
		await Mail.send();
		console.log("mail sended :)")
		return res.redirect("/mail");
	}
	 
}

module.exports = MailController;