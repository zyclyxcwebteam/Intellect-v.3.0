import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Row,
  Col,
} from "reactstrap";

import Logo from "../../../static/images/logo-white.png";
import "./Navbar.css";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const { active } = props;
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">
          <img src={Logo} alt="ZYCLYX" className="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" className={`${active === "home" ? "active" : null}`}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/aboutus"
                className={`${active === "about" ? "active" : null}`}
              >
                About Us
              </Link>
            </NavItem>

            <UncontrolledDropdown nav inNavbar className="position-static">
              <DropdownToggle
                nav
                caret
                className={`${active === "service" ? "active" : null}`}
              >
                Services
              </DropdownToggle>
              <DropdownMenu className="w-100 py-1 py-md-3 px-2 px-md-5 mt-0 service-dropdown">
                <Row>
                  <Container className="align-items-top px-5">
                    <Col sm="12" md="3" className="service-menu">
                      <h4 className="menu-title">New Age Technologies</h4>
                      <ul>
                        <li>
                          <Link to="/robotic-process-automation">
                            Robotic Process Automation
                          </Link>
                        </li>
                        <li>
                          <Link to="/artificial-intelligence">
                            Artificial Intelligence
                          </Link>
                        </li>
                        <li>
                          <Link to="/optical-character-recognition">
                            Optical Character Recognition
                          </Link>
                        </li>
                        <li>
                          <Link to="/blockchain">Blockchain</Link>
                        </li>
                        <li>
                          <Link to="/internet-of-things">
                            Internet of Things
                          </Link>
                        </li>
                        <li>
                          <Link to="/bigdata">Big Data</Link>
                        </li>
                      </ul>
                    </Col>
                    <Col sm="12" md="3" className="service-menu">
                      <h4 className="menu-title">Infrastructure Services</h4>
                      <ul>
                        <li>
                          <Link to="/datacenter-services">
                            Data Center Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/system-infrastructure">
                            System Infra Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/end-user-computing">
                            End User Computing
                          </Link>
                        </li>
                        <li>
                          <Link to="/it-infra-help-desk">
                            IT Infra Help Desk
                          </Link>
                        </li>
                        <li>
                          <Link to="/storage-services">Storage Services</Link>
                        </li>
                        <li>
                          <Link to="/contact-center">Contact Center</Link>
                        </li>
                        <li>
                          <Link to="/cloud-services">Cloud Services</Link>
                        </li>
                        <li>
                          <Link to="/network-and-telecom">
                            Network and Telecom
                          </Link>
                        </li>
                      </ul>
                    </Col>
                    <Col sm="12" md="3" className="service-menu">
                      <h4 className="menu-title">Security Services</h4>
                      <ul>
                        <li>
                          <Link to="/network-security">Network Security</Link>
                        </li>
                        <li>
                          <Link to="/cyber-security">Cyber Security</Link>
                        </li>
                      </ul>
                      <h4 className="menu-title">Application Development</h4>
                      <ul>
                        <li>
                          <Link to="/software-development">
                            Software Development
                          </Link>
                        </li>
                        <li>
                          <Link to="/mobile-app-development">
                            Mobile App Development
                          </Link>
                        </li>
                        <li>
                          <Link to="/enterprise-services">
                            Enterprise Services
                          </Link>
                        </li>
                      </ul>
                      <h4 className="menu-title">Management Services</h4>
                      <ul>
                        <li>
                          <Link to="/outsourcing-services">Outsourcing</Link>
                        </li>
                      </ul>
                    </Col>
                  </Container>
                </Row>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <Link
                to="/careers"
                className={`${active === "career" ? "active" : null}`}
              >
                Careers
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/contactus"
                className={`${active === "contact" ? "active" : null}`}
              >
                Contact Us
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
