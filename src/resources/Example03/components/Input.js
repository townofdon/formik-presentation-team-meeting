
import React from 'react';

import { Field, ErrorMessage } from 'formik';

import {
  getInputClassName,
} from '../utils';

/**
 * Input component using Formik <Field> component 
 * under da hood
 *
 * NOTE: could also use the `withFormik` Higher-Order-Component (HOC)
 * to get the needed props - would probably be cleaner than the
 * nested render props below.
 */
const Input = ({
  type,
  label,
  name,
  defaultValue,
}) => (
  <Field
    name={name}
    render={({
      field,
      form,
    }) => (
      <p>
        {label ? (
          <label>{label || '_NEEDS LABEL_'}&nbsp;</label>
        ) : null}
        <input
          type={type}
          className={getInputClassName(form.errors, form.touched)(name)}
          disabled={form.isSubmitting}
          {...field}
          // needed to override the default value in order to prevent the
          // `warning: changing uncontrolled input to be controlled` msg
          value={field.value || defaultValue || ''}
        />
        <ErrorMessage
          name={name}
          render={(err) => (
            <span className="invalid-feedback d-block">
              {err}
            </span>
          )}
        />
      </p>
    )}
  />
);

Input.defaultProps = {
  type: 'text',
};

export default Input;
