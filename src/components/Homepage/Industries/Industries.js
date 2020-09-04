import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import bankImg from "../../../../static/images/bank_test.svg";
import "./Industries.css";

const IndustryData = [
  {
    active: true,
    title: "Banking Industry",
    text:
      "With our handy services related to banking and financial software, we provide complete solutions for business that aspire to increase the level of operational efficiency. Our solutions for banking and financial include Artificial Intelligence, Internet of Things, Blockchain, AR/VR and Bigdata Analytics applications",
  },
  {
    active: false,
    title: "Telecom Industry",
    text:
      "Telecom industry has been successfully drawing in more revenue with the help of numerous operations. Our team is providing our clients with an end-to-end offshore software solution that would help them to enhance their productivity by working on stable platforms that offers mobility, social media as well as cloud computing solutions.",
  },

  {
    active: false,
    title: "Retail Industry",
    text:
      "We offer solutions for multiple levels of operational methodologies continuing to grow with every customer. We help you actualize the retail software services and offer you first rated benefits such as direct operations management, enhancement in accurate workflow, better customer care, continuous data flow, better customer care, real time communication",
  },
  {
    active: false,
    title: "HealthCare Industry",
    text:
      "Being one of the fastest growing industries, the medicinal sectors need to deal with numerous advancements as well as modern techniques. We provide healthcare sectors with a task-driven solution that would help them improve their accuracy and enhance their medicinal workflow. We build wide range of scalable, cost effective and robust application development",
  },
  {
    active: false,
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
  });

  const updateIndustryText = index => {
    setIndContent({
      index,
      title: IndustryData[index].title,
      text: IndustryData[index].text,
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
          <img src={bankImg} alt="telecom industry" />
        </Col>
        <Col sm="12" md="7" className="right-block">
          <div className="p-5">
            <h3 className="py-5 ind-title">{indContent.title}</h3>
            <p className="text-justify ind-text">{indContent.text}</p>
          </div>
          <div>
            <Row>
              <Col>
                <div
                  className={`py-5 px-4 shadow shadow-sm rounded-lg text-center ind-menu-card ${
                    indContent.index === 0 && "active"
                  }`}
                  onMouseEnter={() => updateIndustryText(0)}
                >
                  <h5 className="font-weight-bold">Banking</h5>
                </div>
              </Col>
              <Col>
                <div
                  className={`py-5 px-4 shadow shadow-sm rounded-lg text-center ind-menu-card ${
                    indContent.index === 1 && "active"
                  }`}
                  onMouseEnter={() => updateIndustryText(1)}
                >
                  <h5 className="font-weight-bold">Telecom</h5>
                </div>
              </Col>
              <Col>
                <div
                  className={`py-5 px-4 shadow shadow-sm rounded-lg text-center ind-menu-card ${
                    indContent.index === 2 && "active"
                  }`}
                  onMouseEnter={() => updateIndustryText(2)}
                >
                  <h5 className="font-weight-bold">Retail</h5>
                </div>
              </Col>
              <Col>
                <div
                  className={`py-5 px-4 shadow shadow-sm rounded-lg text-center ind-menu-card ${
                    indContent.index === 3 && "active"
                  }`}
                  onMouseEnter={() => updateIndustryText(3)}
                >
                  <h5 className="font-weight-bold">Healthcare</h5>
                </div>
              </Col>
              <Col>
                <div
                  className={`py-5 px-4 shadow shadow-sm rounded-lg text-center ind-menu-card ${
                    indContent.index === 4 && "active"
                  }`}
                  onMouseEnter={() => updateIndustryText(4)}
                >
                  <h5 className="font-weight-bold">Logistics</h5>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Industries;
