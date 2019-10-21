import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import Calendar from 'react-calendar';
import UserContext from '../UserContext';

const FormComponent = () => {
  const { users, setUsers } = useContext(UserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [age, setAge] = useState('');
  const [hobby, setHobby] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    setUsers([
      ...users,
      {
        firstName,
        lastName,
        birthday: birthday.toLocaleString('us').split(',')[0],
        age,
        hobby,
      },
    ]);

    setFirstName('');
    setLastName('');
    setBirthday(new Date());
    setAge('');
    setHobby('');
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder="Enter first name"
          required
        />
      </Form.Group>

      <Form.Group controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder="Enter last name"
          required
        />
      </Form.Group>

      <Form.Group controlId="formBirthday">
        <Form.Label>Birthday</Form.Label>
        <Calendar value={birthday} onChange={date => setBirthday(date)} />
        {/* <Form.Control type="text" value={birthday} onChange={e => setBirthday(e.target.value)}  placeholder="Enter birthday" /> */}
      </Form.Group>

      <Form.Group controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="text"
          value={age}
          onChange={e => setAge(e.target.value)}
          placeholder="Enter age"
        />
      </Form.Group>

      <Form.Group controlId="formHobby">
        <Form.Label>Hobby</Form.Label>
        <Form.Control
          type="text"
          value={hobby}
          onChange={e => setHobby(e.target.value)}
          placeholder="Enter Hobby"
        />
      </Form.Group>

      <Button variant="primary" type="submit" block>
        Submit
      </Button>
    </Form>
  );
};

export default FormComponent;
