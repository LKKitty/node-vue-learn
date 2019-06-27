module.exports = app => {
  const mongoose = require("mongoose")
  // 连接MongoDB数据库
  //mongoose.connect('mongodb://数据库的ip地址:端口号/数据库名')；如果端口号默认是24017，则可以默认不写
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-learn', {
    useNewUrlParser:true
  })
  mongoose.connection.once("open",function() {
    console.log("数据库连接成功")
  })
  mongoose.connection.once("close",function() {
    console.log("数据库已经断开连接···")
  })
}