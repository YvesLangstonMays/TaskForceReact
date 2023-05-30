import SubmissionBox from "./list-tracker/components/SubmissionBox";
import GoogleMapReact from "google-map-react";
import MyMap from "./list-tracker/components/MyMap";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const baseURL = "localhost:5173";

function App() {
  const API_Key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  interface mapPropTypes {
    center: [];
    zoom: number;
    desiredCoords: any;
  }

  const defaultProps = {
    center: {
      lat: 29.857629892,
      lng: -95.393115648,
    },
    zoom: 9,
  };

  return (
    <>
      <div className="bodyDiv">
        <div className="mainDiv">
          <div className="text">
            <div className="wrapper">
              <div id="T" className="letter">
                T
              </div>
              <div className="shadow">T</div>
            </div>
            <div className="wrapper">
              <div id="E" className="letter">
                E
              </div>
              <div className="shadow">E</div>
            </div>
            <div className="wrapper">
              <div id="X" className="letter">
                X
              </div>
              <div className="shadow">X</div>
            </div>
            <div className="wrapper">
              <div id="A" className="letter">
                A
              </div>
              <div className="shadow">A</div>
            </div>
            <div className="wrapper">
              <div id="S" className="letter">
                S
              </div>
              <div className="shadow">S</div>
            </div>

            <div className="wrapper">
              <div id="T" className="letter">
                {" "}
              </div>
              <div className="shadow"> </div>
            </div>
            <div className="wrapper">
              <div id="T" className="letter">
                {" "}
              </div>
              <div className="shadow"> </div>
            </div>
            <div className="wrapper">
              <div id="T" className="letter">
                {" "}
              </div>
              <div className="shadow"> </div>
            </div>
            <div className="wrapper">
              <div id="T" className="letter">
                {" "}
              </div>
              <div className="shadow"> </div>
            </div>
            <div className="wrapper">
              <div id="T" className="letter">
                {" "}
              </div>
              <div className="shadow"> </div>
            </div>
            <div className="wrapper">
              <div id="T" className="letter">
                {" "}
              </div>
              <div className="shadow"> </div>
            </div>

            <div className="wrapper">
              <div id="T" className="letter">
                T
              </div>
              <div className="shadow">T</div>
            </div>
            <div className="wrapper">
              <div id="E" className="letter">
                E
              </div>
              <div className="shadow">E</div>
            </div>
            <div className="wrapper">
              <div id="E" className="letter">
                E
              </div>
              <div className="shadow">E</div>
            </div>
            <div className="wrapper">
              <div id="N" className="letter">
                N
              </div>
              <div className="shadow">N</div>
            </div>
            <div className="wrapper">
              <div id="S" className="letter">
                S
              </div>
              <div className="shadow">S</div>
            </div>
          </div>

          <div className="logosDiv">
            <img src="twc final.png" className="twc" />
            <img src="task force final.png" className="tff" />
          </div>
          <div className="zipbox">
            <SubmissionBox />
          </div>

          <div>
            <div className="theMap" style={{ height: "36vh", width: "90%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: API_Key }}
                center={defaultProps.center}
                zoom={defaultProps.zoom}
              >
                <div className="MyMap">
                  <Marker position={defaultProps.center} visible={true} />
                  {/* <MyMap lat={59.955412} lng={30.337844} text={"B"} /> */}
                </div>
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
