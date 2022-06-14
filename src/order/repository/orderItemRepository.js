import fetchTable from "../../common/infrastructure/airtable/fetchTable";

const TABLE_NAME = "order_item";
const VIEW_NAME = "Grid view";

const createOrderItemRepository = () => ({
  getAll: async () => await fetchTable(TABLE_NAME, VIEW_NAME),
});

export default createOrderItemRepository;
