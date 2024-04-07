import React, { useEffect, useState } from "react";
import AppService from "../../services";
import { Table } from "../../components/Table";

export const EmployeeCards = () => {
  const table_headers = [
    "id",
    "holder name",
    "card number",
    "created date",
    "owner id",
  ];
  const api = new AppService();
  const [data, setData] = useState([]);
  useEffect(() => {
    api.getEmployeeCards().then((data) => setData(data));
  }, []);

  return (
    <>
      <Table
        data={data}
        table_headers={table_headers}
        title={"Employee Cards"}
        page={"employee_cards"}
        setData={setData}
      />
    </>
  );
};
