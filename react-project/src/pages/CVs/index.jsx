import { Table } from "../../components/Table";

export const CVs = () => {
  const table_headers = {
    eng: ["id", "media", "bio", "rating", "created date", "owner id"],
    ru: [
      "идентификатор",
      "медиа",
      "биография",
      "рейтинг",
      "дата создания",
      "идентификатор владельца",
    ],
    uz: [
      "identifikator",
      "media",
      "bio",
      "reyting",
      "yaratilgan sana",
      "egasi identifikatori",
    ],
  };

  return (
    <>
      <Table table_headers={table_headers} title={"CVs"} page={"cvs"} />
    </>
  );
};
