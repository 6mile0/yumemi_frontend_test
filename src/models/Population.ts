export type PopulationData = {
  prefCode: number;
  prefName: string;
  data: {
    year: number;
    value: number;
  }[];
};

export type RESASPopulationResponse = {
  boundaryYear: number;
  data: {
    label: string;
    data: Array<{
      year: number;
      value: number;
    }>;
  }[];
};

export type PopulationState = {
  totalPopulation: PopulationData[];
  youngPopulation: PopulationData[];
  workingPopulation: PopulationData[];
  elderlyPopulation: PopulationData[];
};

export const populationType = {
  total: "総人口",
  young: "年少人口",
  working: "生産年齢人口",
  elderly: "老年人口",
} as const;
