import React from 'react';
import { Container, Row, Col, ProgressBar, Badge } from 'react-bootstrap';
import { SKILLS } from '../data/constants';

import Tilt from 'react-parallax-tilt';

const Skills = () => {
    return (
        <section id="skills" className="py-5 position-relative">
            <Container className="py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold fs-1">My <span style={{ color: 'var(--accent-purple)' }}>Skills</span></h2>
                    <p className="text-secondary">Technologies and tools I use to create digital products.</p>
                </div>

                <Row className="g-4">
                    <Col md={6} data-aos="fade-right">
                        <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} glareEnable={true} glareMaxOpacity={0.1} className="h-100">
                            <div className="glass-card p-4 h-100">
                                <h3 className="h4 mb-4 border-bottom border-secondary pb-2 d-inline-block">Frontend Development</h3>
                                {SKILLS.filter(s => ['React', 'JavaScript', 'Bootstrap 5'].includes(s.name)).map(skill => (
                                    <div key={skill.name} className="mb-3">
                                        <div className="d-flex justify-content-between mb-1">
                                            <span className="fw-bold"><i className={`bi ${skill.icon} me-2 text-primary`}></i>{skill.name}</span>
                                            <span className="small text-secondary">{skill.level}</span>
                                        </div>
                                        <ProgressBar now={skill.level === 'Advanced' ? 90 : 70} variant="info" style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
                                    </div>
                                ))}
                                <div className="mt-4">
                                    <Badge bg="dark" className="me-2 mb-2 p-2 border border-secondary text-secondary">HTML5</Badge>
                                    <Badge bg="dark" className="me-2 mb-2 p-2 border border-secondary text-secondary">CSS3</Badge>
                                    {/* <Badge bg="dark" className="me-2 mb-2 p-2 border border-secondary text-secondary"></Badge> */}
                                    <Badge bg="dark" className="me-2 mb-2 p-2 border border-secondary text-secondary">Bootstrap 5</Badge>
                                </div>
                            </div>
                        </Tilt>
                    </Col>

                    <Col md={6} data-aos="fade-left" data-aos-delay="200">
                        <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} glareEnable={true} glareMaxOpacity={0.1} className="h-100">
                            <div className="glass-card p-4 h-100">
                                <h3 className="h4 mb-4 border-bottom border-secondary pb-2 d-inline-block">Tools & Others</h3>
                                {SKILLS.filter(s => ['Node.js', 'Figma'].includes(s.name)).map(skill => (
                                    <div key={skill.name} className="mb-3">
                                        <div className="d-flex justify-content-between mb-1">
                                            <span className="fw-bold"><i className={`bi ${skill.icon} me-2 text-primary`}></i>{skill.name}</span>
                                            <span className="small text-secondary">{skill.level}</span>
                                        </div>
                                        <ProgressBar now={skill.level === 'Advanced' ? 85 : 60} variant="purple" style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
                                    </div>
                                ))}
                                <div className="mt-4">
                                    <Badge bg="dark" className="me-2 mb-2 p-2 border border-secondary text-secondary">Git</Badge>
                                    <Badge bg="dark" className="me-2 mb-2 p-2 border border-secondary text-secondary">VS Code</Badge>
                                    <Badge bg="dark" className="me-2 mb-2 p-2 border border-secondary text-secondary">Postman</Badge>
                                    <Badge bg="dark" className="me-2 mb-2 p-2 border border-secondary text-secondary">Vercel</Badge>
                                </div>
                            </div>
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
