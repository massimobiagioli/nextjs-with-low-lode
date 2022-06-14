import useSWR from "swr";
import WorkflowList from "../components/workflow/WorkflowList";
import apiFetcher from "../src/common/infrastructure/swr/apiFetcher";

const Workflow = () => {
  const { data, error } = useSWR("/api/workflow", apiFetcher);

  if (error) return <div>Failed to load workflows</div>;
  if (!data) return <div>Loading...</div>;

  return <WorkflowList workflows={data} />;
};

export default Workflow;
