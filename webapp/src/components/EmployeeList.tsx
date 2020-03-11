import React, {useEffect, useState} from "react";
import Employee from "./Employee";
import {Button, Container, Table} from "reactstrap";
import {Link} from "react-router-dom";

export interface IEmployee {
  id?: number,
  firstName: string;
  lastName: string;
  description: string;
  _links?: any;
}

const EmployeeList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('/api/employees');
      const body = await response.json();
      setIsLoading(false);
      setEmployees(body._embedded.employees);
    } catch (err) {
      console.error(err);
    }
  };

  const remove = async (id: number) => {
    try {
      await fetch(`/api/employees/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      await fetchEmployees();
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container fluid>
      <div className="float-right">
        <Button color="success" tag={Link} to="/employees/new">Add Employee</Button>
      </div>
      <h3>Employee List</h3>
      <Table className="mt-4">
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Description</th>
        </tr>
        </thead>
        <tbody>
        {employees.map(employee =>
          <Employee key={employee.id} employee={employee} remove={() => remove(employee.id!)}/>
        )}
        </tbody>
      </Table>
    </Container>
  );
};
export default EmployeeList;