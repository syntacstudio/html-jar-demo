const Route =  use("bin/router")


Route.Get("/",HomeController.index,{middleware:"Auth",name:"home"});

Route.Post("/hello",HomeController.store,{name:"store"});
