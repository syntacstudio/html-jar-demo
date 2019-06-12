const Route =  use("bin/router")


Route.Get("/",HomeController.index,{middleware:"Auth",name:"home"});	

Route.Get("/paginate",HomeController.pagination,{name:"paginate"});	

Route.Post("/hello",HomeController.store,{name:"store"});


/// json crud router 

Route.Get("/jsoncrud",JsonCrudController.index,{name:"json.crud"});	
Route.Get("/jsoncrud/search",JsonCrudController.search,{name:"json.crud.search"});	
Route.Get("/jsoncrud/create",JsonCrudController.create,{name:"json.crud.create"});	
Route.Post("/jsoncrud/store",JsonCrudController.store,{name:"json.crud.store"});
Route.Get("/jsoncrud/edit/:id",JsonCrudController.edit,{name:"json.crud.edit"});	
Route.Post("/jsoncrud/update",JsonCrudController.update,{name:"json.crud.update"});
Route.Get("/jsoncrud/delete/:id",JsonCrudController.delete,{name:"json.crud.delete"});
