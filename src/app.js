import Database from './database';


class Scooter extends Database{
  constructor(){
    super();
    this.createTable().
    addColumn('id', lf.Type.INTEGER).
    addColumn('first_name', lf.Type.STRING).
    addColumn('last_name', lf.Type.STRING).
    addPrimaryKey(['id'],true);
  }
}


var g = new Scooter();
g.put({
  'first_name':'raj',
  'last_name': 'kumar'
}).put({
  'first_name':'Raman',
  'last_name': 'kumar'
}).put({
  'first_name':'raj',
  'last_name': 'kumar'
}).put({
  'first_name':'raj',
  'last_name': 'kumar'
}).put({
  'first_name':'raj',
  'last_name': 'kumar'
}).put({
  'first_name':'raj',
  'last_name': 'kumar'
});
