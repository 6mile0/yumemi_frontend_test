import Header from "../components/Header/Header";
import PopulationGraphView from "../components/PopulationGraphView/PopulationGraphView";
import PrefectureSelector from "../components/PrefectureSelector/PrefectureSelector";

import styles from "./TopPage.module.css";

const TopPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <PrefectureSelector />
        <PopulationGraphView />
      </div>
    </>
  );
};
export default TopPage;
