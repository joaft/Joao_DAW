const mongoose = require('mongoose');

 const uri = ("mongodb://joao:1216joao1216@cluster0-shard-00-00.sefes.mongodb.net:27017,cluster0-shard-00-01.sefes.mongodb.net:27017,cluster0-shard-00-02.sefes.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-gq72kp-shard-0&authSource=admin&retryWrites=true&w=majority");

 mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose;