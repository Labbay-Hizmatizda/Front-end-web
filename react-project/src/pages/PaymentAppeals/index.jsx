import { Table } from "../../components/Table";

export const PaymentAppeals = () => {
  const table_headers = [
    "id",
    "message",
    "created date",
    "owner id",
    "payment id",
  ];

  return (
    <Table
      table_headers={table_headers}
      title={"Payment Appeals"}
      page={"payment_appeals"}
    />
  );
};
