import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'
import mapIcon from '../../assets/map_icon.png'
import 'leaflet/dist/leaflet.css';
import './Map.css';


export const Map = () => {

  const center = [40.4227, -3.7039];
  const zoom = 11;
  const greenIcon = L.icon({
    iconUrl: mapIcon,
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41]
  });

    return (
      <MapContainer className="map" center={center} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={greenIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        
      </MapContainer>
  );
  
}

