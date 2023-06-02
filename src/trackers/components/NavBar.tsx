interface Props {
  homeClick?: () => void;
  listClick?: () => void;
  instructionClick?: () => void;
}

const NavBar = ({ homeClick, listClick, instructionClick }: Props) => {
  return (
    <>
      <nav className="nav">
        <a href="/" className="site-title">
          Texas Teen Sexual Health Task Force
        </a>
        <ul>
          <li>
            <button className="btn btn-primary" onClick={homeClick}>
              Home
            </button>
          </li>
          <li>
            <button className="btn btn-primary" onClick={listClick}>
              List Search
            </button>
          </li>
          <li>
            <button className="btn btn-primary" onClick={instructionClick}>
              Instructions
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
