import userServices from "../services/user.services.js";

const validateEmail = (email) => {
  // Regex para email válido
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  // Mínimo 8 caracteres, al menos una letra y un número
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passRegex.test(password);
};

const getAll = (req, res) => {
  const users = userServices.getAllUsers();
  res.status(200).json(users);
};

const getOne = (req, res) => {
  const { id } = req.params;
  const user = userServices.getOneUser(id);
  
  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  res.status(200).json(user);
};

const create = (req, res) => {
  console.log(req.body.password,)
  const { name, email, password } = req.body;


  // Validar email
  if (!validateEmail(email)) {
    console.log(" el mail esta mal ")
    return res.status(400).json({ message: "Correo inválido" });
  }
  if (!validatePassword(password)){
    console.log(" el password esta mal ")
      return res.status(400).json({msj:"Error el password esta mal "})
  }

  const newUser = userServices.createUser({ name, email,password});
  console.log(newUser)
  res.status(201).json(newUser);
};

export default {
  getAll,
  getOne,
  create,
};
