import React from "react";
import Icon1 from "../../images/p1.png";
import Icon2 from "../../images/p2.png";
import Icon3 from "../../images/p3.png";
import {
  ProjectsCard,
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsIcon,
  ProjectsH1,
  ProjectsH2,
  ProjectsP,
} from "./ProjectsElements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Shu Bookstore</ProjectsH2>
          <ProjectsP>sdfasdfasdfsafsdf</ProjectsP>
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Chrome extension</ProjectsH2>
          <ProjectsP>sdfasdfasdfsafsdf</ProjectsP>
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>DAB Game</ProjectsH2>
          <ProjectsP>sdfasdfasdfsafsdf</ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
