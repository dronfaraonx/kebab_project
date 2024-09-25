import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

function SortBtn() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} >
        <DropdownToggle caret>Sort</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Distance</DropdownItem>
          <DropdownItem>Price</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

SortBtn.propTypes = {
  direction: PropTypes.string,
};

export default SortBtn;