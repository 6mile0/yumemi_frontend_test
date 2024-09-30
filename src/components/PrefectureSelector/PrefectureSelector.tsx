import { Prefecture } from "../../models/Prefecture";
import CheckBox from "../CheckBox/CheckBox";

import styles from "./PrefectureSelector.module.css";

type PrefectureSelectorProps = {
  prefectures: Array<Prefecture>;
};

const PrefectureSelector: React.FC<PrefectureSelectorProps> = ({
  prefectures,
}: PrefectureSelectorProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.prefectureList}>
        {prefectures.map((prefecture) => (
          <CheckBox
            key={prefecture.prefCode}
            label={prefecture.prefName}
            onChange={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default PrefectureSelector;
