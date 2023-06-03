import { useEffect, useState } from "react";
import NavBar from "./trackers/components/NavBar";
import HomeTransitionBox from "./trackers/components/HomeTransitionBox";
import ZipCodeEntry from "./trackers/components/ZipCodeEntry";
import ListTransitionBox from "./trackers/components/ListTransitionBox";

function App() {
  const [homeIsActive, setHomeIsActive] = useState(0);
  const [listIsActive, setListIsActive] = useState(0);
  const [instructionsActive, setInstructionsActive] = useState(0);
  const [inactivateList, setInactivateList] = useState(0);
  const [inactivateHome, setInactivateHome] = useState(0);

  const homeClick = () => {
    setHomeIsActive(1);

    console.log("Home button pressed");
    setListIsActive(0);
    setInstructionsActive(0);

    console.log("Home:", homeIsActive);
  };
  const activateList = () => {
    setListIsActive(1);
    setInactivateList(0);
    setHomeIsActive(0);
    setInactivateHome(1);
  };

  const deactivateList = () => {
    setListIsActive(0);
    setInactivateList(1);
  };

  const listClick = () => {
    if (listIsActive == 1) {
      deactivateList();
    } else if (listIsActive == 0) {
      activateList();
    }
  };

  const instructionClick = () => {
    console.log("Instruction button pressed");
    setHomeIsActive(0);
    setListIsActive(0);
    setInstructionsActive(1);
    console.log("Instructions:", instructionsActive);
  };
  return (
    <>
      <div className="bodyDiv">
        <NavBar
          homeClick={homeClick}
          listClick={listClick}
          instructionClick={instructionClick}
        ></NavBar>
        <div className="nav"></div>
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
            <img src="src/images/twc final.png" className="twc" />
            <img src="src/images/task force final.png" className="tff" />
          </div>
          <div className="zipbox">
            <ZipCodeEntry />
          </div>
          <div className="homeTransitionBox" data-active={listIsActive}>
            {listIsActive && <HomeTransitionBox></HomeTransitionBox>}
          </div>
          <div
            className="ListTransitionBox"
            data-inactivate={inactivateList}
            data-active={listIsActive}
          >
            {listIsActive && <ListTransitionBox></ListTransitionBox>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
