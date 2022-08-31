import React from "react";
import Icon1 from "../../images/p1.svg";
import Icon2 from "../../images/p2.svg";
import Icon3 from "../../images/p3.svg";
import {
  ProjectsCard,
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsIcon,
  ProjectsH1,
  ProjectsH2,
  ProjectsP,
  ProjectsNote,
  ProjectsLink,
} from "./ProjectsElements";

const Projects = () => {
  return (
    <ProjectsContainer id="project">
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Shu Bookstore</ProjectsH2>
          <ProjectsP>
            Designed an e-commerce website (HTML, CSS, JavaScript, Vue)
          </ProjectsP>
          <br />
          <ProjectsNote>More</ProjectsNote>
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Chrome Extension</ProjectsH2>
          <ProjectsP>
            Created a lead tracker Chrome extension to source potential leads
            (JavaScript)
          </ProjectsP>
          <br />
          <ProjectsNote>More</ProjectsNote>
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>DAB Game</ProjectsH2>
          <ProjectsP>
            Created a responsive game interface and underlying game engine
            (Java)
          </ProjectsP>
          <br />
          <ProjectsNote>More</ProjectsNote>
        </ProjectsCard>
      </ProjectsWrapper>
      <ProjectsLink to="projects">More Details and Projects</ProjectsLink>
    </ProjectsContainer>
  );
};

export default Projects;
