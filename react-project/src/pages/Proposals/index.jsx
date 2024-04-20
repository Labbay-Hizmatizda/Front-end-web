import { Table } from "../../components/Table";

export const Proposals = () => {
  const table_headers = {
    eng: ["id", "price", "is active", "created date", "owner id", "order id"],
    ru: [
      "идентификатор",
      "цена",
      "активность",
      "дата создания",
      "идентификатор владельца",
      "идентификатор заказа",
    ],
    uzb: [
      "identifikator",
      "narx",
      "faol",
      "yaratilgan sana",
      "egasi identifikatori",
      "buyurtma identifikatori",
    ],
  };

  return (
    <Table
      table_headers={table_headers}
      title={"Proposals"}
      page={"proposals"}
    />
  );
};
