import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from "reactstrap";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({
  companyLogo,
  company,
  role,
  date,
  desc,
  descBullets,
}: ExperienceType) => {
  return (
<Col xs="12" className="d-flex justify-content-center my-4">
      <Card className="shadow-lg my-4 border-0 text-center rounded h-100">
        <CardBody className="d-flex flex-column justify-content-between p-4">
          <div>
            <img
              src={companyLogo}
              alt={`${company} logo`}
              className="mb-3 mx-auto d-block"
              style={{
                objectFit: "cover",
                width: "6rem",
                height: "6rem",
                borderRadius: "50%",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
            <CardTitle tag="h4" className="mb-1">
              {company}
            </CardTitle>
            <CardSubtitle tag="h5" className="text-muted mb-1">
              {role}
            </CardSubtitle>
            <CardSubtitle className="text-muted mb-3">{date}</CardSubtitle>
          </div>
          <CardText tag="div" className="text-left">
            <p className="mb-2">{desc}</p>
            {descBullets && descBullets.length > 0 && (
              <ul className="pl-3 mb-0">
                {descBullets.map((point, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
