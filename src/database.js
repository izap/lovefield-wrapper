import lf from 'lovefield';

export default class Database {
  constructor(){
    this.sBuilder = lf.schema.create('izap');
  }

  getConnection(){
    this.sBuilder.connect().then(function(db) {
      this.db_ = db;
      return db;
    }.bind(this));
  }

  put(doc){
     this.getConnection().then(function(){
       var table = this.db_.getSchema().table(this.constructor.name);
       this.db_.insertOrReplace().into(table).values([table.createRow(doc)]).exec();
     }.bind(this));


  }

  createTable(){
    return this.sBuilder.createTable(this.constructor.name);
  }


    get(){

    }

    delete() {

    }

    update() {

    }
}



/*

var schemaBuilder = lf.schema.create('todo', 1);

schemaBuilder.createTable('Item').
   addColumn('id', lf.Type.INTEGER).
   addColumn('description', lf.Type.STRING).
   addColumn('deadline', lf.Type.DATE_TIME).
   addColumn('done', lf.Type.BOOLEAN).
   addPrimaryKey(['id']).
   addIndex('idxDeadline', ['deadline'], false, lf.Order.DESC);

var todoDb;
var item;
schemaBuilder.connect().then(function(db) {
 todoDb = db;
 item = db.getSchema().table('Item');
 var row = item.createRow({
   'id': 2,
   'description': 'A cup of coffee for you.',
   'deadline': new Date(),
   'done': false
 });

 return db.insertOrReplace().into(item).values([row]).exec();
}).then(function() {
 return todoDb.select().from(item).where(item.done.eq(false)).exec();
}).then(function(results) {
 results.forEach(function(row) {
   console.log(row['description'], 'before', row['deadline']);
 });
});*/
