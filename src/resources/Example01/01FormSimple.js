
import React from 'react';

import getProp from 'lodash/get';

import '../../App.css';

class FormSimple extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      values: {},
    };
  }

  _handleInputChange = (ev) => {
    const { values } = this.state;
    const val = getProp(ev, 'target.value');
    const name = getProp(ev, 'target.name');
    if (val === undefined || name === undefined) { return; }
    this.setState({
      // merge new values into old values
      // NOTE - THIS ONLY WORKS FOR FLAT (NOT NESTED) PROPERTIES
      values: {
        ...values,
        [name]: val,
      },
    });
  }

  _handleSubmit = (ev) => {
    ev.preventDefault();
    console.table(this.state.values);
  }

  render() {
    const { values } = this.state;
    return (
      <form
        onSubmit={this._handleSubmit}
      >
        <p>
          <label>Name&nbsp;</label>
          <input
            type="text"
            name="name"
            value={getProp(values, 'name') || ''}
            onChange={this._handleInputChange}
          />
        </p>
        <p>
          <label>Age&nbsp;</label>
          <input
            type="text"
            name="age"
            value={getProp(values, 'age') || ''}
            onChange={this._handleInputChange}
          />
        </p>
        <p>
          <label>Occupation&nbsp;</label>
          <input
            type="text"
            name="occupation"
            value={getProp(values, 'occupation') || ''}
            onChange={this._handleInputChange}
          />
        </p>
        <p>
          <label>Preferences&nbsp;</label>
          <input
            type="text"
            name="preferences"
            value={getProp(values, 'preferences') || ''}
            onChange={this._handleInputChange}
          />
        </p>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default FormSimple;
