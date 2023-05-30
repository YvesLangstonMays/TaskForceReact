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

function strToObj(e: any) {
  var obj = new Function("return" + e);
  return obj();
}

const MapTracking = ({ passedComp }: any) => {
  console.log(passedComp[0]);
  const dataList = [];
  dataList.push(passedComp);
  const locations = [];
  for (var i = 0; i < dataList[0][0].length; i++) {
    let current = dataList[0][0][i];
    current = strToObj(current);
    locations.push(dataList[0][0][i]);
  }
  console.log(locations);
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
