import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cluster from "../../Assets/Projects/galaxy-clusters.png";
import snews_pt from "../../Assets/Projects/snews_logo.png";
import ptany from "../../Assets/Projects/kara-pythonanywhere.png";
import timebox from "../../Assets/Projects/timebox-notes-organizer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <h2 className="project-heading">
          -Working on updating this page-
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snews_pt}
              isBlog={false}
              title="SNEWS PT"
              description="Supernova Early Warning System Frontend Software, Publishing Tools"
              ghLink="https://github.com/SNEWS2/SNEWS_Publishing_Tools"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snews_pt}
              isBlog={false}
              title="SNEWS CS"
              description="Supernova Early Warning System Backend Software, Coincidence System"
              ghLink="https://github.com/SNEWS2/SNEWS_Coincidence_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ptany}
              isBlog={true}
              title="SNEWS Dashboard"
              description="SNEWS Dashboard for time delay estimation"
              demoLink="https://kara.pythonanywhere.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cluster}
              isBlog={false}
              title="eROSITA Galaxy Clusters Mass Estimation"
              description="eROSITA Galaxy Clusters Mass Estimation using Machine Learning"
              demoLink="https://arxiv.org/abs/2305.00016"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timebox}
              title="TimeBox"
              description="A timeboxing app to manage your daily schedule and priorities."
              ghLink="https://github.com/KaraMelih/timebox-notes-organizer"
              demoLink="" // optional or remove
              // extraLink="https://karamelih.github.io/timebox/"
              extraLink="https://timebox-notes-organizer.lovable.app/"
              extraLabel="Open App"
            />
          </Col>

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={editor}*/}
          {/*    isBlog={false}*/}
          {/*    title="Editor.io"*/}
          {/*    description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"*/}
          {/*    ghLink="https://github.com/soumyajit4419/Editor.io"*/}
          {/*    demoLink="https://editor.soumya-jit.tech/"              */}
          {/*  />*/}
          {/*</Col>*/}

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={leaf}*/}
          {/*    isBlog={false}*/}
          {/*    title="Plant AI"*/}
          {/*    description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."*/}
          {/*    ghLink="https://github.com/soumyajit4419/Plant_AI"*/}
          {/*    demoLink="https://plant49-ai.herokuapp.com/"*/}
          {/*  />*/}
          {/*</Col>*/}

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={suicide}*/}
          {/*    isBlog={false}*/}
          {/*    title="Ai For Social Good"*/}
          {/*    description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."*/}
          {/*    ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"*/}
          {/*    // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here*/}
          {/*  />*/}
          {/*</Col>*/}

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={emotion}*/}
          {/*    isBlog={false}*/}
          {/*    title="Face Recognition and Emotion Detection"*/}
          {/*    description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.*/}
          {/*    Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."*/}
          {/*    ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"*/}
          {/*    // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here */}
          {/*  />*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
