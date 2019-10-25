import React from 'react';
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap';

const TableComponent = () => {
	const users = useSelector((state)=> state.users)
  return (
    <Table striped bordered hover className="mt-2">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Birthday</th>
          <th>Age</th>
          <th>Hobby</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.birthday}</td>
            <td>{user.age}</td>
            <td>{user.hobby}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
