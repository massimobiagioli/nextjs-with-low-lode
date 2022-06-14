import useSWR from "swr";
import { OrderList } from "../components/order";
import apiFetcher from "../src/common/infrastructure/swr/apiFetcher";

const Home = () => {
  const { data, error } = useSWR("/api/order", apiFetcher);

  if (error) return <div>Failed to load orders</div>;
  if (!data) return <div>Loading...</div>;

  return <OrderList orders={data} />;
};

export default Home;
