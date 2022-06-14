import { Button } from "react-bootstrap";

const uploadWorkflow = (workflowId) => (e) => {
  e.preventDefault();

  fetch(`/api/workflow/${workflowId}`, {
    method: "PUT",
  }).then(() => {
    console.log("Workflow uploaded");
  });
};

const WorkflowListItem = ({ workflow }) => {
  return (
    <li>
      <div>
        <span>
          {workflow.id} - {workflow.name}
        </span>
        <Button
          className="m-3"
          variant="primary"
          type="button"
          onClick={uploadWorkflow(workflow.id)}
        >
          Upload
        </Button>
      </div>
    </li>
  );
};

export default WorkflowListItem;
