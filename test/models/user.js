const assert = require('assert')
const Memstore = require('../../store/memstore')
const UserModel = require('../../models/user')

const store = new Memstore()
const model = new UserModel(store)




describe('UserModel',function(){
  it('could get by Email',testEmail)
})



function testEmail(done){
  const testUser = {email:'tom@test.com',nickname:'Tom',password:'1234'}
  model.create(testUser,function(err){
    assert(!err)
    model.getByEmail('tom@test.com',function(err,user){
      assert(!err)
      assert.equal(user.email,testUser.email)
      assert.equal(user.nickname,testUser.nickname)
      assert.equal(user.password,testUser.password)
      done()
    })
    
  })
}




