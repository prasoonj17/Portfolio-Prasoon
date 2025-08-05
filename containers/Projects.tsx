import React from "react";
import { projects } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    projects && (
      <Fade bottom duration={2000}>
        <section className="section section-lg">
          <style>
            {`
              .project-card-container {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 15px;
              }

              .project-card {
                background: radial-gradient(circle, rgba(207, 250, 254, 0.9) 0%, rgba(191, 219, 254, 0.6) 100%);
                border-radius: 12px;
                padding: 20px;
                box-shadow: 0 6px 20px rgba(0, 170, 255, 0.3), 0 0 15px rgba(135, 207, 235, 0.46);
                transition: transform 0.4s ease, box-shadow 0.4s ease;
                opacity: 0;
                transform: scale(0.9);
                animation: scaleFadeIn 0.8s ease-out forwards;
                animation-delay: calc(0.1s * var(--card-index));
              }

              .project-card:hover {
                transform: translateY(-8px) scale(1.02);
                box-shadow: 0 12px 30px rgba(0, 191, 255, 0.4), 0 0 20px rgba(135, 206, 235, 0.6);
              }

              @keyframes scaleFadeIn {
                0% {
                  opacity: 0;
                  transform: scale(0.9);
                }
                100% {
                  opacity: 1;
                  transform: scale(1);
                }
              }

              .project-title {
                font-size: 1.5rem;
                font-weight: 600;
                color: #0c4a6e;
                margin-bottom: 12px;
              }

              .project-description {
                font-size: 0.95rem;
                color: #1f2937;
                margin-bottom: 15px;
              }

              .project-button {
                background-color: #0284c7;
                border-color: #0284c7;
                color: #ffffff;
                font-size: 0.9rem;
                transition: background-color 0.3s ease, transform 0.3s ease;
              }

              .project-button:hover {
                background-color: #0ea5e9;
                border-color: #0ea5e9;
                transform: translateY(-2px);
              }

              .project-button .btn-inner--icon {
                font-size: 1rem;
              }

              .many-more {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                background: radial-gradient(circle, rgba(207, 250, 254, 0.7) 0%, rgba(191, 219, 254, 0.4) 100%);
                border-radius: 12px;
                box-shadow: 0 6px 20px rgba(0, 191, 255, 0.3);
                font-size: 1.2rem;
                font-weight: 500;
                color: #0c4a6e;
                opacity: 0;
                transform: translateY(20px);
                animation: slideUp 0.8s ease-out forwards;
                animation-delay: calc(0.1s * ${projects.length});
                transition: transform 0.4s ease, box-shadow 0.4s ease;
              }

              .many-more:hover {
                transform: translateY(-8px);
                box-shadow: 0 12px 30px rgba(0, 191, 255, 0.4);
              }

              @keyframes slideUp {
                0% {
                  opacity: 0;
                  transform: translateY(20px);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}
          </style>
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-black">
                  <i className="ni ni-laptop text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3  text-black">Projects</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {projects.map((data, i) => {
                return (
                  <Col key={i} lg="4" md="6" sm="12" className="project-card-container">
                    <ProjectsCard {...data} index={i} />
                  </Col>
                );
              })}
              <Col lg="4" md="6" sm="12" className="project-card-container">
                <div className="many-more">Many More...</div>
              </Col>
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Projects;