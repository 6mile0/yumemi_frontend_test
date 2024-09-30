import { Prefecture } from "../../models/Prefecture";
import CheckBox from "../CheckBox/CheckBox";

import styles from "./PrefectureSelector.module.css";

type PrefectureSelectorProps = {
  prefectures: Array<Prefecture>;
  prefectureHandler: (
    event: React.ChangeEvent<HTMLInputElement>,
    prefecture: Prefecture,
  ) => void;
};

const PrefectureSelector: React.FC<PrefectureSelectorProps> = ({
  prefectures,
  prefectureHandler,
}: PrefectureSelectorProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.prefectureList}>
        {prefectures.map((prefecture) => (
          <CheckBox
            key={prefecture.prefCode}
            label={prefecture.prefName}
            onChange={(e) => prefectureHandler(e, prefecture)}
          />
        ))}
      </div>
    </div>
  );
};

export default PrefectureSelector;
