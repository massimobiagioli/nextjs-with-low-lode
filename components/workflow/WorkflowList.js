import WorkflowListItem from "./WorkflowListItem";

const WorkflowList = ({ workflows }) => {
  return (
    <>
      <h3>List Workflows</h3>
      <ul>
        {workflows.map((workflow) => (
          <WorkflowListItem key={workflow.id} workflow={workflow} />
        ))}
      </ul>
    </>
  );
};

export default WorkflowList;
