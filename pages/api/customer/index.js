import { getAllCustomersUseCase } from "../../../src";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const customers = await getAllCustomersUseCase();
      res.status(200).json(customers);
      break;
    default:
      res.status(405).send("Method Not Allowed");
      break;
  }
}
