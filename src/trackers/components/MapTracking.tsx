import {
  GoogleMap,
  LoadScript,
  MarkerClustererF,
  MarkerF,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";

const API_Key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const style = {
  height: "34vh",
  width: "96%",
};

// const center = {
//   lat: 29.7377637,
//   lng: -95.3328939,
// };

function MapTracking({ passedComp }: any) {
  const [userLocation, setUserLocation] = useState({
    lat: 1,
    lng: 1,
  });

  const locations = passedComp.map((val: { [x: string]: any }) => {
    let latlngList = {
      lat: val["Latitude"],
      lng: val["Longitude"],
      siteName: val["Site_Name"],
      address: val["Address_1"],
      city: val["City"],
      county: val["County"],
    };
    return latlngList;
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

  function createKey(location: { lat: any; lng: any }) {
    return location.lat + location.lng;
  }

  return (
    <div className="theMap">
      <LoadScript googleMapsApiKey={API_Key}>
        <GoogleMap mapContainerStyle={style} zoom={9} center={userLocation}>
          {/* <MarkerF onLoad={onLoad} position={userLocation} /> */}
          <MarkerClustererF>
            {(clusterer) =>
              locations.map(
                (location: google.maps.LatLng | google.maps.LatLngLiteral) => (
                  <MarkerF
                    key={createKey(location)}
                    position={location}
                    clusterer={clusterer}
                  />
                )
              )
            }
          </MarkerClustererF>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapTracking;
