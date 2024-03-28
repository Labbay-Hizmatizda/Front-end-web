import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainSidebar.module.scss";
import { changeNavigationState } from "../../store/slices/navSlice";
import { useDispatch, useSelector } from "react-redux";

export const MainSidebarList = ({ list }) => {
  const dispatch = useDispatch();
  const activeItem = useSelector((state) => state.navigation.navigationState);
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li
          key={item.id}
          className={`${styles.listItem} ${
            activeItem === item.title && styles.activeItem
          }`}
          onClick={() => dispatch(changeNavigationState(item.title))}
        >
          <NavLink to={item.link} className={styles.listItemLink}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
