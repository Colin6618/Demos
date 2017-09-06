var MongoClient = require('mongodb').MongoClient;
mongodb://admin:<PASSWORD>@freemongocluster-shard-00-00-lqg4s.mongodb.net:27017,freemongocluster-shard-00-01-lqg4s.mongodb.net:27017,freemongocluster-shard-00-02-lqg4s.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=FreeMongoCluster-shard-0&authSource=admin
var uri = `mongodb://root:Soft123,,,@freemongocluster-shard-00-02-lqg4s.mongodb.net:27017/admin`;
MongoClient.connect(uri, function(err, db) {
  console.log(err, db);
  db.close();
});

//mongodb://admin:<PASSWORD>@freemongocluster-shard-00-00-lqg4s.mongodb.net:27017,freemongocluster-shard-00-01-lqg4s.mongodb.net:27017,freemongocluster-shard-00-02-lqg4s.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=FreeMongoCluster-shard-0&authSource=admin
