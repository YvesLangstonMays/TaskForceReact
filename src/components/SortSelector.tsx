import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const SortSelector = () => {
  return (
    <>
      <DropdownButton id="dropdown-basic-button" title="Sort">
        <Dropdown.Item href="#/action-1">County</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Zipcode</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Site Name</Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default SortSelector;
