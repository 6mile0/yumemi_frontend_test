import { useReducer } from "react";
import { PopulationData, PopulationState } from "../models/Population";

type Action = {
  key: "total" | "young" | "working" | "elderly";
  type: "add" | "remove";
  prefCode: number;
  data?: PopulationData;
};

const initialState = {
  totalPopulation: [],
  youngPopulation: [],
  workingPopulation: [],
  elderlyPopulation: [],
};

const populationReducer = (state: PopulationState, action: Action) => {
  if (action.type === "remove") {
    return {
      ...state,
      totalPopulation: state.totalPopulation.filter(
        (data) => data.prefCode !== action.prefCode,
      ),
      youngPopulation: state.youngPopulation.filter(
        (data) => data.prefCode !== action.prefCode,
      ),
      workingPopulation: state.workingPopulation.filter(
        (data) => data.prefCode !== action.prefCode,
      ),
      elderlyPopulation: state.elderlyPopulation.filter(
        (data) => data.prefCode !== action.prefCode,
      ),
    };
  } else if (action.type === "add" && action.data) {
    switch (action.key) {
      case "total":
        return {
          ...state,
          totalPopulation: [...state.totalPopulation, action.data],
        };
      case "young":
        return {
          ...state,
          youngPopulation: [...state.youngPopulation, action.data],
        };
      case "working":
        return {
          ...state,
          workingPopulation: [...state.workingPopulation, action.data],
        };
      case "elderly":
        return {
          ...state,
          elderlyPopulation: [...state.elderlyPopulation, action.data],
        };
    }
  } else {
    return state;
  }
};

export const usePopulationReducer = () => {
  const [state, dispatch] = useReducer(populationReducer, initialState);

  return { state, dispatch };
};
