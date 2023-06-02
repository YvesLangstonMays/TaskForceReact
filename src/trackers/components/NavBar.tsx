interface Props {
  homeClick?: () => void;
  searchClick?: () => void;
  instructionClick?: () => void;
}

const NavBar = ({ homeClick, searchClick, instructionClick }: Props) => {
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
            <button className="btn btn-primary" onClick={searchClick}>
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
