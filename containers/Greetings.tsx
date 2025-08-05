import React, { useEffect, useRef } from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.classList.add('animate-in');
    }
  }, []);

  return (
    <main>
      <style>
        {`
          .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 30px;
            hight: 50px;
            width:50px;
          }

          .gradient-bg {
            background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(173, 216, 230, 0.5) 70%, rgba(135, 206, 235, 0.3) 100%);
            border-radius: 250px;
            padding: 0;
            box-shadow: 0 8px 30px rgba(0, 145, 255, 0.29), 0 0 20px rgba(135, 185, 235, 0.5); 
          }

          .animated-image {
            max-width: 100%;
            height: auto;
            max-height: 1000px;
            border-radius: 10px;
            opacity: 0;
            transform: translateY(100px);
            transition: opacity 1s ease-out, transform 1s ease-out;
          }

          .animated-image.animate-in {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <h1 className="display-3 text-white">{greetings.title + " "}</h1>
                  <p className="lead text-white">{greetings.description}</p>
                  <SocialLinks />
                  {greetings.resumeLink && (
                    <div className="btn-wrapper my-4">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href={greetings.resumeLink}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-file" />
                        </span>
                        <span className="btn-inner--text">See My Resume</span>
                      </Button>
                    </div>
                  )}
                </Col>
                <Col lg="6" className="image-container">
                  <div className="gradient-bg">
                    <img
                      ref={imageRef}
                      src="/img/icons/common/p1.png"
                      alt="Coding Illustration"
                      className="animated-image"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Greetings;