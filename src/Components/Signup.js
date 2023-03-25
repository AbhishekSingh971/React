import React, { Component } from 'react'
import UserDetails from './Components/UserDetails';
// import Success from './Components/Success';
// import Confirmation from './Components/Confirmation';
// import PersonalDetails from './Components/PersonalDetails';

export default class Signup extends Component {
    state = {
        step: 1,
        email: '',
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        country: '',
        levelOfEducation: '',
    }

    // go back to previous step
prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // handle field change
handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { email, username, password, firstName, lastName, country, levelOfEducation } = this.state;
    const values = { email, username, password, firstName, lastName, country, levelOfEducation }

    switch(step){
        case 1: 
          return (
            <UserDetails 
            nextStep = {this.nextStep}
            handleChange={this.handleChange}
            values={values}/>
          )
        case 2: 
        return <h1>PesonalDetails</h1>;
        case 3: 
        return <h1>ConfirmDetails</h1>;
        case 4: 
        return <h1>Success</h1>;
        //   return (
        //     <PersonalDetails />
        //   )
        // case 3: 
        //   return (
        //     <Confirmation />
        //   )
        // case 4:
        //   return (
        //     <Success />
        //   )
        // // never forget the default case, otherwise VS code would be mad!
        // default: 
        //    // do nothing
      }
  }
}
