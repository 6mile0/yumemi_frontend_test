import Header from "../components/Header/Header";
import PopulationGraphView from "../components/PopulationGraphView/PopulationGraphView";
import PrefectureSelector from "../components/PrefectureSelector/PrefectureSelector";

const TopPage: React.FC = () => {
  return (
    <>
      <Header />
      <PrefectureSelector />
      <PopulationGraphView />
    </>
  );
};
export default TopPage;
