/**
** This for action to render  
**/
const Render =  async function(request,controller) {
	process.env.csrfToken = request.csrfToken();
	return  await controller(request);
} 

module.exports = {
	Render 
}