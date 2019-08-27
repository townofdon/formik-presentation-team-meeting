
import getProp from 'lodash/get';

const getInputClassName = (errors, touched) => (name) => {
  const baseClassName = 'form-control';
  if (!getProp(touched, name)) {
    return baseClassName;
  }
  if (getProp(errors, name)) {
    return `${baseClassName} is-invalid`;
  }
  return `${baseClassName} is-valid`;
}

export default getInputClassName;
