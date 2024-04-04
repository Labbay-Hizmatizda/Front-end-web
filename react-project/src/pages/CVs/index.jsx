import React, { useEffect, useState } from "react";
import AppService from "../../services";
import { Table } from "../../components/Table";

export const CVs = () => {
  const table_headers = ["id", "media", "bio", "rating", "owner id"];
  const api = new AppService();
  const [data, setData] = useState([]);
  useEffect(() => {
    api.getCVs().then((data) => setData(data));
  }, []);

  return (
    <>
      <Table data={data} table_headers={table_headers} title={"CVs"} />
    </>
  );
};
