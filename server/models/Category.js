const mongoose = require("mongoose")
const schema = new mongoose.Schema({
  name:{
    type:String,
  },
  parent:{
    type:mongoose.SchemaTypes.ObjectId,//表示是数据库自动生成的Id
    ref:'Category'//表示关联的模型是Category
  }
})
module.exports = mongoose.model('Category',schema)