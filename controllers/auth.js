const qs = require('querystring')
const parseBody = require('../utils/parseBody')
const send = require('../utils/send')

exports.login = function(req,res){
   
   parseBody(req,function(err,body){
      if(err){
          send.sendError(err,res)
      }

   	  send.redirect('/',res)
   })

}

exports.register = function(req,res){

   parseBody(req,function(err,body){
        var user = {
    		email:body.email,
    		password:body.password,
    		nickname:body.nickname
    	}

   	    send.redirect('/',res)
   })
     
}