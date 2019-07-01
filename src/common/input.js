import React, { Component } from 'react';
import './css/forms.css';

class Input extends Component {
  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
      npiNum: '',
      businessAddress: '',
      telephone: '',
      email: '',
      emptyInputError: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getInputs = (inputsNeeded) => {
    let inputs;

    switch(inputsNeeded)
    {
      case "registration":
        inputs = {
            numberOfFields: 6,
            fieldNames:[
              "firstName",
              "lastName",
              "npiNum",
              "businessAddress",
              "telephone",
              "email"
            ],
            fieldLabels:[
              "First Name",
              "Last Name",
              "NPI Number",
              "Business Address",
              "Telephone Number",
              "Email"
            ]
        };
        break;
      default:
        inputs = {
            numberOfFields: 1,
            fieldNames:[
              "None"
            ],
            fieldLabels:[
              "First Name"
            ]
        };
        break;
    }

    return inputs;
  }

  handleClick(e) {
    let regDigits = /^\d+$/;
    let regLetters = /^[A-Za-z]+$/;
    let values = {}
    let errors = {}

    if(this.state.firstName && this.state.lastName && this.state.npiNum && this.state.businessAddress && this.state.telephone && this.state.email)
    {
      if(regDigits.test(this.state.npiNum))
      {
        if(regDigits.test(this.state.telephone) && this.state.telephone.length === 10)
        {
           if(regLetters.test(this.state.firstName) &&  regLetters.test(this.state.lastName) )
           {
             if(this.state.email.indexOf('@') !== -1 && this.state.email.indexOf('.com') !== -1)
             {
               values.npiNum = this.state.npiNum
               values.businessAddress = this.state.businessAddress
               values.telephone = this.state.telephone
               values.email = this.state.email
               values.firstName = this.state.firstName
               values.lastName = this.state.lastName
               this.props.formSubmit(values);
             }
             else
             {
               errors.error = "Please provide and vailded formated email ex: email@email.com"
               this.props.formSubmit(errors);
             }
           }
           else
           {
             errors.error = "First and last names only contain letters"
             this.props.formSubmit(errors);
           }
        }
        else
        {
          errors.error = "Telephone numbers must be all numbers and be 10 digits"
          this.props.formSubmit(errors);
        }
      }
      else
      {
        errors.error = "NPI Number must be numbers only "
        this.props.formSubmit(errors);
      }
    }
    else
    {
        errors.error = "All fields are required for registration."
        this.props.formSubmit(errors);
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  buildInputs = (inputsNeeded) => {
    let buildType = this.getInputs(inputsNeeded);
    let input = [];

    for(let i = 0; buildType.numberOfFields > i; i++)
    {
      input.push(
        <input type="text" onChange={this.handleChange} name={buildType.fieldNames[i]} placeholder={buildType.fieldLabels[i]} key={i}/>
      );
      input.push(<br key={buildType.fieldLabels[i]}></br>);
    }

    return input;
  }

  render() {
    let input = this.buildInputs(this.props.inputsNeeded);
    return (
      <React.Fragment>
        {input}
        <button type="button" onClick={this.handleClick}>Sign Up</button>
      </React.Fragment>
    );
  }
}

export default Input;
