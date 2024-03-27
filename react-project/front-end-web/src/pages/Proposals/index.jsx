import React, { useEffect, useState } from "react";
import AppService from "../../services";
import { Table } from "../../components/Table";

export const Proposals = () => {
  const table_headers = ["id", "message", "price", "owner", "order"];
  const [data, setData] = useState([]);
  const api = new AppService();

  useEffect(() => {
    api.getProposals().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Table data={data} table_headers={table_headers} title={"Proposals"} />
  );
};
