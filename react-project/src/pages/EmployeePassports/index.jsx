import { Table } from "../../components/Table";

export const EmployeePassports = () => {
  const table_headers = {
    eng: ["id", "image", "is approved", "created date", "owner id"],
    ru: [
      "идентификатор",
      "изображение",
      "одобрено",
      "дата создания",
      "идентификатор владельца",
    ],
    uzb: [
      "identifikator",
      "rasm",
      "tasdiqlandi",
      "yaratilgan sana",
      "egasi identifikatori",
    ],
  };

  return (
    <Table
      table_headers={table_headers}
      title={"Employee Passports"}
      page={"employee_passports"}
    />
  );
};
