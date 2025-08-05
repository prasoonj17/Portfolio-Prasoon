import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link, index }: ProjectType & { index: number }) => {
  return (
    <Card className="project-card" style={{ '--card-index': index } as React.CSSProperties}>
      <CardBody>
        <div className="d-flex px-3">
          <div className="pl-4">
            <h3 className="project-title text-black">{name}</h3>
            <p className="project-description">{desc}</p>
            {github ? (
              <Button
                className="project-button btn-icon"
                href={github}
                target="_blank"
                rel="noopener"
                aria-label="Github"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-github" />
                </span>
              </Button>
            ) : null}
            {link ? (
              <Button
                className="project-button bg-black btn-icon"
                href={link}
                target="_blank"
                rel="noopener"
                aria-label="Demo"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-arrow-right mr-2" />
                </span>
                <span className="nav-link-inner--text ml-1 ">Demo</span>
              </Button>
            ) : null}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectsCard;