/**
** This for action to render  
**/
const Render =  function(request,controller) {
	process.env.csrfToken = request.csrfToken();
	return controller(request);
} 

module.exports = {
	Render 
}