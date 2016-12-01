import lf from 'lovefield';

export default class Database {
  constructor(){
    if(window.giSchema){
      this.sBuilder= window.giSchema;
      return;
    }
    this.sBuilder = lf.schema.create('PriyaInHospital');
    window.giSchema=this.sBuilder;
  }

  getConnection(){
    if(window.giDbLink){
       return window.giDbLink
    }
    window.giDbLink = this.sBuilder.connect({'storeType':lf.schema.DataStoreType.INDEXED_DB});
    return window.giDbLink;
  }

  put(doc){
      this.getConnection().
      then(function(db){
        var table = db.getSchema().table(this.constructor.name);
        return db.insertOrReplace().into(table).values([table.createRow(doc)]).exec();
      }.bind(this));
      return this;
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
