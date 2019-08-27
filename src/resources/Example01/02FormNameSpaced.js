
import React from 'react';

import getProp from 'lodash/get';
import setProp from 'lodash/set';
import cloneDeep from 'lodash/cloneDeep';

import '../../App.css';

class FormNameSpaced extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      values: {
        student: {},
        teacher: {},
      },
    };
  }

  _handleInputChange = (ev) => {
    const { values } = this.state;
    const val = getProp(ev, 'target.value');
    const name = getProp(ev, 'target.name');
    if (val === undefined || name === undefined) { return; }
    // note - now we need to clone the entire values object in order to update
    // fields of varying stateful objects
    const valuesNew = cloneDeep(values);
    // name is the path here
    setProp(valuesNew, name, val);
    this.setState({
      values: valuesNew,
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
        <p><strong>Student</strong></p>
        <p>
          <label>Name&nbsp;</label>
          <input
            type="text"
            name="student.name"
            value={getProp(values, 'student.name') || ''}
            onChange={this._handleInputChange}
          />
        </p>
        <p>
          <label>Age&nbsp;</label>
          <input
            type="text"
            name="student.age"
            value={getProp(values, 'student.age') || ''}
            onChange={this._handleInputChange}
          />
        </p>
        <p>
          <label>Concentration&nbsp;</label>
          <input
            type="text"
            name="student.concentration"
            value={getProp(values, 'student.concentration') || ''}
            onChange={this._handleInputChange}
          />
        </p>
        <p><strong>Teacher</strong></p>
        <p>
          <label>Name&nbsp;</label>
          <input
            type="text"
            name="teacher.name"
            value={getProp(values, 'teacher.name') || ''}
            onChange={this._handleInputChange}
          />
        </p>
        <p>
          <label>Age&nbsp;</label>
          <input
            type="text"
            name="teacher.age"
            value={getProp(values, 'teacher.age') || ''}
            onChange={this._handleInputChange}
          />
        </p>
        <p>
          <label>Years Teaching&nbsp;</label>
          <input
            type="text"
            name="teacher.yearsTeaching"
            value={getProp(values, 'teacher.yearsTeaching') || ''}
            onChange={this._handleInputChange}
          />
        </p>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default FormNameSpaced;
