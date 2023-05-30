import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const API_Key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const style = {
  height: "34vh",
  width: "96%",
};

function updateLongitude(row: Locations, longitude: number) {
  row.lng = longitude;
}

function updateLatitude(row: Locations, latitude: number) {
  row.lat = latitude;
}

interface Locations {
  lat: number;
  lng: number;
}

let userLocation = {
  lat: 1,
  lng: 1,
};

navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
  userLocation.lat = position.coords.latitude;
  userLocation.lng = position.coords.longitude;
});

const center = {
  lat: 29.7377637,
  lng: -95.3328939,
};

console.log(userLocation);
console.log(center);

function MapTracking({ passedComp }: any) {
  const onLoad = () => {};

  return (
    <div className="theMap">
      <LoadScript googleMapsApiKey={API_Key}>
        <GoogleMap mapContainerStyle={style} zoom={9} center={center}>
          <MarkerF onLoad={onLoad} position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapTracking;
