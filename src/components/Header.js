import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar,
  NavbarBrand,
  FormControl,
  Nav,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <NavbarBrand>
            <Link to="/">Shopping Cart</Link>
          </NavbarBrand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              placeholder="Search a Product"
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{10}</Badge>
              </Dropdown.Toggle>
              <DropdownMenu style={{ minWidth: 370 }}>
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
