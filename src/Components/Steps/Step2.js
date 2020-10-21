import React from 'react';
import FormInput from '../TextInput'
import '../TextInput.css'


class Step2 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            errors:this.props.errors
        }
    }

    handleChange = event => {
        const nameerror = 'Name must not contain numbers or special characters';
        const result = event.target.value;
        const test = /^[a-zA-Z]+$/;
        switch (event.target.name){
            case 'fname':
                if (!result.match(test)){
                    this.setState({errors: {...this.state.errors, [event.target.name]: nameerror}})
                    this.props.onError(event.target.name, nameerror);
                }
                else{
                    this.setState({errors: {...this.state.errors, [event.target.name]: null }})
                    this.props.onError(event.target.name, '');
                }
                break;
            case 'lname':
                if (!result.match(test)){
                    this.setState({errors: {...this.state.errors, [event.target.name]: nameerror}})
                    this.props.onError(event.target.name, nameerror);
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
        this.props.onChange(event.target.name, result)
    };

    render(){
        const { errors } = this.state;
        const { user:{fname, lname} } = this.props;
        if (this.props.step !== 2){
            return null;
        }
        return(
            <>
                <FormInput
                label="First Name"
                name="fname"
                type="text"
                value={fname}
                onChange={this.handleChange}
                placeholder="Enter first name..."
                error={errors.fname}
                className="input"
                />
                 <FormInput
                label="Last Name"
                name="lname"
                type="text"
                value={lname}
                onChange={this.handleChange}
                placeholder="Enter last name..."
                error={errors.lname}
                className="input"
                />
            </>
        )
        
    }
}

export default Step2;