import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faRocketchat } from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faPhoneAlt,
  faMapMarkerAlt,
  faArrowRight,
  faArrowLeft,
  faTimes,
  faMapMarkedAlt,
  faPhone,
  faEnvelope,
  faPaperPlane,
  faUsers,
  faRocket,
  faCog,
  faBriefcase,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import SEO from "../SEO/seo";
import Navbar from "../NavBar/Navbar";
import ContactBanner from "../ContactBanner/ContactBanner";
import Footer from "../Footer/Footer";
// import ChatBot from "../ChatBot/ChatBot";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout.css";

library.add(
  fab,
  faAt,
  faPhoneAlt,
  faMapMarkerAlt,
  faArrowRight,
  faArrowLeft,
  faTimes,
  faMapMarkedAlt,
  faPhone,
  faEnvelope,
  faRocketchat,
  faPaperPlane,
  faUsers,
  faRocket,
  faCog,
  faBriefcase,
  faUserTie
);

const layout = props => {
  const { children, showBanner, title, description, active } = props;
  return (
    <>
      <SEO title={title} description={description} />
      <Navbar active={active} />
      {children}
      {showBanner && <ContactBanner />}
      <Footer />
      {/* <ChatBot /> */}
    </>
  );
};

export default layout;
