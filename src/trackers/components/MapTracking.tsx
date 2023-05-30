import {
  GoogleMap,
  MarkerClustererF,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";

const API_Key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const center = {
  lat: 29.7377637,
  lng: -95.3328939,
};

const style = {
  height: "34vh",
  width: "96%",
};

const MapTracking = ({ passedComp }: any) => {
  let locations = [];
  for (var i = 0; i < passedComp[0].length; i++) {
    console.log(passedComp[0][i]);
    locations.push(passedComp[0][i]);
  }
  console.log(locations);
  //  Make no more changes, just need to figure out how
  //  to get rid of quotes around values in locations.
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
};

export default MapTracking;
