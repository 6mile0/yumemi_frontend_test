import CheckBox from "../CheckBox/CheckBox";

const PrefectureSelector: React.FC = () => {
  return (
    <div>
      <CheckBox label="北海道" checked={false} onChange={() => {}} />
      <CheckBox label="青森県" checked={false} onChange={() => {}} />
    </div>
  );
};

export default PrefectureSelector;
