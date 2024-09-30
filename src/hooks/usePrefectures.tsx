import useSWR from "swr";
import { Prefecture } from "../models/Prefecture";

type PrefecturesResponse = {
  message: string;
  result: Prefecture[];
};

const fetcher = async (url: string) => {
  return await fetch(url, {
    headers: {
      "X-API-KEY": import.meta.env.VITE_RESAS_API_KEY,
    },
  }).then((res) => res.json());
};

export const usePrefectures = () => {
  const { data, error, isLoading } = useSWR<PrefecturesResponse>(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    fetcher,
  );

  return {
    prefectures: data?.result,
    isLoading: isLoading,
    isError: error,
  };
};
