import React from 'react';
import FormInput from '../TextInput'
import '../TextInput.css'


class Step1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            errors:this.props.errors
        }
    }


    handleChange = event => {
        const result = event.target.value;
        switch (event.target.name){
            case 'username':
                const usernametest = /^[\w]{0,11}$/;
                const usernameError = 'Username must not be longer than 11 characters'
                if (!result.match(usernametest)){
                    this.setState({errors: {...this.state.errors, [event.target.name]: usernameError}})
                    this.props.onError(event.target.name, usernameError);
                }
                else{
                    this.setState({errors: {...this.state.errors, [event.target.name]: null }})
                    this.props.onError(event.target.name, '');
                }
                break;
            case 'password':
                const passwordtest = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                const passError = 'Password does not match the required format: \n Minimum eight characters, at least one letter and one number'
                if (!result.match(passwordtest)){
                    this.setState({errors: {...this.state.errors, [event.target.name]: passError}})
                    this.props.onError(event.target.name, passError);
                }
                else{
                    this.setState({errors: {...this.state.errors, [event.target.name]: null }})
                    this.props.onError(event.target.name, '');
                }
                break;
            default:
                const error = 'unexpected error: invalid input name';
                this.setState({errors: {...this.state.errors, [event.target.name]: error }})
                this.props.onError(event.target.name, error);
        }
        this.props.onChange(event.target.name, event.target.value)
    };

    render(){
        const { errors } = this.state;
        const { user:{username, password} } = this.props;
        if (this.props.step !== 1){
            return null;
        }
        return(
            <>
                <FormInput
                label="Username"
                name="username"
                type="text"
                value={username}
                onChange={this.handleChange}
                placeholder="Enter username..."
                error={errors.username}
                className="input"
                required
                />
                 <FormInput
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Enter password..."
                error={errors.password}
                className="input"
                required
                />
            </>
        )
        
    }
}

export default Step1;