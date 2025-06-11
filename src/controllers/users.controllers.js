import userServices from "../services/user.services.js";

const getAll = (req, res) => {
  const users = userServices.getAllUsers();
  res.status(200).json(users);
};

const getOne = (req, res) => {
  const { id } = req.params;// parmas No bodyu viene en la url el id
  const user = userServices.getOneUser(id);
  
  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  res.status(200).json(user);
};

const create = (req, res) => {
  console.log("Body recibido:", req.body); // Verificar si llega

  const { name, email } = req.body;
  const newUser = userServices.createUser({ name, email });
  console.log(name,email)
  res.status(201).json(newUser);
};

export default {
  getAll,
  getOne,
  create,
};
