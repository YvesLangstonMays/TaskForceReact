import { useState } from "react";
import NavBar from "./trackers/components/NavBar";
import HomeTransitionBox from "./trackers/components/HomeTransitionBox";
import ZipCodeEntry from "./trackers/components/ZipCodeEntry";
import ListTransitionBox from "./trackers/components/ListTransitionBox";

function App() {
  const [homeIsActive, setHomeIsActive] = useState(0);

  const [listIsActive, setListIsActive] = useState(0);

  const [instructionsActive, setInstructionsActive] = useState(0);

  const homeClick = () => {
    console.log("Home:", homeIsActive);
  };

  const listClick = () => {
    console.log("List button pressed");
    if (listIsActive == 0) {
      setListIsActive(1);
    } else {
      setListIsActive(0);
    }
    console.log("List:", listIsActive);
  };

  const listClickTimer = () => {
    setTimeout(listClick, 1000);
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
          listClick={listClickTimer}
          instructionClick={instructionClick}
        ></NavBar>
        <div className="nav"></div>
        <div className="mainDiv">
          <div className="text">
            <div className="wrapper">
              <div id="C" className="letter">
                C
              </div>
              <div className="shadow">C</div>
            </div>
            <div className="wrapper">
              <div id="E" className="letter">
                L
              </div>
              <div className="shadow">L</div>
            </div>
            <div className="wrapper">
              <div id="X" className="letter">
                I
              </div>
              <div className="shadow">I</div>
            </div>
            <div className="wrapper">
              <div id="A" className="letter">
                N
              </div>
              <div className="shadow">N</div>
            </div>
            <div className="wrapper">
              <div id="S" className="letter">
                I
              </div>
              <div className="shadow">I</div>
            </div>
            <div className="wrapper">
              <div id="S" className="letter">
                C
              </div>
              <div className="shadow">C</div>
            </div>

            <div className="wrapper">
              <div id="T" className="letter">
                {" "}
              </div>
              <div className="shadow"> </div>
            </div>

            <div className="wrapper">
              <div id="F" className="letter">
                F
              </div>
              <div className="shadow">F</div>
            </div>
            <div className="wrapper">
              <div id="I" className="letter">
                I
              </div>
              <div className="shadow">I</div>
            </div>
            <div className="wrapper">
              <div id="N" className="letter">
                N
              </div>
              <div className="shadow">N</div>
            </div>
            <div className="wrapper">
              <div id="D" className="letter">
                D
              </div>
              <div className="shadow">D</div>
            </div>
            <div className="wrapper">
              <div id="E" className="letter">
                E
              </div>
              <div className="shadow">E</div>
            </div>
            <div className="wrapper">
              <div id="R" className="letter">
                R
              </div>
              <div className="shadow">R</div>
            </div>
          </div>
          <div className="logosDiv">
            <img src="src/images/twc final.png" className="twc" />
            <img src="src/images/task force final.png" className="tff" />
          </div>
          <div className="zipbox">
            <ZipCodeEntry />
          </div>
          <div className="homeTransitionBox" data-active={homeIsActive}>
            {homeIsActive && <HomeTransitionBox></HomeTransitionBox>}
          </div>
          <div className="ListTransitionBox" data-active={listIsActive}>
            {listIsActive && <ListTransitionBox></ListTransitionBox>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
