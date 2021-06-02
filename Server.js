const lib = require("./lib-frameworkless.js")
require('http').createServer(server).listen(7777)

function server(req, res) {
	ROUTE_REDIRECT = {
		// req.url     : target's parent directory
		'/favicon.ico' : './Public/Comp/',
	}


	lib.Init({
		'res' : res,
		'req' : req,
		'viewdir' : './Public',
		'compdir' : './Public/Comp',
	})
	
	//lib.Init(res, req, viewdir='./Public', compdir='./Public/Comp')
	lib.Route(req, res)
}
