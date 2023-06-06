import Button from "@mui/material/Button";

interface Props {
  homeClick?: () => void;
  listClick?: () => void;
  instructionClick?: () => void;
}

const NavBar = ({ homeClick, listClick, instructionClick }: Props) => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <Button
              color="success"
              variant="contained"
              className="btn btn-success"
              id="listItem"
              onClick={homeClick}
            >
              Home
            </Button>
          </li>
          <li>
            <Button
              color="success"
              variant="contained"
              className="btn btn-success"
              id="listItem"
              onClick={listClick}
            >
              List Search
            </Button>
          </li>
          <li>
            <Button
              color="success"
              variant="contained"
              className="btn btn-success"
              id="listItem"
              onClick={instructionClick}
            >
              Instructions
            </Button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
