import { Table } from "../../components/Table";

export const JobAppeals = () => {
  const table_headers = {
    eng: ["id", "message", "created date", "owner id", "job id"],
    ru: [
      "идентификатор",
      "сообщение",
      "дата создания",
      "идентификатор владельца",
      "идентификатор задания",
    ],
    uzb: [
      "identifikator",
      "xabar",
      "yaratilgan sana",
      "egasi identifikatori",
      "vazifa identifikatori",
    ],
  };

  return (
    <Table
      table_headers={table_headers}
      title={"Job Appeals"}
      page={"job_appeals"}
    />
  );
};
