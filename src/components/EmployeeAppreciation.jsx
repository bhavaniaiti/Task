import Img6 from "../images/Img6.jpg";
import Img7 from "../images/Img7.jpg";
import Img8 from "../images/Img8.jpg";
import { Row, Col } from "antd";

function EmployeeAppreciation() {
  return (
    <><Row className="employeeAppreciation">
          <Col style={{width:650}}>
              <h1>Employee <span>Appreciation Program</span></h1>
              <p>
                  Our Employee Appreciation Program is tailored to honor the ongoing
                  commitment and efforts of our long-serving team members. Our 5 Year
                  Club and 10 Year Club are special milestones within this program,
                  celebrating employees who have dedicated half a decade or a full
                  decade to our company mission. Each year, members of these clubs are
                  invited to annual events held at select, memorable locations,
                  reflecting our gratitude and recognition of their unwavering
                  dedication. It's our way of saying thank you and ensuring that every
                  significant chapter in our collective journey is celebrated with the
                  grandeur it deserves
              </p>
          </Col>
          <Col><img src={Img6} /></Col>
          <Col style={{marginTop: 10}}><img src={Img7} /></Col>
        <Col style={{marginTop: 10}}><img src={Img8} /></Col>
      </Row>
      <Row gutter={10}>
        {/* <Col><img src={Img7} /></Col>
        <Col><img src={Img8} /></Col> */}



    </Row></>


  );
}

export default EmployeeAppreciation;
