
import React from 'react';

import getProp from 'lodash/get';
import setProp from 'lodash/set';
import cloneDeep from 'lodash/cloneDeep';
import isEqual from 'lodash/isEqual';

import '../../App.css';

class FormErrorHandlingMoBetter extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      values: {},
      errors: {},
      touched: {},
    };
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

  _validate = () => {
    const { values } = this.state;
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
    return (
      <form
        onSubmit={this._handleSubmit}
      >
        <h3>Student</h3>
        <p>
          <label>Name&nbsp;</label>
          <input
            type="text"
            name="student.name"
            value={getProp(values, 'student.name') || ''}
            onChange={this._handleInputChange}
            onBlur={this._handleInputBlur}
            className={this._getInputClassName('student.name')}
          />
          {
            this._getInputHasErrors('student.name') ? (
              <span className="invalid-feedback d-block">
                {this._getInputErrorText('student.name')}
              </span>
            ) : null
          }
        </p>
        <p>
          <label>Age&nbsp;</label>
          <input
            type="text"
            name="student.age"
            value={getProp(values, 'student.age') || ''}
            onChange={this._handleInputChange}
            onBlur={this._handleInputBlur}
            className={this._getInputClassName('student.age')}
          />
          {
            this._getInputHasErrors('student.age') ? (
              <span className="invalid-feedback d-block">
                {this._getInputErrorText('student.age')}
              </span>
            ) : null
          }
        </p>
        <p>
          <label>Concentration&nbsp;</label>
          <input
            type="text"
            name="student.concentration"
            value={getProp(values, 'student.concentration') || ''}
            onChange={this._handleInputChange}
            onBlur={this._handleInputBlur}
            className={this._getInputClassName('student.concentration')}
          />
          {
            this._getInputHasErrors('student.concentration') ? (
              <span className="invalid-feedback d-block">
                {this._getInputErrorText('student.concentration')}
              </span>
            ) : null
          }
        </p>
        <h3>Teacher</h3>
        <p>
          <label>Name&nbsp;</label>
          <input
            type="text"
            name="teacher.name"
            value={getProp(values, 'teacher.name') || ''}
            onChange={this._handleInputChange}
            onBlur={this._handleInputBlur}
            className={this._getInputClassName('teacher.name')}
          />
          {
            this._getInputHasErrors('teacher.name') ? (
              <span className="invalid-feedback d-block">
                {this._getInputErrorText('teacher.name')}
              </span>
            ) : null
          }
        </p>
        <p>
          <label>Age&nbsp;</label>
          <input
            type="text"
            name="teacher.age"
            value={getProp(values, 'teacher.age') || ''}
            onChange={this._handleInputChange}
            onBlur={this._handleInputBlur}
            className={this._getInputClassName('teacher.age')}
          />
          {
            this._getInputHasErrors('teacher.age') ? (
              <span className="invalid-feedback d-block">
                {this._getInputErrorText('teacher.age')}
              </span>
            ) : null
          }
        </p>
        <p>
          <label>Years Teaching&nbsp;</label>
          <input
            type="text"
            name="teacher.numYearsTeaching"
            value={getProp(values, 'teacher.numYearsTeaching') || ''}
            onChange={this._handleInputChange}
            onBlur={this._handleInputBlur}
            className={this._getInputClassName('teacher.numYearsTeaching')}
          />
          {
            this._getInputHasErrors('teacher.numYearsTeaching') ? (
              <span className="invalid-feedback d-block">
                {this._getInputErrorText('teacher.numYearsTeaching')}
              </span>
            ) : null
          }
        </p>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default FormErrorHandlingMoBetter;
