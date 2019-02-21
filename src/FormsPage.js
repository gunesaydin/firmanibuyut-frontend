import React, { Component } from 'react';

import AllForms from './AllForms';
import FormDetail from './FormDetail';

import './FormsPage.css';


export default class FormsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forms: [
        {
          name: "John",
          surname: "Travolta",
          country: "America",
          business: "No"
        },
        {
          name: "Tim",
          surname: "Soret",
          country: "UK",
          business: "Yes"
        },
        {
          name: "Elon",
          surname: "Musk",
          country: "Mars",
          business: "Yes"
        }
      ]
    }
  }

  render() {

    return(
      <div className="forms-page-container">
        <AllForms forms={this.state.forms}/>
        <FormDetail />
      </div>
    );
  }

}