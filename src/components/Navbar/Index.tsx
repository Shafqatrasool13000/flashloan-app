import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { NavbarStyled } from "./style";
import { ConnectKitButton } from "connectkit";

function BasicExample() {
  return (
    <NavbarStyled>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavLink className="navbar-brand" to="/">
            Demo
          </NavLink>
          <NavLink className="navbar-brand d-lg-none" to="/">
            <ConnectKitButton />
            <ConnectKitButton.Custom>
              {({ isConnected, show, truncatedAddress, ensName }) => {
                return (
                  <button onClick={show} className="connect-btn">
                    {isConnected
                      ? ensName ?? truncatedAddress
                      : "Connect Wallet"}
                  </button>
                );
              }}
            </ConnectKitButton.Custom>
          </NavLink>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto d-flex justify-content-between">
              <NavLink className="nav-link" to="/create">
                Strategies
              </NavLink>
              <NavLink className="nav-link" to="/create">
                Opportunities
              </NavLink>
              <NavLink className="nav-link" to="/create">
                Create
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <NavLink className="navbar-brand d-lg-block d-none" to="/">
          <ConnectKitButton.Custom>
              {({ isConnected, show, truncatedAddress, ensName }) => {
                return (
                  <button onClick={show} className="connect-btn">
                    {isConnected
                      ? ensName ?? truncatedAddress
                      : "Connect Wallet"}
                  </button>
                );
              }}
            </ConnectKitButton.Custom>
          </NavLink>
        </Container>
      </Navbar>
    </NavbarStyled>
  );
}

export default BasicExample;
