import useSWR from "swr";
import { Prefecture } from "../models/Prefecture";

type PrefecturesResponse = {
  message: string;
  result: Prefecture[];
};

const fetcher = async (url: string) => {
  switch (import.meta.env.MODE) {
    case "development": {
      return await fetch(url, {
        headers: {
          "X-API-KEY": import.meta.env.VITE_RESAS_API_KEY,
        },
      })
        .then((res) => res.json())
        .catch(() => {
          throw new Error("Failed to prefectures data");
        });
    }
    default: {
      return await fetch(url)
        .then((res) => res.json())
        .catch(() => {
          throw new Error("Failed to prefectures data");
        });
    }
  }
};

export const usePrefectures = () => {
  const { data, error, isLoading } = useSWR<PrefecturesResponse>(
    import.meta.env.MODE === "development"
      ? "https://opendata.resas-portal.go.jp/api/v1/prefectures"
      : "/api/prefectures",
    fetcher,
  );

  return {
    prefectures: data?.result,
    isLoading: isLoading,
    isError: error,
  };
};
