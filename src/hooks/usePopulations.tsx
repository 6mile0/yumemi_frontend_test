import { Prefecture } from "../models/Prefecture";
import { usePopulationReducer } from "./usePopulationReducer";

const fetchPopulation = async (prefCode: number) => {
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

  return res.result.data[0].data;
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
      fetchPopulation(prefecture.prefCode).then((data) => {
        const value = {
          prefCode: prefecture.prefCode,
          prefName: prefecture.prefName,
          data: data,
        };

        dispatch({
          key: "total",
          type: "add",
          prefCode: prefecture.prefCode,
          data: value,
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
