import React from "react";
import styles from "./CheckBox.module.css";

type CheckBoxProps = {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  checked,
  onChange,
}: CheckBoxProps) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default CheckBox;
