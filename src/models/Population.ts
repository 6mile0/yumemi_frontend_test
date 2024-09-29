export type PopulationData = {
  prefCode: number;
  prefName: string;
  data: {
    year: number;
    value: number;
  }[];
};
