const Route =  use("bin/router")


Route.get("/",HomeController.index,{middleware:"Auth",name:"home"});
Route.get("/hello",HomeController.index,{middleware:"Auth",name:"asston"});
