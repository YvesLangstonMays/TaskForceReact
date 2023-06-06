import { useState } from "react";
import NavBar from "./components/NavBar";
import HomeTransitionBox from "./components/HomeTransitionBox";
import ZipCodeEntry from "./components/ZipCodeEntry";
import ListTransitionBox from "./components/ListTransitionBox";
import InstructionsTransitionBox from "./components/InstructionsTransitionBox";

function App() {
  const [homeIsActive, setHomeIsActive] = useState(0);

  const [listIsActive, setListIsActive] = useState(0);

  const [instructionsActive, setInstructionsActive] = useState(0);

  const [zipButtonID, setZipButtonID] = useState("");

  const homeClick = () => {
    if (listIsActive == 1) {
      setListIsActive(0);
      setHomeIsActive(1);
    } else if (instructionsActive == 1) {
      setInstructionsActive(0);
      setHomeIsActive(1);
    } else if (homeIsActive == 1) {
      setHomeIsActive(0);
    }
  };

  const listClick = () => {
    if (instructionsActive == 1) {
      setInstructionsActive(0);
      setListIsActive(1);
    } else if (listIsActive == 1) {
      setListIsActive(0);
    } else if (homeIsActive == 1) {
      setHomeIsActive(0);
      setListIsActive(1);
    } else if (listIsActive == 0) {
      setListIsActive(1);
    }
  };

  const instructionClick = () => {
    if (listIsActive == 1) {
      setListIsActive(0);
      setInstructionsActive(1);
    } else if (instructionsActive == 1) {
      setInstructionsActive(0);
    } else {
      setInstructionsActive(1);
    }
  };

  const listClickTimer = () => {
    setTimeout(listClick, 500);
  };

  const homeClickTimer = () => {
    setTimeout(homeClick, 500);
  };

  const instructionClickTimer = () => {
    setTimeout(instructionClick, 500);
  };

  return (
    <>
      <div className="bodyDiv">
        <NavBar
          homeClick={homeClickTimer}
          listClick={listClickTimer}
          instructionClick={instructionClickTimer}
        ></NavBar>
        <div className="nav"></div>
        <div className="mainDiv">
          <div className="titleText">
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
            {/* <img src="src/images/twc final.png" className="twc" />
            <img src="src/images/task force final.png" className="tff" /> */}
          </div>
          <div className="zipbox">
            <ZipCodeEntry
              setZipButtonID={setZipButtonID}
              zipButtonID={zipButtonID}
            />
          </div>
          <div className="homeTransitionBox" data-active={homeIsActive}>
            {!!homeIsActive && <HomeTransitionBox></HomeTransitionBox>}
          </div>
          <div className="ListTransitionBox" data-active={listIsActive}>
            {!!listIsActive && (
              <ListTransitionBox
                setZipButtonID={setZipButtonID}
                setListIsActive={setListIsActive}
                setHomeIsActive={setHomeIsActive}
              />
            )}
          </div>
          <div
            className="InstructionsTransitionBox"
            data-active={instructionsActive}
          >
            {!!instructionsActive && (
              <InstructionsTransitionBox></InstructionsTransitionBox>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
