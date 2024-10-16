import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PopulationGraphView from "../PopulationGraphView/PopulationGraphView";
import { PopulationState } from "../../models/Population";
import { populationType } from "../../models/Population";

const GraphViewSelector: React.FC<PopulationState> = ({
  totalPopulation,
  youngPopulation,
  workingPopulation,
  elderlyPopulation,
}: PopulationState) => {
  return (
    <Tabs>
      <TabList>
        {Object.values(populationType).map((type) => (
          <Tab key={type}>{type}</Tab>
        ))}
      </TabList>
      <TabPanel>
        <PopulationGraphView populationData={totalPopulation} />
      </TabPanel>
      <TabPanel>
        <PopulationGraphView populationData={youngPopulation} />
      </TabPanel>
      <TabPanel>
        <PopulationGraphView populationData={workingPopulation} />
      </TabPanel>
      <TabPanel>
        <PopulationGraphView populationData={elderlyPopulation} />
      </TabPanel>
    </Tabs>
  );
};

export default GraphViewSelector;
