import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginTRMS } from '../actions';


class login extends Component{
    renderField(field){
        const{meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input}/>
                <div className={"text-help"}>
                    {touched ? error : ""}
                </div>
            </div>
        );
    }

    onSubmit(values){
        this.props.loginTRMS(values, () => {
            this.props.history.push("/submitclaim")
        });
        console.log(values);
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Username:"
                    name="username"
                    component={this.renderField}
                />
                <Field
                    label="Password:"
                    name="password"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

export default reduxForm({
    form:"login"
})(connect(null,{loginTRMS}) (login));