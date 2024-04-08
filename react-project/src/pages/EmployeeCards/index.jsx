import { Table } from "../../components/Table";

export const EmployeeCards = () => {
  const table_headers = [
    "id",
    "holder name",
    "card number",
    "created date",
    "owner id",
  ];

  return (
    <>
      <Table
        table_headers={table_headers}
        title={"Employee Cards"}
        page={"employee_cards"}
      />
    </>
  );
};
