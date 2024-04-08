import { Table } from "../../components/Table";

export const EmployeePassports = () => {
  const table_headers = [
    "id",
    "image",
    "is approved",
    "created date",
    "owner id",
  ];

  return (
    <Table
      table_headers={table_headers}
      title={"Employee Passports"}
      page={"employee_passports"}
    />
  );
};
