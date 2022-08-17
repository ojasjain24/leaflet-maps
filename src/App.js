import { MapContainer, TileLayer, Marker, Popup  } from "react-leaflet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MapContainer center={[13.0139, 77.5704]} zoom={13} scrollWheelZoom={false}>
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
