import React, {FC} from "react";
import {Link} from "react-router-dom";
import {Button, ButtonGroup} from "reactstrap";
import {IEmployee} from "./EmployeeList";

type Props = {
  employee: IEmployee,
  remove: (id: number) => void
}

const Employee: FC<Props> = (props) => {
  const {employee, remove} = props;

  return (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.description}</td>
      <td>
        <ButtonGroup>
          <Button className="mr-2" size="sm" color="primary" tag={Link} to={`/employees/${employee.id}`}>Edit</Button>
          <Button size="sm" color="danger" onClick={() => remove(employee.id!)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};
export default Employee;