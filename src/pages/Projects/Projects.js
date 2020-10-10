import React from "react";

import PageBaseComponent from "../../components/PageBaseComponent/PageBaseComponent";
import { Carousel, Pane } from "../../components/Carousel/Carousel";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";

import projects from "../../lib/projectsList";

const Projects = () => {
  return (
    <PageBaseComponent className="Projects">
      <ModalContainer>
        <Modal isGhost="true" isBackless="true">
          <p>Here are some of my latest projects:</p>
        </Modal>
        <Modal isGhost="true">
          <Carousel>
            {projects.map((project) => (
              <Pane key={project.name}>
                <h2>{project.name}</h2>
                <img alt={project.imageAlt} src={project.imagePath} />
                <section
                  dangerouslySetInnerHTML={{ __html: project.descriptionHTML }}
                ></section>
              </Pane>
            ))}
          </Carousel>
        </Modal>
      </ModalContainer>
    </PageBaseComponent>
  );
};

export default Projects;
