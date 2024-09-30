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

type PopulationGraphViewProps = {
  populationData: PopulationData[];
};

const PopulationGraphView: React.FC<PopulationGraphViewProps> = ({
  populationData,
}: PopulationGraphViewProps) => {
  const data = convertPopulationData(populationData);
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
          {populationData.map((value) => {
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
