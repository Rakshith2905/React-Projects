import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice.js';
import { useNavigate } from 'react-router-dom';

function CreateAction() {
  const [users, setUsers] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(users));
    navigate('/read');
  };

  return (
    <>
      <h2 className="text-center text-2xl font-bold mt-3">Fill the Data</h2>
      <Form className="w-1/2 mx-auto pt-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
            onChange={getUserData}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
            onChange={getUserData}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            placeholder="Enter age"
            required
            onChange={getUserData}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex justify-center gap-x-4"
          controlId="formBasicRadio"
        >
          <Form.Check
            type="radio"
            name="gender"
            value="Male"
            label="Male"
            onChange={getUserData}
          />
          <Form.Check
            type="radio"
            name="gender"
            value="Female"
            label="Female"
            onChange={getUserData}
          />
        </Form.Group>

        <Button
          className="text-slate-950 hover:text-white w-100"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default CreateAction;
