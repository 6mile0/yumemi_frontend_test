import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h2>都道府県別人口比較</h2>
    </header>
  );
};
export default Header;
