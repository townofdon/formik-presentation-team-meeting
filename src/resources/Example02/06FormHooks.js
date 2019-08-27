
import React, { useState, useCallback, useEffect } from 'react';

import getProp from 'lodash/get';
import setProp from 'lodash/set';
import cloneDeep from 'lodash/cloneDeep';

import getValidation from './utils/get-validation';

import Input from './components/Input';

const FormHooks = () => {
  const getInitialValues = () => ({
    student: {},
    teacher: {},
  });
  const [values, setValues] = useState(getInitialValues());
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = useCallback(() => {
    setErrors(getValidation(values));
  }, [values]);

  useEffect(() => {
    validate();
  }, [validate, values]);

  const handleInputChange = (ev) => {
    const val = getProp(ev, 'target.value');
    const name = getProp(ev, 'target.name');
    if (val === undefined || name === undefined) { return; }
    // fire validation action
    // note - now we need to clone the entire values object in order to update
    // fields of varying stateful objects
    const valuesNew = cloneDeep(values);
    setProp(valuesNew, name, val);
    setValues(valuesNew);
  };

  const handleInputBlur = (ev) => {
    const name = getProp(ev, 'target.name');
    const touchedNew = cloneDeep(touched);
    setProp(touchedNew, name, true);
    setTouched(touchedNew);
  };

  const handleSubmit = ev => {
    ev.preventDefault(ev);
    const hasAnyErrors = errors && Object.keys(errors).length;
    if (hasAnyErrors) {
      alert('Please correct all errors before proceeding');
      return;
    }
    console.table(values);
  }

  const handleReset = (ev) => {
    ev.preventDefault(ev);
    setValues(getInitialValues);
    setErrors({});
    setTouched({});
  };

  const getInputHasErrors = (name) => {
    return getProp(touched, name) && getProp(errors, name);
  };

  const getInputClassName = (name) => {
    const baseClassName = 'form-control';
    if (!getProp(touched, name)) {
      return baseClassName;
    }
    if (getProp(errors, name)) {
      return `${baseClassName} is-invalid`;
    }
    return `${baseClassName} is-valid`;
  }

  const getInputErrorText = (name) => {
    return getProp(errors, name) || '';
  };

  const inputProps = {
    values,
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    getInputClassName,
    getInputHasErrors,
    getInputErrorText,
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Student</h3>
      <Input
        type="text"
        label="Name"
        name="student.name"
        {...inputProps}
      />
      <Input
        type="text"
        label="Age"
        name="student.age"
        {...inputProps}
      />
      <Input
        type="text"
        label="Concentration"
        name="student.concentration"
        {...inputProps}
      />
      <h3>Teacher</h3>
      <Input
        type="text"
        label="Name"
        name="teacher.name"
        {...inputProps}
      />
      <Input
        type="text"
        label="Age"
        name="teacher.age"
        {...inputProps}
      />
      <Input
        type="text"
        label="Years Teaching"
        name="teacher.numYearsTeaching"
        {...inputProps}
      />
      <div className="d-md-flex align-items-start">
        <button className="btn btn-primary">Submit</button>
        &nbsp;
        <button className="btn btn-secondary" onClick={handleReset}>Reset Form</button>
      </div>
    </form>
  );
};

export default FormHooks;