import ParaLogo from "../images/ParaLogo.jpg";
import Logo2 from "../images/Logo2.jpg";
import Logo3 from "../images/Logo3.jpg";
import Content1img from "../images/Content1img.jpg";
import {Row, Col} from "antd";

function ContenPage1() {
  return (
    <div className="contentContainer">
      <Row>
        <Col className="stayConnected">
        <h2>We <span style={{color: "#f36f2b"}}>stay connected</span></h2>
          <h3>
              <img src={ParaLogo} />
              Quarterly Business Updates
          </h3>

          <p className="mainPara"style={{ width: "543px" }}>
              We strive to stay connected as a team through communication and
              collaboration. This materialises every quarter through our Quarterly
              Business Update events. These gatherings are immersive sessions where
              every team member, regardless of rank or tenure, comes together to
              contribute to our overarching business strategy, and stay connected.
              They are opportunities to learn from our seasoned leaders and to also
              share personal insights and achievements that can steer our collective
              future. In an ever-evolving engineering landscape, staying connected
              isn’t just a benefit—it’s essential.
          </p>
          <p className="logo2"><img src={Logo3} />Industry Events & Networking</p>

          <br />
          <p className="logo2"><img src={Logo2} />Associations Memberships</p></Col>
          <Col><img className="Contentimg"src={Content1img} /></Col>
          
        
          </Row>
      </div>
      
      
  );
}

export default ContenPage1;
