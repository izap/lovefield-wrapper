import Database from './database';

class Student extends Database{
  constructor(){
    super();
    this.createTable().
    addColumn('id', lf.Type.INTEGER).
    addColumn('first_name', lf.Type.STRING).
    addColumn('last_name', lf.Type.STRING).
    addPrimaryKey(['id']);
  }
}
/*
class Employee extends Database{
  constructor(){
    super();
    this.createTable().
    addColumn('id', lf.Type.INTEGER).
    addColumn('first_name', lf.Type.STRING).
    addColumn('last_name', lf.Type.STRING).
    addPrimaryKey(['id']);
  }
}*/

var e = new Student();

e.put({
  'id': 77,
  'first_name': "Raman",
  'last_name': "Kumar"
});

e.put({
  'id': 78,
  'first_name': "Raman",
  'last_name': "Kumar"
});
