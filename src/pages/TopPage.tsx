import GraphViewSelector from "../components/GraphViewSelector/GraphViewSelector";
import Header from "../components/Header/Header";
import PrefectureSelector from "../components/PrefectureSelector/PrefectureSelector";
import { usePopulations } from "../hooks/usePopulations";
import { usePrefectures } from "../hooks/usePrefectures";

import styles from "./TopPage.module.css";

const TopPage: React.FC = () => {
  const { prefectures, isLoading } = usePrefectures();
  const { population, prefectureHandler } = usePopulations();

  return (
    <>
      <Header />
      <div className={styles.container}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          prefectures && (
            <PrefectureSelector
              prefectures={prefectures}
              prefectureHandler={prefectureHandler}
            />
          )
        )}
        <GraphViewSelector
          totalPopulation={population.totalPopulation}
          youngPopulation={population.youngPopulation}
          elderlyPopulation={population.elderlyPopulation}
          workingPopulation={population.workingPopulation}
        />
      </div>
    </>
  );
};
export default TopPage;
