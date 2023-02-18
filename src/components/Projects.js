import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Expense Tracker",
      description: "HTML CSS JS",
      imgUrl: projImg1,
      link: "https://github.com/wiebuu/Expense-Tracker"
    },
    {
      title: "Vowel Counter",
      description: "React",
      imgUrl: projImg2,
      link: "https://github.com/wiebuu/Vowel-Counter"
    },
    // {
    //   title: "To-Do List",
    //   description: "HTML CSS JS",
    //   imgUrl: projImg3,
    //   link: "https://github.com/wiebuu/to-do-list"
    // },
    {
      title: "Memory Game",
      description: "React",
      imgUrl: projImg4,
      link: "https://github.com/wiebuu/Memory-Game"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are repositories of projects I've created.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                      </Tab.Container>
              </div>} 
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
