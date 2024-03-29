import { React, useEffect } from "react";
import "../Landing/parallax.css";
import Aos from "aos";
import landingimg from "./Images/Vector.svg";
import ide from "./Images/ide.png";
import dashboard from "./Images/dashboard.png";
import questions from "./Images/questions.png";
import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Features() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <div className="landing">
      <div className="background" />
      <Parallax pages={7} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={1.15}
          className="layer-1"
          style={{
            ...alignCenter,
            justifyContent: "center",
          }}
        >
          <img
            className="background-img"
            style={{
              position: "absolute",
              zIndex: "-1",
            }}
            src={landingimg}
            alt=""
          />
          <div style={{ alignItems: "center", justifyContent: "center" }}>
            <p
              className="scrollText landingText"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <span className="animated-gradient-bg-1 animated-gradient-text-bg-1">
                <span className="animated-gradient-fg-1 animated-gradient-text-fg-1">
                  Practice.
                </span>
              </span>

              <span className="animated-gradient-bg-2 animated-gradient-text-bg-2">
                <span className="animated-gradient-fg-2 animated-gradient-text-fg-2">
                  Compete.
                </span>
              </span>

              <span className="animated-gradient-bg-3 animated-gradient-text-bg-3">
                <span className="animated-gradient-fg-3 animated-gradient-text-fg-3">
                  Code Champs
                </span>
              </span>
            </p>
            <div style={{ width: "100%", padding: "50px 0px" }}>
              <Button
                variant="primary"
                className="cta-btn white-btn"
                href="/getstarted"
              >
                Get started
              </Button>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1.2, end: 3.2 }}
          className="Code Champs"
          style={{
            ...alignCenter,
            justifyContent: "flex-start",
            // backgroundColor: "yellow",
          }}
        >
          <div className="parallax-card sticky">
            <p className="card-text-head">Code Champs</p>
            <p className="card-text">by Chandigarh University</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.2}
          speed={0.1}
          style={{
            ...alignCenter,
            justifyContent: "flex-end",
          }}
        >
          <div className="parallax-card parallax purple">
            <p className="card-text-head-2">Code</p>
            <p>
              <ul className="card-text-2">
                <li>
                  Full Fledged IDE with C++, Java, Python and more support!
                </li>
                <li>VS-Code key binds supported out of the box</li>
              </ul>
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.2}
          speed={0.1}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className="parallax-card parallax blue">
            <p className="card-text-head-2">Practice</p>
            <p>
              <ul className="card-text-2">
                <li>Over 1000+ questions of Data Structures and Algorithms</li>
                <li>
                  From LeetCode, GeeksForGeeks, CodeChef, CodeForces, SPOJ,
                  AtCoder and more!
                </li>
                <li>
                  Curated by industry experts - and trusted by hundreds of
                  thousands.
                </li>
              </ul>
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.2}
          speed={0.1}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className="parallax-card parallax orange">
            <p className="card-text-head-2">Compete</p>
            <p className="card-text-2">
              Compete with hundreds of other coders at our home-brewed
              hackathons.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={3}
          factor={6}
          className="glassmorphic"
        />

        <ParallaxLayer
          offset={4.2}
          speed={0.5}
          pages={1}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{ marginBottom: "40px", color: "azure" }}
            className="scrollText overhead"
          >
            We got you covered 💪
          </p>

          <Container
          // style={{ backgroundColor: "red" }}
          >
            <Row className="para-why">
              <Col xs={12} md={6}>
                <div>
                  <p className="about-feature-head">User Centric Dashboard</p>
                  <p className="about-feature-body">
                    Track your progress efficiently in one place. ⭐
                  </p>
                  <p className="about-feature-body">
                    Overall Progress + Topic Wise Progress + Total Progress
                    Graph 🚀
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <img className="landingImg" src={dashboard} />
              </Col>
            </Row>

            <Row className="para-why">
              <Col xs={12} md={6} xs={{ order: 2 }} lg={{ order: 1 }}>
                <img className="landingImg-1" src={questions} />
              </Col>
              <Col xs={12} md={6} xs={{ order: 1 }} lg={{ order: 2 }}>
                <div>
                  <p className="about-feature-head align-right">
                    Organized tables
                  </p>
                  <p className="about-feature-body align-right">
                    Keep a track of solved/unsolved questions efficiently 📑
                  </p>
                  <p className="about-feature-body align-right">
                    Visit the topic related questions in one click ✌🏻
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="para-why">
              <Col xs={12} md={6}>
                <div>
                  <p className="about-feature-head">Online IDE</p>
                  <p className="about-feature-body">
                    Supports languages like C, C++, Python, Java 👩🏻‍💻
                  </p>
                  <p className="about-feature-body">
                    Code and compete at one place 🔥
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <img className="landingImg" src={ide} />
              </Col>
            </Row>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
          speed={0.1}
          pages={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="lastpage"
        >
          <h1 style={{ color: "#000", textAlign: "center" }}>
            Hi, if you are able to read this, it means you have explored this Website. Now Just Click On Get Started button and start coding :"){" "}
            <br />
            So start now !!
          </h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
