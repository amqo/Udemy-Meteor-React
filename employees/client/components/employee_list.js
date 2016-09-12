import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;

class EmployeeList extends Component {

  componentWillMount() {
    this.page = 1;
  }

  handleLoadMore() {
    this.page += 1;
    Meteor.subscribe('employees', PER_PAGE * this.page);
  }

  render() {
    // props.employees => an array of empoyee objects
    return (
      <div>
        <div className="employee-list">
          { this.props.employees.map( employee =>
              <EmployeeDetail key={ employee._id } employee={ employee } />
            )}
        </div>
        <button
          onClick={ this.handleLoadMore.bind(this) }
          className="btn btn-primary">
          Load More ...
        </button>
      </div>
    );
  }
};

export default createContainer(() => {
  // Set up subscription
  Meteor.subscribe('employees', PER_PAGE);

  // return and object, sent to EmployeeList as props
  return { employees: Employees.find({}).fetch() }
}, EmployeeList);
