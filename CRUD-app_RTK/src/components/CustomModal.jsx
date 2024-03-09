import React from 'react';
import { useSelector } from 'react-redux';

function CustomModal({ id, setShowModal }) {
  const allUsers = useSelector((state) => state.user.user);
  const filteredUser = allUsers.filter((user) => user.id === id);

  return (
    <>
      <div className="position-fixed bg-[rgba(0,0,0,0.6)] inset-0 grid place-items-center z-50">
        <div className="bg-white flex flex-col shadow-lg p-3 pt-1 rounded-lg w-1/4">
          <button
            className="text-2xl self-end"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
          <img
            src="https://cdn0.iconfinder.com/data/icons/social-network-flat-4/512/user-256.png"
            alt="Profile"
            className="size-28 self-center mb-4"
          />
          <h2 className="h2 self-center">{filteredUser[0].name}</h2>
          <h6 className="h6 self-center">{filteredUser[0].email}</h6>
          <div className="flex justify-evenly">
            <p className="">{filteredUser[0].gender}</p>
            <p className="">{filteredUser[0].age} years old</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomModal;
