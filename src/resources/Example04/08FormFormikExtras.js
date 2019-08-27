
import React from 'react';

import { Formik } from 'formik';

import getValidation from '../Example03/utils/get-validation';

import Input from '../Example03/components/Input';

const FormFormik = () => {
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
        submitForm,
        errors,
        handleReset,
      }) => (
        // had to change back to a regular <form>
        // component in order to provide our own custom
        // `onSubmit`
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            // The errors object is always present, so this works.
            // Keep in mind that your error checking will likely
            // need to be more robust than this.
            // Also, this is another example of something that could
            // probably be abstracted out to a different function,
            // thus keeping the code tidy.
            if (errors.student || errors.family) {
              alert('Please fix all errors before submitting this form.');
              return;
            }
            // note that we are bypassing the Formik
            // `handleSubmit` altogether, so here we manually
            // submit the form.
            submitForm();
          }}
        >
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
        </form>
      )}
    />
  );
};

export default FormFormik;