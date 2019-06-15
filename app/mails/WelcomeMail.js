"use strict"
/**
** Example mailer class
** @param mails
**/

const Mailer  = use("/config/mailer");
const Mail  =  new Mailer();

class WelcomeMail {
	constructor(data) {
		this.data = data;
	}
	// configuration
	to(to) {
		Mail.To(to);
	}
	from(from) {
		Mail.From(from);
	}
	subject(subject) {
		Mail.Subject(subject);
	} 
	text(text) {
		Mail.Text(text);
	}
	/// end config
	// rendering template
	async render() {
		// set template default
		let temp = await view("/emails/welcome",this.data);
		// set template to mail
		Mail.Template(temp);
	}
	async send() {
		await this.render();
		// sending mail
		Mail.Send();
	}

}

module.exports = WelcomeMail;