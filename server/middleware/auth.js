module.exports = options =>{
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../models/AdminUser')
  const assert = require('http-assert')
  return async (req,res,next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    console.log(token)
    const {id} = jwt.verify(token,req.app.get('secret'))
    assert( id,401,'id不正确 ')
    req.user = await AdminUser.findById(id)
    assert( req.user,401,'密码不正确')
    await next()
  }
}