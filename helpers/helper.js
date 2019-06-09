// config to env 
edge.global("config",function(){
	return process.env;
}) 
// csrftoken
edge.global("csrf",function() {
	return '<input type="hidden" name="_csrf" value="'+process.env.csrfToken+'">';
})
