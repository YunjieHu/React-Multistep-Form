import React from 'react';
import FormInput from '../TextInput'
import '../TextInput.css'


class Step3 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            errors:this.props.errors
        }
    }

    handleChange = event => {
        const result = event.target.value;
        const test = /^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/;
        const error = 'Wrong date format';
        if (!result.match(test)){
            this.setState({errors: {...this.state.errors, [event.target.name]: error}})
            this.props.onError(event.target.name, error);
        }
        else{
            this.setState({errors: {...this.state.errors, [event.target.name]: null }})
            this.props.onError(event.target.name, '');
        }
        this.props.onChange(event.target.name, event.target.value)
    };

    render(){
        const { errors } = this.state;
        const { user:{birthday }} = this.props;
        if (this.props.step !== 3){
            return null;
        }
        return(
            <>
                <FormInput
                label="Birthday"
                name="birthday"
                type="date"
                value={birthday}
                onChange={this.handleChange}
                placeholder="Enter Your Birthday..."
                error={errors.birthday}
                className="input"
                />
            </>
        )
        
    }
}

export default Step3;