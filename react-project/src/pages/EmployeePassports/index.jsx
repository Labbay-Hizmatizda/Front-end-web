import React, { useEffect, useState } from "react";
import AppService from "../../services";
import { Table } from "../../components/Table";

export const EmployeePassports = () => {
  const table_headers = [
    "id",
    "image",
    "personal number",
    "card number",
    "is approved",
    "owner",
  ];
  const api = new AppService();
  const [data, setData] = useState([]);
  useEffect(() => {
    api.getEmployeePassports().then((data) => setData(data));
  }, []);
  return (
    <Table
      data={data}
      table_headers={table_headers}
      title={"Employee Passports"}
    />
  );
};
