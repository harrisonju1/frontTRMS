import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import {required} from 'redux-form-validators';
import {connect} from "react-redux";
import { createClaimTRMS } from '../actions';
import './login.css';

class submitclaim extends Component{
    renderFieldFile(field){
        const{meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="file" {...field.input}/>
                <div className="text-help">
                    {touched ? error:""}
                </div>
            </div>
        );
    }

    renderFieldDate(field){
        const{meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="date" {...field.input}/>
                <div className="text-help">
                    {touched ? error:""}
                </div>
            </div>
        );
    }

    renderFieldInt(field){
        const{meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="number" {...field.input}/>
                <div className="text-help">
                    {touched ? error:""}
                </div>
            </div>
        );

    }
    renderField(field){
        const{meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input}/>
                <div className="text-help">
                    {touched ? error:""}
                </div>
            </div>
        );
    }

    onSubmit(values){
        this.props.createClaimTRMS(values,() =>{
            this.props.history.push("/claimstatus");
        });
        console.log(values);
    }

    render(){
        const {handleSubmit} = this.props;

        return(
            <form className="form-signin" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Reimbursement Type:"
                    name="reimbursement_type"
                    component={this.renderField}
                    validate={[required()]}
                />
                <Field
                    label="Cost:"
                    name="cost"
                    component={this.renderFieldInt}
                />
                <Field
                    label="Grade:"
                    name="grade"
                    component={this.renderFieldInt}
                />
                <Field
                    label="Grade to pass: "
                    name="grade_to_pass"
                    component={this.renderFieldInt}/>
                <Field
                    label="Event Start Date"
                    name="event_start"
                    component={this.renderFieldDate}
                />
                <Field
                    label="Event End Date:"
                    name="event_end"
                    component={this.renderFieldDate}
                />
                <Field
                    label="Attachments:"
                    name="attachment"
                    component={this.renderFieldFile}
                />
                <button type ="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

export default reduxForm({
    form: "claim"
})(connect(null,{ createClaimTRMS })(submitclaim));