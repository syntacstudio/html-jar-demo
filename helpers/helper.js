// config to env 
edge.global("config",function(req =  false){
	return req ? process.env[req] : process.env ;
}) 
// csrftoken
edge.global("csrf",function() {
	return '<input type="hidden" name="_csrf" value="'+process.env.csrfToken+'">';
})
// Route
edge.global("route",function(req =  false) {
	return req ? Routes[req] : Routes ;
})