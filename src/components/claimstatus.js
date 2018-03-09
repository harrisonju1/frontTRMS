import React, {Component} from "react";
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import{
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {claimStatusTRMS} from '../actions';


injectTapEventPlugin();

const MuiTable = () => {
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderColumn>Claim ID </TableHeaderColumn>
                <TableHeaderColumn>Event ID </TableHeaderColumn>
                <TableHeaderColumn>Type of Reimbursement</TableHeaderColumn>
                <TableHeaderColumn>Grade</TableHeaderColumn>
                <TableHeaderColumn>Grade to Pass</TableHeaderColumn>
                <TableHeaderColumn>Supervisor Approval Date</TableHeaderColumn>
                <TableHeaderColumn>Supervisor Approval</TableHeaderColumn>
                <TableHeaderColumn>Department Head Approval Date</TableHeaderColumn>
                <TableHeaderColumn>Department Head Approval</TableHeaderColumn>
                <TableHeaderColumn>Benco Approval Date</TableHeaderColumn>
                <TableHeaderColumn>Benco Approval</TableHeaderColumn>
                <TableHeaderColumn>Benco Deny Reason</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableRowColumn>7</TableRowColumn>
                <TableRowColumn>20</TableRowColumn>
                <TableRowColumn>University</TableRowColumn>
                <TableRowColumn>1000</TableRowColumn>
                <TableRowColumn>100</TableRowColumn>
                <TableRowColumn>70</TableRowColumn>
                <TableRowColumn>null</TableRowColumn>
                <TableRowColumn>false</TableRowColumn>
                <TableRowColumn>null</TableRowColumn>
                <TableRowColumn>false</TableRowColumn>
                <TableRowColumn>null</TableRowColumn>
                <TableRowColumn>false</TableRowColumn>
                <TableRowColumn>null</TableRowColumn>
            </TableRow>
        </TableBody>
    </Table>
};


class claimstatus extends Component{
    render(){
        return(
        <MuiThemeProvider>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Claim ID </TableHeaderColumn>
                        <TableHeaderColumn>Event ID </TableHeaderColumn>
                        <TableHeaderColumn>Type of Reimbursement</TableHeaderColumn>
                        <TableHeaderColumn>Cost</TableHeaderColumn>
                        <TableHeaderColumn>Grade</TableHeaderColumn>
                        <TableHeaderColumn>Grade to Pass</TableHeaderColumn>
                        <TableHeaderColumn>Supervisor Approval Date</TableHeaderColumn>
                        <TableHeaderColumn>Supervisor Approval</TableHeaderColumn>
                        <TableHeaderColumn>Department Head Approval Date</TableHeaderColumn>
                        <TableHeaderColumn>Department Head Approval</TableHeaderColumn>
                        <TableHeaderColumn>Benco Approval Date</TableHeaderColumn>
                        <TableHeaderColumn>Benco Approval</TableHeaderColumn>
                        <TableHeaderColumn>Benco Deny Reason</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableRowColumn>7</TableRowColumn>
                        <TableRowColumn>20</TableRowColumn>
                        <TableRowColumn>University</TableRowColumn>
                        <TableRowColumn>1000</TableRowColumn>
                        <TableRowColumn>100</TableRowColumn>
                        <TableRowColumn>70</TableRowColumn>
                        <TableRowColumn>null</TableRowColumn>
                        <TableRowColumn>false</TableRowColumn>
                        <TableRowColumn>null</TableRowColumn>
                        <TableRowColumn>false</TableRowColumn>
                        <TableRowColumn>null</TableRowColumn>
                        <TableRowColumn>false</TableRowColumn>
                        <TableRowColumn>null</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        </MuiThemeProvider>
        )
    }
}
export default reduxForm({
    form:"status"
})(connect(null,{claimStatusTRMS}) (claimstatus));

