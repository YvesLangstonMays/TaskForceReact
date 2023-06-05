interface Props {
  homeClick?: () => void;
  listClick?: () => void;
  instructionClick?: () => void;
}

const NavBar = ({ homeClick, listClick, instructionClick }: Props) => {
  return (
    <>
      <nav className="nav">
        <a href="/" className="site-title" id="listItem">
          Texas Teen Sexual Health Task Force
        </a>
        <ul>
          <li>
            <button
              className="btn btn-success"
              id="listItem"
              onClick={homeClick}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="btn btn-success"
              id="listItem"
              onClick={listClick}
            >
              List Search
            </button>
          </li>
          <li>
            <button
              className="btn btn-success"
              id="listItem"
              onClick={instructionClick}
            >
              Instructions
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
