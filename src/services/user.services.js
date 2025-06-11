import crypto from "node:crypto";

const users = [];

const getAllUsers = () => users;


const getOneUser = (id) => {
  return users.find(user => user.id === id);
};

const createUser = ({ name, email }) => {
  const newUser = {
    id: crypto.randomUUID(),
    name,
    email,
  };
  users.push(newUser);
  return newUser;
};





export default {
  getAllUsers,
  getOneUser,
  createUser,
};
