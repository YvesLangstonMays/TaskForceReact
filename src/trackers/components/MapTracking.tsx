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
  console.log(passedComp[0]);
  let dataList = Object.assign({}, passedComp[0]);
  console.log(dataList);
  const onLoad = () => {
    console.log();
  };
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
