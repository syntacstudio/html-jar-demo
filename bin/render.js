/**
** This for action to render  
**/
const Render =  async function(req,res,next,controller) {
	//redirect("redirect")
	process.env.csrfToken = req.csrfToken();
	try {
		return  await controller({req:req,res:res,next:next});
	} catch(e) {
		let err = new Error(e);
			err.stack = e.stack; 
			err.name  =  e.message
			err.status = err.status ? err.status : "Not defined" 
		return view("components/errors",{err:err})
	}
} 

module.exports = {
	Render 
}