import { populationType, RESASPopulationResponse } from "../models/Population";
import { Prefecture } from "../models/Prefecture";
import { usePopulationReducer } from "./usePopulationReducer";

const fetchPopulation = async (
  prefCode: number,
): Promise<RESASPopulationResponse> => {
  const res = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
    {
      headers: {
        "X-API-KEY": import.meta.env.VITE_RESAS_API_KEY,
      },
    },
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch population data");
    }
    return res.json();
  });

  return res.result;
};

export const usePopulations = () => {
  const { state, dispatch } = usePopulationReducer();

  const prefectureHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    prefecture: Prefecture,
  ) => {
    const isExist = state.totalPopulation.find(
      (data) => data.prefCode === prefecture.prefCode,
    );

    if (event.target.checked && !isExist) {
      fetchPopulation(prefecture.prefCode).then((res) => {
        res.data.map((r) => {
          const value = {
            prefCode: prefecture.prefCode,
            prefName: prefecture.prefName,
            data: r.data,
          };

          switch (r.label) {
            case populationType.total: {
              dispatch({
                key: "total",
                type: "add",
                prefCode: prefecture.prefCode,
                data: value,
              });
              break;
            }
            case populationType.young: {
              dispatch({
                key: "young",
                type: "add",
                prefCode: prefecture.prefCode,
                data: value,
              });
              break;
            }
            case populationType.working: {
              dispatch({
                key: "working",
                type: "add",
                prefCode: prefecture.prefCode,
                data: value,
              });
              break;
            }
            case populationType.elderly: {
              dispatch({
                key: "elderly",
                type: "add",
                prefCode: prefecture.prefCode,
                data: value,
              });
              break;
            }
            default:
              throw new Error("Invalid population data");
          }
        });
      });
    } else {
      dispatch({ key: "total", type: "remove", prefCode: prefecture.prefCode });
    }
  };

  return {
    population: state,
    prefectureHandler: prefectureHandler,
  };
};
