## mongo 的交互语句
- show dbs;
- use tutorial; db中没有，会自动创建一个tutorial数据库
- mysql 要建表
  mongodb直接用
- db.users.insert({name:'huyi'})
  直接会自动创建一个users集合，并插入一条name属性，值为huyi
- mysql中成为表  mongodb中称为集合
- show collections
  显示当前数据库下有哪几个集合
- drops()删除表
- db.users.find()
  对users集合进行查询，可在括号中加入约束
  如，db.users.find({"name":'huyi'}) 查找name为huyi的信息
  后在加上.pretty() 能是展示更美观整齐
- db.courseRecord.findOne({"_id":ObjectId(".............")});
  针对_id进行查询，ObjectId是唯一的
- db.users.find({
    $and:[
          {_id: ObjectId("..........")},
          {name: 'huyi'}
    ]
  });
  多条件查询
- update()
  更新
  db.users.update(
    {username: 'smith'},
    {$set:{country: "Canda"}}
  );
  为username为simth的用户添加一个country属性并将其值设为Canda
- 索引
  mysql 关系型数据库、mongodb NoSQL都有学习，mongodb对js特别友好
  ，json存在就可以
  索引的学习
  创建num 20000条json num:i
  查找 num:500
  - for(i = 0; i < 20000; i++) { db.numbers.save({ num:i })}
    - db.numbers.count(); 
      返回20000
    - db.numbers.find({num:500});
      查询num为500 的各个属性
    - db.numbers.find({num:500}).explain("executionStats");
      出现一个分析文件，执行db.numbers.find({num:500})的各个属性
      其中docsExamined属性为20000
      executionTimeMillisEstimate 为 14ms左右 会花上一段时间
    - db.numbers.createIndex({num:1});
      对num创建唯一的索引
      发现其中的docsExamined变为了1
      executionTimeMillisEstimate 为 0，基本不花时间
