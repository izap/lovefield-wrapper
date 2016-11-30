import Database from './database';

export default class Employee extends Database{
  constructor(){
    super();
    this.createTable().
    addColumn('id', lf.Type.INTEGER).
    addColumn('first_name', lf.Type.STRING).
    addColumn('last_name', lf.Type.STRING).
    addPrimaryKey(['id'],true);
  }
}
