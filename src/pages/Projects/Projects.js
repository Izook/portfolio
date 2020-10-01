import React from "react";

import "./Projects.css";

import PageBaseComponent from "../../components/PageBaseComponent/PageBaseComponent";
import Carousel from "../../components/Carousel/Carousel";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";

import projects from "../../lib/projectsList";

const Projects = () => {
  return (
    <PageBaseComponent className="Projects">
      <ModalContainer>
        <Modal isGhost="true" isBackless="true">
          <p>Here are some of my latest projects:</p>
          <Carousel>
            {projects.map((project) => (
              <div key={project.name}>
                <img alt={project.imageAlt} src={project.imagePath} />
                <h1>{project.name}</h1>
                <section
                  dangerouslySetInnerHTML={{ __html: project.descriptionHTML }}
                ></section>
              </div>
            ))}
          </Carousel>
        </Modal>
      </ModalContainer>
    </PageBaseComponent>
  );
};

export default Projects;
