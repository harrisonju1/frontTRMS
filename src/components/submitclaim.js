import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import {required, numericality, date} from 'redux-form-validators';
import {connect} from "react-redux";
import { createClaimTRMS } from '../actions';

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
                <input className="form-control" type="datetime-local" {...field.input}/>
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
            this.props.history.push("/");
        });
        console.log(values);
    }

    render(){
        const {handleSubmit} = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                    validate={[required(),date({ format: 'mm/dd/yyyy' })]}
                />
                <Field
                    label="Grade:"
                    name="grade"
                    component={this.renderFieldInt}
                    validate={[required()]}
                />
                <Field
                    label="Grade to pass: "
                    name="grade_to_pass"
                    component={this.renderFieldInt}/>
                <Field
                    label="Location"
                    name="location"
                    component={this.renderField}/>
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
                    label="Expected Hours missed:"
                    name="expected_miss"
                    component={this.renderFieldInt}
                />
                <Field
                    label="Attachments:"
                    name="attachment"
                    component={this.renderFieldFile}
                    validate={[required(), numericality({integer: true, '>': 0})]}
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