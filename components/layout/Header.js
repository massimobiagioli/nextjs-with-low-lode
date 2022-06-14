import { Nav, Navbar, NavLink } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand href="/">Orders Backoffice</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse id="navbarScroll">
        <Nav>
          <Nav.Link href="/">List</Nav.Link>
          <Nav.Link href="/create">Create</Nav.Link>
          <Nav.Link href="/workflows">Workflows</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
