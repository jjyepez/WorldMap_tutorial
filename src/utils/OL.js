import Map from "ol/Map";
import View from "ol/View";
import XYZ from "ol/source/XYZ";
import VectorSource from "ol/source/Vector";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { fromLonLat } from "ol/proj";

module.exports = {
  Map,
  View,
  TileLayer,
  VectorLayer,
  XYZ,
  VectorSource,
  fromLonLat
};
