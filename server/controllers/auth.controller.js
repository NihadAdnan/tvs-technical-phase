import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";


export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedpassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedpassword });
    try {
      await newUser.save();
      res.status(201).send({ message: "User created successfully!" });
    } catch (error) {

    }
  };

  export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) return res.status(400).json('Invalid Credentials!')
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) return res.status(401).json('Wrong credentials!');
      res.status(200).send({ message: "Logged in successfully!" });
    } catch (error) {
    }
  };