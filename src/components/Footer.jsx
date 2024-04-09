import Img11 from "../images/Img11.jpg";
import { Row, Col } from "antd";

function globalBusinessContainer() {
  return (
    <div className="globalBusiness">
      <Row justify={"space-between"}>
        <Col>
          <img className="imgClass" src={Img11} />
        </Col>
        <Col>
          <p>Expertise</p>
          <p>Design</p>
          <p>Specialist Expertise</p>
          <p>Commercial Advice</p>
          <p>Traffic & Transport</p>
        </Col>
        <Col>
          <p>Sectors </p>
          <p>Road</p>
          <p>Tunner</p>
          <p>Bridge</p>
          <p>Others +</p>
        </Col>
        <Col>
          <p>Our Business </p>
          <p>Work With Us</p>
          <p>Projects</p>
          <p>News</p>
        </Col>

        <Col>
          <p>Our Capabilities </p>
          <p>Engineers</p>
          <p>Contact</p>
        </Col>
        
      </Row>
      <Row justify={"space-between"}>
          <Col>
            <p>2021 Case International. All right reserved.</p>
          </Col>
          <Col style={{display: "flex"}}>
          <p>Terms & Condition</p>
            <p style={{marginLeft: 50}}>Privacy Policy </p>
          </Col>
        </Row>
    </div>
  );
}

export default globalBusinessContainer;
