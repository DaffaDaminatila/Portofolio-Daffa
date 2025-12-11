import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
// import avatarImg from 'src/assets/image/daffa.jpg';

const Hero = () => {
    return (
        <section id="home" className="d-flex align-items-center position-relative overflow-hidden" style={{ minHeight: '100vh', paddingTop: '80px' }}>

            {/* Background Ambience */}
            <div className="position-absolute top-0 start-50 translate-middle floating"
                style={{ width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(79,156,255,0.12) 0%, transparent 60%)', zIndex: -1, filter: 'blur(40px)' }}>
            </div>
            <div className="position-absolute bottom-0 end-0 floating-reverse"
                style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(179,107,255,0.12) 0%, transparent 60%)', animationDelay: '1s', zIndex: -1, filter: 'blur(30px)' }}>
            </div>
            <div className="position-absolute top-20 start-10 floating"
                style={{ width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0,242,255,0.08) 0%, transparent 60%)', animationDelay: '3s', zIndex: -1, filter: 'blur(20px)' }}>
            </div>

            <Container>
                <Row className="align-items-center">
                    <Col lg={7} className="mb-5 mb-lg-0" data-aos="fade-right">
                        <Badge bg="transparent" className="border border-secondary text-secondary mb-3 px-3 py-2 fw-normal rounded-pill">
                            <i className="bi bi-code-slash me-2"></i>Full-Stack Developer
                        </Badge>
                        <h1 className="display-1 fw-bold mb-4">
                            Hi, I’m <span className="text-white">Daffa</span>
                            <span style={{ color: 'var(--accent-blue)' }}>.</span>
                        </h1>
                        <h2 className="display-6 text-secondary mb-4">
                            Web Developer & <br />
                            <span className="text-white glow-text">UI/UX Designer</span>
                        </h2>
                        <p className="lead text-secondary mb-5" style={{ maxWidth: '500px' }}>
                            I create modern, responsive websites and applications that mix <span className="text-white">clean code</span> with <span className="text-white">stunning designs</span>.
                        </p>
                        <div className="d-flex gap-3">
                            <Button href="#projects" className="btn-primary-custom">
                                View Coding Projects
                            </Button>
                            <Button href="#design" variant="outline-light" className="btn-outline-custom border-white text-white">
                                UI/UX Portfolio
                            </Button>
                        </div>

                        <div className="mt-5 d-flex gap-5 text-secondary">
                            <div>
                                <h4 className="fw-bold text-white mb-0">5+</h4>
                                <small>Projects Done</small>
                            </div>
                            {/* <div>
                                <h4 className="fw-bold text-white mb-0">3+</h4>
                                <small>Years Exp</small>
                            </div> */}
                        </div>
                    </Col>

                    <Col lg={5} className="text-center position-relative" data-aos="fade-left" data-aos-delay="200">
                        <div className="glass-card p-4 d-inline-block floating" style={{ animationDuration: '8s' }}>
                            <img
                                src='../assets/image/daffa.jpg'
                                alt="Profile"
                                className="img-fluid rounded-circle border border-2 border-secondary"
                                style={{ maxWidth: '300px', boxShadow: '0 0 30px rgba(79,156,255,0.2)' }}
                            />
                        </div>
                        {/* Decorative orbit elements could go here */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
