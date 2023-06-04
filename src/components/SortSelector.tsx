import React from "react";
import Button, {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

const SortSelector = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
      </Menu>
    </>
  );
};

export default SortSelector;
