import Container from "../Grid/Container";
import Row from "../Grid/Row";
import Col from "../Grid/Col";

import './Projects.scss';

const projectCols = [
    [ // Col 1
        {
            image: `#`,
            title: `Project 1`,
            url: `#`,
            ratio: 1.0, // 1:1,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
            image: `#`,
            title: `Project 2`,
            url: `#`,
            ratio: 1.67, // 16:10
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
            image: `#`,
            title: `Project 3`,
            url: `#`,
            ratio: 3.56, // 32:9
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        }
    ],
    [ // Col 2
        {
            image: `#`,
            title: `Project 4`,
            url: `#`,
            ratio: 2, // 16:8
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
            image: `#`,
            title: `Project 5`,
            url: `#`,
            ratio: 1.33, // 4:3
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
            image: `#`,
            title: `Project 6`,
            url: `#`,
            ratio: 1.78, // 16:9
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        }
    ],
    [ // Col
        {
            image: `#`,
            title: `Project 7`,
            url: `#`,
            ratio: 1.5, // 3:2
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
            image: `#`,
            title: `Project 8`,
            url: `#`,
            ratio: 1.25, // 5:4
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
            image: `#`,
            title: `Project 9`,
            url: `#`,
            ratio: 1.6, // 16:10
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        }
    ]
]

function Projects() {
    return (
        <section className="projects">
            <Container>
                <Row>
                    {projectCols.map((col, i1) => {
                        return (
                            <Col size={4} sizeSm={6} key={i1}>
                                {col.map((project, index) => {
                                    // Calculate px height based on width = 300px
                                    let height = 300 / project.ratio
                                    if (project.image === `#`) {
                                        project.image = `https://via.placeholder.com/300x${height}`
                                    }
                                    return (
                                        <div className="projects__item" key={index + i1}>
                                            <img src={project.image} className="projects__image" style={{
                                                /* maxHeight: `${height}px`,*/
                                                width: `100%`
                                            }} alt="project"/>
                                            <input type={`radio`} name={`projects`} id={`projects-${i1}-${index}`} className={`projects__item-radio`}/>
                                            <label className={`projects__item-overlay`} htmlFor={`projects-${i1}-${index}`}>
                                                <h3 className="projects__item-title">{project.title}</h3>
                                                <p className="projects__item-description">{project.description}</p>
                                            </label>
                                        </div>
                                    );
                                })}
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default Projects;