import { Table } from "../../components/Table";

export const Employers = () => {
  const table_headers = {
    eng: [
      "id",
      "user id",
      "name",
      "surname",
      "phone number",
      "created date",
      "language",
    ],
    ru: [
      "идентификатор",
      "идентификатор пользователя",
      "имя",
      "фамилия",
      "номер телефона",
      "дата создания",
      "язык",
    ],
    uzb: [
      "identifikator",
      "foydalanuvchi identifikatori",
      "ism",
      "familiya",
      "telefon raqami",
      "yaratilgan sana",
      "til",
    ],
  };

  return (
    <Table
      table_headers={table_headers}
      title={"Employers"}
      page={"employers"}
    />
  );
};
