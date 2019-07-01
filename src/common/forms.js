import React, { Component } from 'react';
import Input from './input';
import './css/header.css';

class Forms extends Component {
  constructor(){
    super()
    this.state = {
      errorMessage: '',
      success: false,
      registeredUser: {}
    };
  }

  formSubmit = (submitInfo) => {
    console.log(this.state.success)
    console.log(submitInfo);
    if(submitInfo.error)
    {
      this.setState({errorMessage: submitInfo.error});
    }
    else
    {
      this.setState({success: true});
      this.setState({registeredUser: submitInfo});
    }
  }

  render() {
    if(this.state.success)
    {
      return (
        <div>
          <p>Thank you {this.state.registeredUser.firstName} {this.state.registeredUser.lastName}, you are now registered.</p>
          <p>More information has been emailed to: {this.state.registeredUser.email}</p>
        </div>
      );
    }
    else
    {
      return (
        <div>
          <h2>{this.state.errorMessage}</h2>
          <form className="forms">
            <Input inputsNeeded={this.props.formType} formSubmit={this.formSubmit}/>
          </form>
        </div>
      );
    }
  }
}

export default Forms;
