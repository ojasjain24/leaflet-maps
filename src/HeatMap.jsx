import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L, { setOptions } from "leaflet";
import "leaflet.heat";
import { geojson } from "./heatmapData";

export default function HeatmapFunction() {
  const map = useMap();
  useEffect(() => {
    const points = geojson
      ? geojson.features.map((p) => {
          return [
            p.geometry.coordinates[1],
            p.geometry.coordinates[0],
            p.properties.rating,
          ]; // lat lng intensity
        })
      : [];
    L.heatLayer(points, {
      radius: 15,

      minOpacity: 0.2,
      //   gradient: {
      //     0.0: "green",
      //     0.5: "yellow",
      //     1.0: "red",
      //   },
    }).addTo(map);
  }, []);
}
