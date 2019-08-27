
import getProp from 'lodash/get';
import setProp from 'lodash/set';

export default function getValidation(values) {
  const errors = {};
  // custom validators
  if ((getProp(values, 'student.name') || '').toLowerCase() === 'bob') {
    setProp(errors, 'student.name', 'No "Bob"s allowed');
  }
  if ((parseInt(getProp(values, 'student.age'), 10) || 0) < 18) {
    setProp(errors, 'student.age', 'Must be an adult');
  }
  if ((getProp(values, 'student.concentration') || '').toLowerCase() === 'french') {
    setProp(errors, 'student.concentration', 'French is dumb');
  }
  if (!parseInt(getProp(values, 'teacher.age'), 10)) {
    setProp(errors, 'teacher.age', 'Must be a number');
  }
  if ((parseInt(getProp(values, 'teacher.numYearsTeaching'), 10) || 0) < 5) {
    setProp(errors, 'teacher.numYearsTeaching', 'Must have at least 5 yrs experience');
  }
  // assert presence (input is filled in)
  if (!getProp(values, 'student.name')) {
    setProp(errors, 'student.name', 'Required');
  }
  if (!getProp(values, 'student.age')) {
    setProp(errors, 'student.age', 'Required');
  }
  if (!getProp(values, 'student.concentration')) {
    setProp(errors, 'student.concentration', 'Required');
  }
  if (!getProp(values, 'teacher.name')) {
    setProp(errors, 'teacher.name', 'Required');
  }
  if (!getProp(values, 'teacher.age')) {
    setProp(errors, 'teacher.age', 'Required');
  }
  if (!getProp(values, 'teacher.numYearsTeaching')) {
    setProp(errors, 'teacher.numYearsTeaching', 'Required');
  }
  return errors;
}
