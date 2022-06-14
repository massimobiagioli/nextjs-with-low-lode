import { updateWorkflowUseCase } from "../../../src";

export default async function handler(req, res) {
  switch (req.method) {
    case "PUT":
      const { id } = req.query;

      await updateWorkflowUseCase(id);
      res.status(200).json();
      break;
    default:
      res.status(405).send("Method Not Allowed");
      break;
  }
}
