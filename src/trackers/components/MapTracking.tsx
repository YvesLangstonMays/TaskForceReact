import { GoogleMap, Marker, LoadScript, MarkerF } from "@react-google-maps/api";

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
  let dataList = new Array();

  dataList.push(passedComp);
  dataList = dataList[0][0];
  console.log(dataList);
  const onLoad = (marker: any) => {
    console.log("marker: ", marker);
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
