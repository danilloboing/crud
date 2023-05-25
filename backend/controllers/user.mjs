import { db } from "../db.mjs";
import bcrypt from "bcrypt";


export const logUsers = (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }

    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.send(error);
        }

        if (response) {
          res.send({ msg: "Usuário logado" });
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      });

    } else {
      res.send({ msg: "Usuário não registrado!" });
    }
  });
};



export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuarios(`id_usuarios`, `email`, `password`) VALUES(?)";

  const values = [
    req.body.id_usuarios,
    req.body.email,
    req.body.password,
  ];

  db.query(q, [values], (err, result) => {
    if (err) {
      return res.json(err)
    };
    if (result.length == 0) {
      bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        db.query(
          "INSERT INTO usuarios (email, password) VALUE (?,?)",
          [req.body.email, hash],
          (err, result) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "Usuário cadastrado com sucesso" });
          }
        );
      });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }

    return res.status(200).json("Usuário criado com sucesso.");
  });
};