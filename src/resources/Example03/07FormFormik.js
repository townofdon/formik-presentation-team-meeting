
import React from 'react';

import { Formik, Form } from 'formik';

import getValidation from './utils/get-validation';

import Input from './components/Input';

const FormFormik = () => {
  // !!!!!!!!!!!!!
  // !! GOTCHA: !!
  // !!!!!!!!!!!!!
  //
  // every single input
  // must be mapped to a property
  // in initialValues or its
  // error message won't show up
  // in pre-submission validation.
  // See: https://jaredpalmer.com/formik/docs/guides/form-submission#pre-submit
  const initialValues = {
    student: {
      name: '',
      age: '',
      concentration: '',
    },
    teacher: {
      name: '',
      age: '',
      numYearsTeaching: '',
    },
  };

  const onSubmit = (values, actions) => {
    console.table(values);
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={getValidation}
      onSubmit={onSubmit}
      render={({
        handleReset,
      }) => (
        <Form>
          <h3>Student</h3>
          <Input
            type="text"
            label="Name"
            name="student.name"
          />
          <Input
            type="text"
            label="Age"
            name="student.age"
          />
          <Input
            type="text"
            label="Concentration"
            name="student.concentration"
          />
          <h3>Teacher</h3>
          <Input
            type="text"
            label="Name"
            name="teacher.name"
          />
          <Input
            type="text"
            label="Age"
            name="teacher.age"
          />
          <Input
            type="text"
            label="Years Teaching"
            name="teacher.numYearsTeaching"
          />
          <div className="d-md-flex align-items-start">
            <button type="submit" className="btn btn-primary">Submit</button>
            &nbsp;
            <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset Form</button>
          </div>
        </Form>
      )}
    />
  );
};

export default FormFormik;