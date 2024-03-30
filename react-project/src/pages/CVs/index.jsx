import React, { useEffect, useState } from "react";
import AppService from "../../services";
import { Table } from "../../components/Table";

export const CVs = () => {
  const table_headers = ["id", "owner id", "media", "bio", "rating"];
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
