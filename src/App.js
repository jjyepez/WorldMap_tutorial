import React from "react";
import "./styles.css";

import Map from "./components/Map";
import "ol/ol.css";

export default function App() {
  return (
    <div className="App">
      <Map id="myMap" />
    </div>
  );
}
