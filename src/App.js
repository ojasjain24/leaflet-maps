import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";
import { json } from "d3";
import { feature, mesh } from "topojson";
import "./App.css";
import HeatmapFunction from "./HeatMap";

function App() {
  const jsonUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

  const [data, setData] = useState(null);

  useEffect(() => {
    json(jsonUrl).then((topology) => {
      const { countries, land } = topology.objects;
      setData({
        land: feature(topology, land),
        interiors: mesh(topology, countries, (a, b) => a !== b),
      });
      console.log(data);
    });
  }, []);

  if (!data) return <text>LOADING</text>;

  return (
    <div className="App">
      <MapContainer
        center={[13.0139, 77.5704]}
        zoom={13}
        scrollWheelZoom={false}
      >
        {/* <GeoJSON data={data.land} />
        <GeoJSON data={data.interiors} />*/}
        <HeatmapFunction/>

        {/* <HeatmapLayer
          points={geojson.features}
          longitudeExtractor={(m) => m.geometry.coordinates[0]}
          latitudeExtractor={(m) => m.geometry.coordinates[1]}
          intensityExtractor={(m) => parseFloat(m.geometry.coordinates[1])}
          max={100}
          minOpacity={0.2}
        /> */}

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[13.0139, 77.5704]}>
          <Popup>
            Welcome to IUDX. <br /> IISC Banglore.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
