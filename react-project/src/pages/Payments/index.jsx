import { Table } from "../../components/Table";

export const Payments = () => {
  const table_headers = [
    "id",
    "employee approve",
    "employer approve",
    "created date",
    "job id",
  ];

  return (
    <Table table_headers={table_headers} title={"Payments"} page={"payments"} />
  );
};
