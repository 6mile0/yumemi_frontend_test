import { useReducer } from "react";
import { PopulationData } from "../models/Population";

type State = {
  totalPopulation: PopulationData[];
  youngPopulation: PopulationData[];
  workingPopulation: PopulationData[];
  elderlyPopulation: PopulationData[];
};

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

const populationReducer = (state: State, action: Action) => {
  switch (action.key) {
    case "total":
      if (action.type === "add" && action.data) {
        return {
          ...state,
          totalPopulation: [...state.totalPopulation, action.data],
        };
      } else {
        return {
          ...state,
          totalPopulation: state.totalPopulation.filter(
            (data) => data.prefCode !== action.prefCode,
          ),
        };
      }
    case "young":
      if (action.type === "add" && action.data) {
        return {
          ...state,
          youngPopulation: [...state.youngPopulation, action.data],
        };
      } else {
        return {
          ...state,
          youngPopulation: state.youngPopulation.filter(
            (data) => data.prefCode !== action.prefCode,
          ),
        };
      }
    case "working":
      if (action.type === "add" && action.data) {
        return {
          ...state,
          workingPopulation: [...state.workingPopulation, action.data],
        };
      } else {
        return {
          ...state,
          workingPopulation: state.workingPopulation.filter(
            (data) => data.prefCode !== action.prefCode,
          ),
        };
      }
    case "elderly":
      if (action.type === "add" && action.data) {
        return {
          ...state,
          elderlyPopulation: [...state.elderlyPopulation, action.data],
        };
      } else {
        return {
          ...state,
          elderlyPopulation: state.elderlyPopulation.filter(
            (data) => data.prefCode !== action.prefCode,
          ),
        };
      }
    default:
      return state;
  }
};

export const usePopulationReducer = () => {
  const [state, dispatch] = useReducer(populationReducer, initialState);

  return { state, dispatch };
};
