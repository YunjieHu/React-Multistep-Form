import React, { Component } from 'react';
import'./Form.css';
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'
import { isEmptyObject } from '../Helper/helper'

 export const TOTAL_STEPS = 3;

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
              username: null,
              password: null,
              fname: null,
              lname: null,
              birthday: null,
            },
            errors: {},
            currentStep: 1,
        };
    }

    next = () =>{
        if (this.state.currentStep !== TOTAL_STEPS  && this.state.currentStep > 0){
            if (this.state.errors === {} || isEmptyObject(this.state.errors))
            this.setState( prevState =>{
                return { currentStep:prevState.currentStep+1 }
            })
        }
    }

    prev = () =>{
        if (this.state.currentStep > 1){
            if (this.state.errors === {} || isEmptyObject(this.state.errors))
            this.setState( prevState =>{
                return { currentStep:prevState.currentStep-1 }
            })
        }
    }

    submit = (event) =>{
        //final error checking here;
        event.preventDefault();
        const { username, password, fname, lname, birthday } = this.state.user;
        alert(`Submitted: \n 
        username: ${username}\n
        password: ${password}\n
        first name: ${fname}\n
        last name: ${lname}\n
        birthday: ${birthday}
        `);
    }


    handleChange = (target, val) => {
        const { user } = this.state;
        user[target] = val;
        this.setState({ user});
    };

    handleErrors = (target, err) =>{
        const { errors } = this.state;
        errors[target] = err;
        this.setState({errors});
    }

    render(){
        const { currentStep, user, errors }=this.state;
        return(
        <div className="container" >
            <div className="Form">
            <h1 className="Head">Register</h1>
            <Step1 
            step = {currentStep}
            user = {user} 
            errors ={errors}
            onChange = {this.handleChange}
            onError = {this.handleErrors}
            />
            <Step2 
            step = {currentStep}
            user = {user} 
            errors ={errors}
            onChange = {this.handleChange}
            onError = {this.handleErrors}
            />
            <Step3 
            step = {currentStep}
            user = {user} 
            errors ={errors}
            onChange = {this.handleChange}
            onError = {this.handleErrors}
            />
            <div className="btn-container">
               {currentStep !== 1 ? <button className="btn" onClick={this.prev}> Prev </button> : null }
               {currentStep !== TOTAL_STEPS ?  <button className="btn" onClick={this.next}> Next </button>: <button className="btn" onClick={this.submit}> Submit </button> }
            </div>
            </div>
        </div>
        );
    }
}

export default Form;
