import GoogleMapReact from "google-map-react";
import { MarkerF } from "@react-google-maps/api";

const MapTracking = ({ passedComp }: any) => {
  const API_Key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  let dataList = new Array();
  const defaultProps = {
    center: {
      lat: 29.7377637,
      lng: -95.3328939,
    },
    zoom: 9,
  };
  dataList.push(passedComp);
  dataList = dataList[0][0];
  console.log(dataList);
  //   console.log(passedComp[indexes]);

  return (
    <div>
      <div className="theMap" style={{ height: "36vh", width: "90%" }}>
        isLoaded &&
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_Key }}
          center={defaultProps.center}
          zoom={defaultProps.zoom}
        >
          <MarkerF
            position={defaultProps.center}
            icon={
              "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            }
          ></MarkerF>
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default MapTracking;
