import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  // Navbar contents to be displayed
  return (
    <>
      <Nav className="navbar" activeKey="/home">
        <div className="logospace">
          <img src={logo} style={{ marginLeft: "-35px" }} alt="logo" />
        </div>
        <div className="margin">
          <Nav.Item className="item">
            <Nav.Link href="./" className="colorset hp1">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="item" >

            <Link to="./assessment" eventKey="link-1" className="colorset hp1">
              College Finder
            </Link>

          </Nav.Item>
          <Nav.Item className="item">
            <Nav.Link eventKey="link-2" className="colorset hp1">
              Pricing
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="item">
            <Nav.Link eventKey="link-2" className="colorset hp1">
              Logout
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
