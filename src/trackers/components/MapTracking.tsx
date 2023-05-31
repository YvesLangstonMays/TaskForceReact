import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const API_Key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const style = {
  height: "34vh",
  width: "96%",
};

const center = {
  lat: 29.7377637,
  lng: -95.3328939,
};

function MapTracking({ passedComp }: any) {
  const [userLocation, setUserLocation] = useState({
    lat: 1,
    lng: 1,
  });

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(passedComp[0]);
  });

  console.log(locations);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      }
    );
  }, []);
  const onLoad = () => {};

  return (
    <div className="theMap">
      <LoadScript googleMapsApiKey={API_Key}>
        <GoogleMap mapContainerStyle={style} zoom={9} center={center}>
          <MarkerF onLoad={onLoad} position={userLocation} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapTracking;
