import { Table } from "../../components/Table";

export const Orders = () => {
  const table_headers = {
    eng: [
      "id",
      "category",
      "description",
      "media",
      "location",
      "location_link",
      "price",
      "is active",
      "created date",
      "owner id",
    ],
    ru: [
      "идентификатор",
      "категория",
      "описание",
      "медиа",
      "местоположение",
      "ссылка на местоположение",
      "цена",
      "активен",
      "дата создания",
      "идентификатор владельца",
    ],
    uzb: [
      "identifikator",
      "kategoriya",
      "ta'rif",
      "media",
      "joylashuv",
      "joylashuv havolasi",
      "narx",
      "faol",
      "yaratilgan sana",
      "egasi identifikatori",
    ],
  };

  return (
    <>
      <Table table_headers={table_headers} title={"Orders"} page={"orders"} />
    </>
  );
};
