import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const EmployeeList = ({ employees }) => {

  const employeesToShow = employees.map( employee =>
    <EmployeeDetail key={ employee._id } employee={ employee } />
  );

  return (
    <div>
      <div className="employee-list">
        <ul>{ employeesToShow }</ul>
      </div>
    </div>
  );
};

export default createContainer(() => {
  // Set up subscription
  Meteor.subscribe('employees');

  // return and object, sent to EmployeeList as props
  return { employees: Employees.find({}).fetch() }
}, EmployeeList);
