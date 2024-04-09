import { Row, Col } from "antd";

function ContentNavigation() {
  return (
    <Row justify="space-evenly" className="navigationContainer">
      <Col className="content" span={8} style={{fontSize: 24}}>
        <p>01</p>
        <p>We stay connected</p>
      </Col>
      <Col className="content"span={8} style={{fontSize: 24}}>
        <p>02</p>
        <p>We believe in diversity & inclusion</p>
      </Col>
      <Col className="content"span={8} style={{fontSize: 24}}>
        <p>03</p>
        <p>We celebrate success</p>
      </Col>
    </Row>
  );
}
export default ContentNavigation;
