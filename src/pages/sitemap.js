import React from "react";
import { Container } from "reactstrap";
import Layout from "../components/Layout/Layout";

const SiteMap = () => {
  return (
    <Layout
      showBanner
      active="home"
      title="INTELLECT Technologies"
      description="providing IT services"
    >
      <Container fluid className="d-flex justify-content-center">
        <Container className="p-5 mx-5 sitemap">
          <h2>Site Map</h2>
          <ul>
            <li className="py-2">
              <a href="/"> Home</a>
            </li>
            <li className="py-2">
              <a href="/aboutus">About us</a>
            </li>
            <li className="py-2">
              <a href="/robotic-process-automation">
                Robotic Process Automation
              </a>
            </li>
            <li className="py-2">
              <a href="/artificial-intelligence">Artificial Intelligence</a>
            </li>
            <li className="py-2">
              <a href="/optical-character-recognition">
                Optical Character Recognition
              </a>
            </li>
            <li className="py-2">
              <a href="/blockchain">Blockchain</a>
            </li>
            <li className="py-2">
              <a href="/internet-of-things">Internet of Things</a>
            </li>
            <li className="py-2">
              <a href="/bigdata">Bigdata</a>
            </li>
            <li className="py-2">
              <a href="/datacenter-services">Datacenter Services</a>
            </li>
            <li className="py-2">
              <a href="/system-infrastructure">System Infrastructure</a>
            </li>
            <li className="py-2">
              <a href="/end-user-computing">End User Computing</a>
            </li>
            <li className="py-2">
              <a href="/it-infra-help-desk">IT Infra Help Desk</a>
            </li>
            <li className="py-2">
              <a href="/storage-services">Storage Services</a>
            </li>
            <li className="py-2">
              <a href="/contact-center">Contact Center</a>
            </li>
            <li className="py-2">
              <a href="/cloud-services">Cloud Services</a>
            </li>
            <li className="py-2">
              <a href="/network-and-telecom">Network and Telecom</a>
            </li>
            <li className="py-2">
              <a href="/network-security">Network Security</a>
            </li>
            <li className="py-2">
              <a href="/cyber-security">Cyber Security</a>
            </li>
            <li className="py-2">
              <a href="/software-development">Software Development</a>
            </li>
            <li className="py-2">
              <a href="/mobile-app-development">Mobile App Development</a>
            </li>
            <li className="py-2">
              <a href="/enterprise-services">Enterprise Services</a>
            </li>
            <li className="py-2">
              <a href="/outsourcing-services">Outsourcing Services</a>
            </li>
            <li className="py-2">
              <a href="/staffing-solutions">Staffing Solutions</a>
            </li>
            <li className="py-2">
              <a href="/careers">Careers</a>
            </li>
            <li className="py-2">
              <a href="/contactus">Contact us</a>
            </li>
          </ul>
        </Container>
      </Container>
    </Layout>
  );
};

export default SiteMap;
