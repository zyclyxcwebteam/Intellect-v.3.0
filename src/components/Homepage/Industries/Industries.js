import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import bankImg from "../../../../static/images/industries/bank.svg";
import retailImg from "../../../../static/images/industries/retail.svg";
import telecomImg from "../../../../static/images/industries/telecom.svg";
import healthImg from "../../../../static/images/industries/health-care.svg";
import logisticsImg from "../../../../static/images/industries/logistics.svg";
import "./Industries.css";

const IndustryData = [
  {
    img: bankImg,
    title: "Banking Industry",
    text:
      "Our banking and financial related services provide complete solutions for businesses that aspire to increase their level of operational efficiency. These solutions include  Automation, Artificial Intelligence, Internet of Things, Blockchain, and Big Data Analytics applications.",
  },
  {
    img: telecomImg,
    title: "Telecom Industry",
    text:
      "The industry has been successfully drawing in more revenue with the help of numerous operations. We provide our clients with end-to-end offshore software solutions that would help them to enhance their productivity. These solutions include working on stable platforms that offer mobility, social media, and cloud computing.",
  },

  {
    img: retailImg,
    title: "Retail Industry",
    text:
      "Our retail offering is aimed at multiple levels of operational methodologies to grow with every customer. We help you actualize the retail software services and offer you benefits such as direct operations management, improved workflow, better customer care, continuous data flow, and real-time communication.",
  },
  {
    img: healthImg,
    title: "HealthCare Industry",
    text:
      "As it is one of the fastest-growing industries, we understand this sector needs to deal with numerous advancements as well as modern techniques. Keeping this in mind, we provide the healthcare sectors with task-driven solutions to improve their accuracy and enhance their medicinal workflow. Our team develops a wide range of scalable, cost-effective, and robust applications",
  },
  {
    img: logisticsImg,
    title: "Logistics Industry",
    text:
      "Our team understands the constant pressure businesses have to reduce overhead. We offer you valuable automation solutions like Smart Documentation, Shipment Tracking, Inventory Control, Order Processing, Shipment status communication This ensures your employees can dedicate their efforts to more important tasks.",
  },
];

const Industries = () => {
  const [indContent, setIndContent] = useState({
    index: 0,
    title: IndustryData[0].title,
    text: IndustryData[0].text,
    img: IndustryData[0].img,
  });

  const updateIndustryText = index => {
    setIndContent({
      index,
      title: IndustryData[index].title,
      text: IndustryData[index].text,
      img: IndustryData[index].img,
    });
  };

  //   useEffect(() => {
  //     setInterval(() => {
  //       setIndContent({
  //         index,
  //         title: IndustryData[index].title,
  //         text: IndustryData[index].text,
  //       });
  //     }, 3000);
  //   }, []);
  return (
    <Container fluid className="ind-wrapper">
      <Row className="h-100">
        <Col sm="12" md="5" className="left-block">
          <h2 className="text-center py-4 ind-section-title">
            INDUSTRY EXPERTISE
          </h2>
          <img src={indContent.img} alt="telecom industry" />
        </Col>
        <Col sm="12" md="7" className="right-block">
          <div className="p-5">
            <h3 className="py-5 ind-title">{indContent.title}</h3>
            <p className="text-justify ind-text">{indContent.text}</p>
          </div>
          <Row>
            <Col>
              <div
                className={`py-5 px-4 shadow shadow-sm rounded-lg text-center ind-menu-card ${
                  indContent.index === 0 && "active"
                }`}
                onMouseEnter={() => updateIndustryText(0)}
              >
                <h4 className="font-weight-bold">Banking</h4>
              </div>
            </Col>
            <Col>
              <div
                className={`py-5 px-4 shadow shadow-sm rounded-lg text-center ind-menu-card ${
                  indContent.index === 1 && "active"
                }`}
                onMouseEnter={() => updateIndustryText(1)}
              >
                <h4 className="font-weight-bold">Telecom</h4>
              </div>
            </Col>
            <Col>
              <div
                className={`py-5 px-4 shadow shadow-sm rounded-lg text-center ind-menu-card ${
                  indContent.index === 2 && "active"
                }`}
                onMouseEnter={() => updateIndustryText(2)}
              >
                <h4 className="font-weight-bold">Retail</h4>
              </div>
            </Col>
            <Col>
              <div
                className={`py-5 px-4 shadow shadow-sm rounded-lg text-center ind-menu-card ${
                  indContent.index === 3 && "active"
                }`}
                onMouseEnter={() => updateIndustryText(3)}
              >
                <h4 className="font-weight-bold">Healthcare</h4>
              </div>
            </Col>
            <Col>
              <div
                className={`py-5 px-4 shadow shadow-sm rounded-lg text-center ind-menu-card ${
                  indContent.index === 4 && "active"
                }`}
                onMouseEnter={() => updateIndustryText(4)}
              >
                <h4 className="font-weight-bold">Logistics</h4>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Industries;
