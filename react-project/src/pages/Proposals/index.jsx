import { Table } from "../../components/Table";

export const Proposals = () => {
  const table_headers = [
    "id",
    "price",
    "is active",
    "created date",
    "owner id",
    "order id",
  ];

  return (
    <Table
      table_headers={table_headers}
      title={"Proposals"}
      page={"proposals"}
    />
  );
};
