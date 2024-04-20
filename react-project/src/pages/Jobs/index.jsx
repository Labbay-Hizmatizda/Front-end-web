import { Table } from "../../components/Table";

export const Jobs = () => {
  const table_headers = {
    eng: [
      "id",
      "price",
      "is active",
      "created date",
      "order id",
      "proposal id",
    ],
    ru: [
      "идентификатор",
      "цена",
      "активен",
      "дата создания",
      "идентификатор заказа",
      "идентификатор предложения",
    ],
    uzb: [
      "identifikator",
      "narxi",
      "aktiv",
      "yaratilgan sana",
      "buyurtma identifikatori",
      "taklif identifikatori",
    ],
  };

  return <Table table_headers={table_headers} title={"Jobs"} page={"jobs"} />;
};
