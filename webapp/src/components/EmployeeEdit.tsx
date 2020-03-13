import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from "react";
import {Link, RouteComponentProps, withRouter} from "react-router-dom";
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import {IEmployee} from "./EmployeeList";

const emptyEmployee: IEmployee = {
  firstName: '',
  lastName: '',
  description: '',
  _links: undefined
};

const EmployeeEdit: FC<RouteComponentProps<{ id: string }>> = (props) => {
  const [item, setItem] = useState<IEmployee>(emptyEmployee);

  useEffect(() => {
    const fetchEmployee = async () => {
      const id = props.match.params.id;

      if (id !== 'new') {
        try {
          const employee = await (await fetch('/api/employees/' + id)).json();
          setItem(employee);
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchEmployee();
  }, [props.match.params.id]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItem({...item, [event.target.name]: event.target.value});
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // TODO:
      await fetch('/api/employees', {
        method: (item.id) ? 'PUT' : 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      });
      props.history.push('/employees');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <h2>{item.id ? 'Edit Employee' : 'Add Employee'}</h2>
      <Form onSubmit={handleSubmit} noValidate>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input type="text" name="firstName" id="firstName" value={item.firstName || ''} onChange={handleInputChange}
                 autoComplete="firstName"/>
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input type="text" name="lastName" id="lastName" value={item.lastName || ''} onChange={handleInputChange}
                 autoComplete="lastName"/>
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="text" name="description" id="description" value={item.description || ''}
                 onChange={handleInputChange}
                 autoComplete="description"/>
        </FormGroup>
        <FormGroup>
          <Button color="primary" type="submit">Save</Button>{' '}
          <Button color="secondary" tag={Link} to="/employees">Cancel</Button>
        </FormGroup>
      </Form>
    </Container>
  );
};
export default withRouter(EmployeeEdit);