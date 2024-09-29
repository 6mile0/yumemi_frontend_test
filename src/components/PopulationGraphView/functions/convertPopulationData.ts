import { PopulationData } from "../../../models/Population";

export type GraphData = {
  year: number;
  [key: string]: number;
};

export const convertPopulationData = (
  populations: PopulationData[],
): GraphData[] => {
  const data: GraphData[] = [];
  const years = populations[0].data.map((data) => data.year);
  years.forEach((yearValue, index) => {
    const item: GraphData = {
      year: yearValue,
    };
    populations.forEach((population) => {
      item[population.prefName] = population.data[index].value;
    });
    data.push(item);
  });
  return data;
};
