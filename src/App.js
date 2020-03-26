import React, { useState, useEffect } from "react";
import "./styles.css";
import "ol/ol.css";

import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import Scroller from "./components/Scroller";
import DataTableCountries from "./components/DataTable_Countries";

import DataSource from "./utils/DataSource";

export default function App() {
  const [data, updateData] = useState(null);

  useEffect(() => {
    let data = {};
    (async () => {
      let rslt = await DataSource.loadData();
      //window.data = data;
      let groupedDataRaw = DataSource.groupByCountry({
        data: rslt.data,
        groupField: 3,
        sumFields: [7, 8, 9]
      });
      let groupedData = Object.keys(groupedDataRaw).map(country => {
        return [country, ...groupedDataRaw[country]];
      });
      let grouped = groupedData.sort((antItem, item) => item > antItem);
      grouped.sort((a, b) => {
        return b[1] - a[1];
      });
      updateData(grouped);
    })();
  }, []);

  // useEffect(() => {
  //   console.log("data cambió");
  // }, [data]);

  return (
    <div className="App">
      <Map id="myMap" />
      <Sidebar>
        <legend>Fecha</legend>
        <legend>Paises</legend>
        <Scroller>
          <DataTableCountries data={data} />
        </Scroller>
      </Sidebar>
    </div>
  );
}
