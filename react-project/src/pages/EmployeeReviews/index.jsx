import React, { useEffect, useState } from "react";
import AppService from "../../services";
import { Table } from "../../components/Table";

export const EmployeeReviews = () => {
  const table_headers = [
    "id",
    "rate",
    "message",
    "job id",
    "owner id",
    "employer id",
  ];
  const api = new AppService();
  const [data, setData] = useState([]);
  useEffect(() => {
    api.getEmployeeReviews().then((data) => setData(data));
  }, []);

  return (
    <Table
      data={data}
      table_headers={table_headers}
      title={"Employee Reviews"}
    />
  );
};
