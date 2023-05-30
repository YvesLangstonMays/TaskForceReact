import SubmissionBox from "./trackers/components/SubmissionBox";

function App() {
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
            <img src="src/images/twc final.png" className="twc" />
            <img src="src/images/task force final.png" className="tff" />
          </div>
          <div className="zipbox">
            <SubmissionBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
