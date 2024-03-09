import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../features/userDetailSlice.js';

function UpdateAction() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editData, setEditData] = useState();
  const { user: allUsers, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (id) {
      const filteredUser = allUsers.filter((user) => user.id === id);
      setEditData(filteredUser[0]);
    }
  }, []);

  const newData = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(editData));
    navigate('/read');
  };

  return (
    <>
      <h2 className="text-center text-2xl font-bold mt-3">Edit the Data</h2>
      <Form className="w-1/2 mx-auto pt-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
            value={editData && editData.name}
            onChange={newData}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
            value={editData && editData.email}
            onChange={newData}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            placeholder="Enter age"
            required
            value={editData && editData.age}
            onChange={newData}
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
            checked={editData && editData.gender === 'Male'}
            onChange={newData}
          />
          <Form.Check
            type="radio"
            name="gender"
            value="Female"
            label="Female"
            checked={editData && editData.gender === 'Female'}
            onChange={newData}
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

export default UpdateAction;
