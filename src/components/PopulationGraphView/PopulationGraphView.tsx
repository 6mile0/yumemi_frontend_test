import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import styles from "./PopulationGraphView.module.css";
import { PopulationData } from "../../models/Population";
import { convertPopulationData } from "./functions/convertPopulationData";
import { generateRandomColors } from "./functions/randomColor";

const originData: PopulationData[] = [
  {
    prefCode: 8,
    prefName: "茨城県",
    data: [
      {
        year: 1980,
        value: 12817,
      },
      {
        year: 1985,
        value: 12707,
      },
      {
        year: 1990,
        value: 12571,
      },
      {
        year: 1995,
        value: 12602,
      },
      {
        year: 2000,
        value: 12199,
      },
      {
        year: 2005,
        value: 11518,
      },
      {
        year: 2010,
        value: 10888,
      },
      {
        year: 2015,
        value: 10133,
      },
      {
        year: 2020,
        value: 9302,
      },
      {
        year: 2025,
        value: 8431,
      },
      {
        year: 2030,
        value: 7610,
      },
      {
        year: 2035,
        value: 6816,
      },
      {
        year: 2040,
        value: 6048,
      },
      {
        year: 2045,
        value: 5324,
      },
    ],
  },
  {
    prefCode: 20,
    prefName: "栃木県",
    data: [
      {
        year: 1980,
        value: 2000,
      },
      {
        year: 1985,
        value: 3000,
      },
      {
        year: 1990,
        value: 4000,
      },
      {
        year: 1995,
        value: 5000,
      },
      {
        year: 2000,
        value: 6000,
      },
      {
        year: 2005,
        value: 7000,
      },
      {
        year: 2010,
        value: 8000,
      },
      {
        year: 2015,
        value: 9000,
      },
      {
        year: 2020,
        value: 10000,
      },
      {
        year: 2025,
        value: 11000,
      },
      {
        year: 2030,
        value: 12000,
      },
      {
        year: 2035,
        value: 13000,
      },
      {
        year: 2040,
        value: 14000,
      },
      {
        year: 2045,
        value: 15000,
      },
    ],
  },
  {
    prefCode: 40,
    prefName: "群馬県",
    data: [
      {
        year: 1980,
        value: 3000,
      },
      {
        year: 1985,
        value: 4000,
      },
      {
        year: 1990,
        value: 5000,
      },
      {
        year: 1995,
        value: 6000,
      },
      {
        year: 2000,
        value: 7000,
      },
      {
        year: 2005,
        value: 8000,
      },
      {
        year: 2010,
        value: 9000,
      },
      {
        year: 2015,
        value: 10000,
      },
      {
        year: 2020,
        value: 11000,
      },
      {
        year: 2025,
        value: 12000,
      },
      {
        year: 2030,
        value: 13000,
      },
      {
        year: 2035,
        value: 14000,
      },
      {
        year: 2040,
        value: 15000,
      },
      {
        year: 2045,
        value: 16000,
      },
    ],
  },
];

const PopulationGraphView: React.FC = () => {
  const data = convertPopulationData(originData);
  const colors = generateRandomColors();

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            label={{
              value: "年度",
              position: "bottom",
              fontSize: 18,
            }}
          />
          <YAxis
            label={{
              value: "人口数",
              position: "top",
              fontSize: 18,
              offset: 20,
            }}
          />
          <Tooltip />
          <Legend
            wrapperStyle={{ fontSize: 15 }}
            align="right"
            verticalAlign="top"
            height={36}
          />
          {originData.map((value) => {
            return (
              <Line
                type="monotone"
                dataKey={value.prefName}
                key={value.prefCode}
                activeDot={{ r: 8 }}
                stroke={colors[value.prefCode]}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PopulationGraphView;
