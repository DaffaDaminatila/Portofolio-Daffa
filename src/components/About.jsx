import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { SOCIAL_LINKS, PROFILE_INFO } from '../data/constants';

const About = () => {
    return (
        <section id="about" className="py-5 bg-transparent position-relative">
            <Container className="py-5">
                <Row className="align-items-center">
                    <Col lg={2} className="mb-4 mb-lg-1 text-center" data-aos="zoom-in">
                        {/* <div className="position-relative d-inline-block">
                            <div className="position-absolute w-100 h-100 rounded-circle border border-primary opacity-50" style={{ transform: 'scale(1.1)', top: 0, left: 0 }}></div>
                            <img
                                src="https://placehold.co/300x300/1a1d2d/FFF?text=Me"
                                alt="About Me"
                                className="img-fluid rounded-circle border border-2 border-primary"
                            />
                        </div> */}
                    </Col>
                    <Col lg={8} data-aos="fade-up">
                        <div className="glass-card p-4 p-md-5">
                            <h2 className="mb-4 fw-bold">About <span className="text-primary">Me</span></h2>
                            <p className="text-secondary lead">
                                I am a passionate <span className="text-white">{PROFILE_INFO.role}</span> and UI/UX enthusiast based in {PROFILE_INFO.location}.
                                I bridge the gap between engineering and design, creating products that not only work perfectly but look amazing.
                            </p>
                            <p className="text-secondary mb-4">
                                With a background in both technical implementation and visual design, I bring a unique perspective to every project.
                                I enjoy solving complex problems and turning abstract ideas into interactive reality.
                            </p>

                            <Row className="mb-4">
                                <Col sm={6}>
                                    <ul className="list-unstyled text-secondary">
                                        <li className="mb-2"><i className="bi bi-person me-2 text-primary"></i> <strong>Name:</strong> {PROFILE_INFO.name}</li>
                                        <li className="mb-2"><i className="bi bi-geo-alt me-2 text-primary"></i> <strong>Based in:</strong> {PROFILE_INFO.location}</li>
                                    </ul>
                                </Col>
                                <Col sm={6}>
                                    <ul className="list-unstyled text-secondary">
                                        <li className="mb-2"><i className="bi bi-envelope me-2 text-primary"></i> <strong>Email:</strong> {PROFILE_INFO.email}</li>
                                        <li className="mb-2"><i className="bi bi-briefcase me-2 text-primary"></i> <strong>Role:</strong> Freelancer & Open To Work</li>
                                    </ul>
                                </Col>
                            </Row>

                            <div className="d-flex gap-3">
                                <Button variant="outline-light" className="rounded-circle p-2" href={SOCIAL_LINKS.github} target="_blank"><i className="bi bi-github"></i></Button>
                                <Button variant="outline-light" className="rounded-circle p-2" href={SOCIAL_LINKS.linkedin} target="_blank"><i className="bi bi-linkedin"></i></Button>
                                <Button variant="outline-light" className="rounded-circle p-2" href={SOCIAL_LINKS.instagram} target="_blank"><i className="bi bi-instagram"></i></Button>
                                {/* <Button variant="outline-light" className="rounded-circle p-2" href={SOCIAL_LINKS.dribbble} target="_blank"><i className="bi bi-dribbble"></i></Button> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
