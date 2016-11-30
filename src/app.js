import Employee from './models/employee';
import Student from './models/student';

var g = new Student();
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
