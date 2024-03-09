import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, readUser } from '../features/userDetailSlice.js';
import CustomModal from './CustomModal.jsx';
import { Link } from 'react-router-dom';

function ReadAction() {
  const dispatch = useDispatch();
  const {
    user: users,
    loading,
    searchData,
  } = useSelector((state) => state.user);

  const [id, setId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filterOption, setFilterOption] = useState('');

  useEffect(() => {
    dispatch(readUser());
    setFilterOption('');
  }, []);

  if (loading) {
    return <h2 className="text-center text-2xl font-bold my-3">Loading...</h2>;
  }

  return (
    <>
      {showModal && (
        <CustomModal
          id={id}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <h2 className="text-center text-2xl font-bold my-3">All Users</h2>
      <Form.Select
        className="w-fit absolute left-3/4 ml-2 py-[10px]"
        value={filterOption}
        onChange={(e) => setFilterOption(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Form.Select>
      {users &&
        users
          .filter((user) => {
            if (searchData.length === 0) {
              return user;
            } else {
              return user.name.toLowerCase().includes(searchData.toLowerCase());
            }
          })
          .filter((user) => {
            if (filterOption === 'Male') {
              return user.gender === filterOption;
            } else if (filterOption === 'Female') {
              return user.gender === filterOption;
            } else return user;
          })
          .map((user) => (
            <Card key={user.id} className="text-center w-1/2 mx-auto mb-2">
              <Card.Header className="h4 bg-emerald-400">
                {user.name}
              </Card.Header>
              <Card.Body>
                <Card.Text className="mb-2">{user.gender}</Card.Text>
                <Card.Link
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={() => [setId(user.id), setShowModal(true)]}
                >
                  View
                </Card.Link>
                <Card.Link
                  to={`/edit/${user.id}`}
                  as={Link}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  Edit
                </Card.Link>
                <Card.Link
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={() => dispatch(deleteUser(user.id))}
                >
                  Delete
                </Card.Link>
              </Card.Body>
            </Card>
          ))}
    </>
  );
}

export default ReadAction;
