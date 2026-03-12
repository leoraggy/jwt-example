import users from "./../repo/users.repo.js";
import hotels from "./../repo/hotels.repo.js";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
  const { username, password } = req.body;

  const match = users.find(
    (el) => el.username === username && el.password === password,
  );

  if (!match) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  //details about the user
  const payload = {
    id: match.id,
    username,
    role: match.role,
  };

  console.log(payload);

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30m" });
  res.status(200).json({ token });
};

export const getHotels = (req, res) => res.status(200).json(hotels);
