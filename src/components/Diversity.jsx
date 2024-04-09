import { Row, Col } from "antd";
import Bridge from "../images/Bridge.jpg";

function ContentPage2() {
  return (

    <div className="diversityContainer">
        <Row>
          <Col span={12}>
            <div className="diversityHeading"  style={{fontSize: 24}}>
              <h1>We believe in <span>diversity & inclusion</span></h1>
            </div>
          </Col>
          <Col className="diversityContent" style={{width: "fit-content"}}>
            <p>
              At CaSE we do not just accept difference — we celebrate it, we
              support it, and we thrive on it for the benefit of our employees,
              our services, our industry and our community. We are proud to be
              an equal opportunity employer. Guided by our values and beliefs,
              we foster an inclusive workplace culture where employees thrive
              because of their differences, not in spite of them.
            </p>
            <p>
              Our values and beliefs, we foster an inclusive workplace culture
              where employees thrive because of their differences, not in spite
              of them Our Commitment to reinventing the standard. With more than
              20 nationalities represented in our global workforce, we firmly
              believe that our ability to deliver high-quality results is fueled
              by our active efforts to embed diversity and inclusion. We
              recognise, respect, and strive to create an environment where
              employees can excel and feel a true sense of belonging.{" "}
            </p>
            <br />
            <h3 style={{fontSize: 24}}>Some of our strategic initiatives include:</h3>
          </Col>
        </Row>

        <Row gutter={10} justify="space-around" className="deignConatier">
          <Col span={24} style={{ border: "none", height: 230, padding: 0 }}>
            <div className="hyperbola" />
          </Col>
          <Col span={24} style={{ border: "none" }}>
            <Row className="boxContainer">
              <Col
                span={3}
                style={{ borderLeft: "4px solid #ffff", height: 341 }}
              >
                <div> Commitment to Equality and Diversity Policy</div>
              </Col>
              <Col
                span={3}
                style={{ borderLeft: "4px solid #ffff", height: 240 }}
              >
                <div> EAP partnership for mental wellbeing</div>
              </Col>
              <Col
                span={3}
                style={{ borderLeft: "4px solid #ffff", height: 196 }}
              >
                <div>Flexible work arrangements</div>
              </Col>
              <Col
                span={3}
                style={{ borderLeft: "4px solid #ffff", height: 176 }}
              >
                <div>Unbiased and equal opportunity for hiring</div>
              </Col>
              <Col
                span={3}
                style={{ borderLeft: "4px solid #ffff", height: 168 }}
              >
                <div>Multicultural celebration days</div>
              </Col>
              <Col
                span={3}
                style={{ borderLeft: "4px solid #ffff", height: 174 }}
              >
                <div>Awards and recognitions</div>
              </Col>
              <Col
                span={3}
                style={{ borderLeft: "4px solid #ffff", height: 198 }}
              >
                <div>Undergraduate programs</div>
              </Col>
              <Col
                span={2}
                style={{ borderLeft: "4px solid #ffff", height: 241 }}
              >
                <div> Providing education and traineeship</div>
              </Col>
              <Col
                style={{
                  borderLeft: "4px solid #ffff",
                  height: 300,
                  width: 56,
                }}
              />
            </Row>
          </Col>
        </Row>
      </div>

    // <><Row className="diversityContainer">
    //       <Col className="diversityHeading">
    //           <h1>We believe in diversity & inclusion</h1>
    //       </Col>
    //       <Col className="diversityContent">
    //           <p>
    //               At CaSE we do not just accept difference — we celebrate it, we support
    //               it, and we thrive on it for the benefit of our employees, our
    //               services, our industry and our community. We are proud to be an equal
    //               opportunity employer. Guided by our values and beliefs, we foster an
    //               inclusive workplace culture where employees thrive because of their
    //               differences, not in spite of them.
    //           </p>
    //           <br />
    //           <p>
    //               Our values and beliefs, we foster an inclusive workplace culture where
    //               employees thrive because of their differences, not in spite of them
    //               Our Commitment to reinventing the standard. With more than 20
    //               nationalities represented in our global workforce, we firmly believe
    //               that our ability to deliver high-quality results is fueled by our
    //               active efforts to embed diversity and inclusion. We recognise,
    //               respect, and strive to create an environment where employees can excel
    //               and feel a true sense of belonging.{" "}
    //           </p>
    //           <br />
    //           <h3>Some of our strategic initiatives include:</h3>
    //       </Col>

    //   </Row>
    //   <div className="bridgeImg">
    //       <img src={Bridge} />
    //       </div></>
      
  );
}

export default ContentPage2;
