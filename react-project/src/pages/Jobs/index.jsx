import { Table } from "../../components/Table";

export const Jobs = () => {
  const table_headers = [
    "id",
    "price",
    "is active",
    "created date",
    "order id",
    "proposal id",
  ];

  return <Table table_headers={table_headers} title={"Jobs"} page={"jobs"} />;
};
