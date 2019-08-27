
import React from 'react';

import getProp from 'lodash/get';

const Input = ({
  label,
  name,
  values,
  onChange,
  onBlur,
  getInputClassName,
  getInputHasErrors,
  getInputErrorText,
}) => (
  <p>
    <label>{label || '_NEEDS LABEL_'}&nbsp;</label>
    <input
      type="text"
      name={name}
      value={getProp(values, name) || ''}
      onChange={onChange}
      onBlur={onBlur}
      className={getInputClassName(name)}
    />
    {
      getInputHasErrors(name) ? (
        <span className="invalid-feedback d-block">
          {getInputErrorText(name)}
        </span>
      ) : null
    }
  </p>
);

export default Input;
