import Header from "../components/Header/Header";
import PopulationGraphView from "../components/PopulationGraphView/PopulationGraphView";
import PrefectureSelector from "../components/PrefectureSelector/PrefectureSelector";
import { usePopulations } from "../hooks/usePopulations";
import { usePrefectures } from "../hooks/usePrefectures";

import styles from "./TopPage.module.css";

const TopPage: React.FC = () => {
  const { prefectureLists, isLoading } = usePrefectures();
  const { population, prefectureHandler } = usePopulations();

  return (
    <>
      <Header />
      <div className={styles.container}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          prefectureLists && (
            <PrefectureSelector
              prefectures={prefectureLists}
              prefectureHandler={prefectureHandler}
            />
          )
        )}
        <PopulationGraphView populationData={population.totalPopulation} />
      </div>
    </>
  );
};
export default TopPage;
