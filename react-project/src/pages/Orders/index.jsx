import { Table } from "../../components/Table";

export const Orders = () => {
  const table_headers = [
    "id",
    "description",
    "media",
    "location",
    "location_link",
    "price",
    "is active",
    "created date",
    "owner id",
    "category",
  ];

  return (
    <>
      <Table table_headers={table_headers} title={"Orders"} page={"orders"} />
    </>
  );
};
