import React, { Component } from 'react';

import './AllForms.css';
import FormsPage from './FormsPage';

export default class AllForms extends Component {

  render() {

    const allForms = this.props.forms.map(form => (
        <div className="form-card">
          <p>{form.name} {form.surname}</p>
          <p><span>Country: </span>{form.country}</p>
          <p><span>Business: </span>{form.business}</p>
        </div>
    ))

    return(
      <div className="forms-list-container">
        {allForms}
      </div>
    );
  }

}