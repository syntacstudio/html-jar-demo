const Route =  use("bin/router")


Route.Get("/",HomeController.index,{middleware:"Auth",name:"home"});	

Route.Get("/paginate",HomeController.pagination,{name:"paginate"});	

Route.Post("/hello",HomeController.store,{name:"store"});
