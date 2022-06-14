import useSWR from "swr";
import { useState } from "react";
import { OrderCreateForm, OrderCreateToast } from "../components/order";
import apiFetcher from "../src/common/infrastructure/swr/apiFetcher";

const CreateOrder = () => {
  const customerResult = useSWR("/api/customer", apiFetcher);
  const [workflowStarted, setWorkflowStarted] = useState(false);
  const toggleWorkflowStarted = () => setWorkflowStarted(!workflowStarted);

  if (customerResult.error) return <div>Failed to load customers</div>;
  if (!customerResult.data) return <div>Loading customers...</div>;

  return (
    <>
      <h3>Create Order</h3>

      <OrderCreateToast
        onClose={toggleWorkflowStarted}
        show={workflowStarted}
      />

      <OrderCreateForm
        customers={customerResult.data}
        onWorkflowStarted={setWorkflowStarted}
      />
    </>
  );
};

export default CreateOrder;
