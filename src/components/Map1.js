import React from "react";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

/* 
Render a map that shows the chosen fast food branches in your area.
Uses Leaflet API - https://leafletjs.com/reference.html
<MapContainer> - determins the map's initial position, zoom and size.
<TileLayer> - the map consists of tiles. Each tile covers a different section of the map.
<Marker> - each tile will contain a marker in a certain coordinate if the given fast food chain has a branch in that coordinate. Marker will display the logo of the food chain.
<Popup> - will show up when clicking on a marker. Will display the branch name and the fast food chain logo.
*/
const Map1 = ({ locations, logo }) => {
  const position = [32.0653, 34.7818]; // Initial map center position
  // console.log(locations);

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {locations.map((location) => {
        const customIcon = L.divIcon({
          className: "custom-icon",
          iconSize: [30, 30],
          html: `<img src="${logo}" alt="Custom Icon" width="30" height="30" />`,
        });
        return (
          <Marker
            key={location.name}
            position={[
              location.coordinates.latitude,
              location.coordinates.longitude,
            ]}
            icon={customIcon}
          >
            <Popup>
              <div>
                <img src={logo} alt="Logo" width="30" height="30" />
              </div>
              <p>{location.name}</p>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map1;
