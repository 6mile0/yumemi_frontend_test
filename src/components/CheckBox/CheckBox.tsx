import React from "react";
import styles from "./CheckBox.module.css";

type CheckBoxProps = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  onChange,
}: CheckBoxProps) => {
  return (
    <label className={styles.label}>
      <input type="checkbox" onChange={onChange} />
      {label}
    </label>
  );
};

export default CheckBox;
