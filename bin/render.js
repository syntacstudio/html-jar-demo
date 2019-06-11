/**
** This for action to render  
**/
const Render =  async function(req,res,next,controller) {
	//redirect("redirect")
	process.env.csrfToken = req.csrfToken();
	return  await controller({req:req,res:res,next:next});
} 

module.exports = {
	Render 
}