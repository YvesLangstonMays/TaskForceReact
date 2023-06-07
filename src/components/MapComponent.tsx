import { RectangleF } from "@react-google-maps/api";
import {
  GoogleMap,
  LoadScript,
  MarkerClustererF,
  MarkerF,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";

const API_Key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const style = {
  height: "25rem",
  width: "100%",
};

function MapComponent({ passedComp }: any) {
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
    console.log(
      "createkey lat: ",
      typeof location.lat,
      " createkey lng: ",
      typeof location.lng
    );
    console.log(location.lat + "\n" + location.lng);
    return location.lat + location.lng;
  }

  useEffect(() => {}, [GoogleMap]);

  return (
    <div className="theMap">
      <LoadScript googleMapsApiKey={API_Key}>
        <GoogleMap mapContainerStyle={style} zoom={6} center={userLocation}>
          <MarkerF position={userLocation} label={"You"} />
          <MarkerClustererF zoomOnClick={true}>
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

export default MapComponent;
