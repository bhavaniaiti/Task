import Img1 from "../images/Img1.jpg";
import Img2 from "../images/Img2.jpg";
import Img3 from "../images/Img3.jpg";
import Img4 from "../images/Img4.jpg";
import Img5 from "../images/Img5.jpg";
import { Row, Col } from "antd";

function weCelebrate() {
  return (
    <div className="weCelebrateClass">
      <div className="weCelebrateContainer">
        <div>
          <img src={Img1} />
        </div>
        <div>
          <img src={Img2} />
        </div>
        <div>
          <img src={Img3} />
        </div>
        <div className="celebrateContent">
          <h1 style={{fontSize: 60}}>We celebrate <span>success</span></h1>
          <p>
            At CaSE we understand that every achievement, big or small, is a
            result of the hard work and dedication of our team members. We take
            pride in celebrating these moments because they underscore the
            commitment and effort put into each project.
          </p>
          <p>
            Some of our favourite events on the calendar include our coveted
            Melbourne Cup event and our always amazing Christmas Party.
            In-between, our team celebrate together during team cycling events,
            regular team dinners and social morning teas to celebrate milestones
            and special days. Taking the time to celebrate wins is our way of
            showing gratitude and ensuring everyone knows their efforts make a
            difference.
          </p>
        </div>
        
      </div>
      
      <div className="weCelebrateContainer">
        <div className="cupCakes">
          <img src={Img4} />
        </div>
        <div>
          <img src={Img5} />
        </div>
      </div>
    </div>
  );
}

export default weCelebrate;
