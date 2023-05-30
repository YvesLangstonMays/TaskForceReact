import React from "react";
import GoogleMapReact from "google-map-react";
import { MarkerF, Marker, useJsApiLoader } from "@react-google-maps/api";

const MapTracking = ({ passedComp }: any) => {
  const API_Key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const defaultProps = {
    center: {
      lat: 29.7377637,
      lng: -95.3328939,
    },
    zoom: 9,
  };
  return (
    <div>
      <div className="theMap" style={{ height: "36vh", width: "90%" }}>
        isLoaded &&
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_Key }}
          center={defaultProps.center}
          zoom={defaultProps.zoom}
        >
          <MarkerF position={defaultProps.center}></MarkerF>
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default MapTracking;
