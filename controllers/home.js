
const joinPath = require('path').join
const viewPath = joinPath(__dirname,'../views')
const sendFile = require('../utils/send').sendFile

module.exports = function(req,res){
    

    var isLogin = false
    var view = isLogin ? 'home.html' : 'welcome.html'
    sendFile(joinPath(viewPath,view),res)

}