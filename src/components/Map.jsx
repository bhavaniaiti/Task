import Img10 from "../images/Img10.jpg";
import { Row, Col } from "antd";

function globalBusinessContainer() {
  return (
    <div className="mapContainer">
      <h1 style={{margin: "0 25%"}}>
        As a <span className="highlightedText">global business</span> , we encourage you to contact us no matter where you
        are located in the world.
      </h1>
      <p style={{margin: "20px 28%"}}>
        Browse our job opportunities across the globe.
      </p><br />
      <h2 style={{color: "#f36f2b"}}>OPEN ROLES</h2>

      <img style={{margin: "4% 0"}} src={Img10} />
    </div>
  );
}

export default globalBusinessContainer;
