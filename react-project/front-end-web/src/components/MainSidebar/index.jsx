// import React from "react";
import { useState } from "react";
import styles from "./MainSidebar.module.scss";

export const MainSidebar = () => {
  const list = [
    { id: 1, title: "Dashboard", link: "#" },
    { id: 2, title: "Employee", link: "#" },
    { id: 3, title: "Employer", link: "#" },
    { id: 4, title: "Employee Review", link: "#" },
    { id: 5, title: "Employer Review", link: "#" },
    { id: 6, title: "Proposal", link: "#" },
    { id: 7, title: "Job", link: "#" },
    { id: 8, title: "Order", link: "#" },
    { id: 9, title: "Employee Card", link: "#" },
    { id: 10, title: "CVs", link: "#" },
    { id: 11, title: "Payment", link: "#" },
    { id: 12, title: "Job Appeal", link: "#" },
    { id: 13, title: "Payment Appeal", link: "#" },
    { id: 14, title: "Employee Passports", link: "#" },
  ];

  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <aside className={styles.sidebar}>
      <a href="#">
        <h2 className={styles.logo}>Logo</h2>
      </a>
      <ul className={styles.list}>
        {list.map((item) => (
          <li
            className={`${styles.listItem} ${
              activeItem === item.title && styles.activeItem
            }`}
            key={item.id}
            onClick={() => setActiveItem(item.title)}
          >
            <a href={item.link} className={styles.listItemLink}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
