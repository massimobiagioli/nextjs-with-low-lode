import fs from "fs";
import path from "path";

const workflowFolderName = "n8n_workflows";
const workflowFolder = path.resolve(".", workflowFolderName);

const createWorkflowRepository = () => {
  return {
    getAll: async () => {
      const filenames = fs.readdirSync(workflowFolder);

      return filenames.map((filename) => {
        const workflowPath = path.join("/", workflowFolder, filename);
        const workflow = JSON.parse(fs.readFileSync(workflowPath));

        return {
          id: filename.substring(0, filename.indexOf(".")),
          name: workflow.name,
        };
      });
    },

    getContentById: async (id) => {
      const workflowPath = path.join("/", workflowFolder, `${id}.json`);
      return JSON.parse(fs.readFileSync(workflowPath));
    },
  };
};

export default createWorkflowRepository;
