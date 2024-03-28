import React, { useEffect, useState } from "react";
import AppService from "../../services";
import { Table } from "../../components/Table";

export const EmployerReviews = () => {
  const table_headers = ["id", "rate", "message", "job", "owner", "employee"];
  const [data, setData] = useState([]);
  const api = new AppService();

  useEffect(() => {
    api.getEmployerReviews().then((data) => {
      setData(data);
    });
  }, []);
  return (
    <Table
      data={data}
      table_headers={table_headers}
      title={"Employer Reviews"}
    />
  );
};
