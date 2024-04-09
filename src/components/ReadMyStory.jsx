import Img9 from "../images/Img9.jpg";
import Img10 from "../images/Img10.jpg";
import { Row, Col } from "antd";

function MyStoryContainer() {
  return (
    <Row className="MyStory">
      <Col span={12}>
        <img src={Img9} />
      </Col>
      <Col span={12}>
        <p style={{width: "600px"}}>
          <span>“</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales
          turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit.
          In consequat euismod purus nec imperdiet.
        </p> <br />
        <p>Title <br /> Name</p>
        <p>Read my story</p>
      </Col>
    </Row>
  );
}

export default MyStoryContainer;
