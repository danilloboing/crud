import { db } from "../db.mjs";

export const getCar = (_, res) => {
  const q = "SELECT * FROM carros";

  db.query (q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  })
};

//FUNÇÃO PARA ADICIONAR UM NOVO CARRO
export const addCar = (req, res) => {
  const q = "INSERT INTO carros(`nome_carros`, `placa`, `disponibilidade`) VALUES(?)";

  const values = [
    req.body.nome_carros,
    req.body.placa,
    req.body.disponibilidade,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Carro cadastrado com sucesso!");
  });
};

//FUNÇÃO PARA ATUALIZAR O CARRO
export const updateCar = (req, res) => {
  const q = "UPDATE carros SET `nome_carros` = ?, `placa` = ?, `disponibilidade`= ? WHERE `idcarros` = ?";

  const values = [
    req.body.nome_carros,
    req.body.placa,
    req.body.disponibilidade,
  ];

  db.query(q, [...values, req.params.idcarros], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Carro atualizado com sucesso!");
  })
};

//FUNÇÃO PARA DELETAR UM CARRO
export const deleteCar = (req, res) => {
  const q = "DELETE FROM carros WHERE `idcarros` = ?";

  db.query(q, [req.params.idcarros], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Carro deletado com sucesso.");
  });
};

