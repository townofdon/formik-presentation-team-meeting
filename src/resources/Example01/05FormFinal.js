
import React from 'react';

import getProp from 'lodash/get';
import setProp from 'lodash/set';
import cloneDeep from 'lodash/cloneDeep';
import isEqual from 'lodash/isEqual';

import getValidation from './utils/get-validation';

import Input from './components/Input';

import '../../App.css';

class FormFinal extends React.Component {
  constructor (props) {
    super(props);
    this.state = this._getInitialState();
  }

  componentDidUpdate(prevProps, prevState) {
    const { values, touched } = this.state;
    // we must determine if anything have changed (`values`
    // or `touched` state) before calling validate(), otherwise
    // this will result in an infinite loop.
    // see: https://reactjs.org/docs/react-component.html#componentdidupdate
    if (false
      || !isEqual(values, prevState.values)
      || !isEqual(touched, prevState.touched)
    ) {
      this._validate();
    }
  }

  _getInitialState = () => ({
    values: {},
    errors: {},
    touched: {},
  });

  _validate = () => {
    const { values } = this.state;
    // move validation into a separate file
    const errors = getValidation(values);
    this.setState({
      errors,
    });
  };

  _handleInputChange = (ev) => {
    const { values } = this.state;
    const val = getProp(ev, 'target.value');
    const name = getProp(ev, 'target.name');
    if (val === undefined || name === undefined) { return; }
    // fire validation action
    // note - now we need to clone the entire values object in order to update
    // fields of varying stateful objects
    const valuesNew = cloneDeep(values);
    // name is the path here
    setProp(valuesNew, name, val);
    this.setState({
      values: valuesNew,
    });
  }

  _handleInputBlur = (ev) => {
    const { touched } = this.state;
    const name = getProp(ev, 'target.name');
    if (name === undefined) { return; }
    const touchedNew = cloneDeep(touched);
    setProp(touchedNew, name, true);
    this.setState({
      touched: touchedNew,
    });
  }

  _handleSubmit = (ev) => {
    ev.preventDefault();
    const { errors } = this.state;
    const hasAnyErrors = errors && Object.keys(errors).length;
    if (hasAnyErrors) {
      alert('Please correct all errors before proceeding');
      return;
    }
    console.table(this.state.values);
  }

  _handleReset = (ev) => {
    ev.preventDefault();
    this.setState(this._getInitialState());
  };

  _getInputHasErrors = (name) => {
    const { errors, touched } = this.state;
    return getProp(touched, name) && getProp(errors, name);
  };

  /**
   * Given input name, get the input className (including
   * error state)
   */
  _getInputClassName = (name) => {
    const baseClassName = 'form-control';
    const { errors, touched } = this.state;
    if (!getProp(touched, name)) {
      return baseClassName;
    }
    if (getProp(errors, name)) {
      return `${baseClassName} is-invalid`;
    }
    // now we can return contextual classes
    // to show the user that the input they
    // just entered is valid
    return `${baseClassName} is-valid`;
  }

  /**
   * Given input name, get the relevant error message.
   */
  _getInputErrorText = (name) => {
    const { errors } = this.state;
    return getProp(errors, name) || '';
  };

  render() {
    const { values } = this.state;
    const inputProps = {
      values,
      onChange: this._handleInputChange,
      onBlur: this._handleInputBlur,
      getInputClassName: this._getInputClassName,
      getInputHasErrors: this._getInputHasErrors,
      getInputErrorText: this._getInputErrorText,
    };
    return (
      <form
        onSubmit={this._handleSubmit}
      >
        <h3>Student</h3>
        <Input
          label="Name"
          name="student.name"
          {...inputProps}
        />
        <Input
          label="Age"
          name="student.age"
          {...inputProps}
        />
        <Input
          label="Concentration"
          name="student.concentration"
          {...inputProps}
        />
        <h3>Teacher</h3>
        <Input
          label="Name"
          name="teacher.name"
          {...inputProps}
        />
        <Input
          label="Age"
          name="teacher.age"
          {...inputProps}
        />
        <Input
          label="Years Teaching"
          name="teacher.numYearsTeaching"
          {...inputProps}
        />
        <div className="d-md-flex align-items-start">
          <button className="btn btn-primary">Submit</button>
          &nbsp;
          <button className="btn btn-secondary" onClick={this._handleReset}>Reset Form</button>
        </div>
      </form>
    );
  }
}

export default FormFinal;
