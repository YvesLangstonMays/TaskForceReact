import { BsChevronDown } from "react-icons/bs";
import Button, { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const SortSelector = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
