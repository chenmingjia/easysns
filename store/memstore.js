function Memstore(){
  this.map = {}
}

module.exports = Memstore

Memstore.prototype.set = function(key,value,callback){
  this.map[key] = value
  setImmediate(function(){callback()})
}

Memstore.prototype.get = function(key,callback){
  var value = this.map[key]
  setImmediate(function(){callback(null,value)})
}

Memstore.prototype.del = function(key,callback){
  delete this.map[key]
  setImmediate(function(){callback()})
}

Memstore.prototype.incr = function(key,callback){
  var self = this
  setImmediate(function(){
    var value = self.map[key]
    if (value === undefined) {
      value = 0
    }
    var num = parseInt(value,10)
    if (Number.isNaN(num)) {
      callback(new Error('INCR:Wrong type of value'))
      return
    }
    self.map[key] = ++num
    callback(null,num)
  })
}