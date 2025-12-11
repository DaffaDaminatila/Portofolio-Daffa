import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SOCIAL_LINKS, PROFILE_INFO } from '../data/constants';

const Footer = () => {
    return (
        <footer className="py-4 border-top border-secondary bg-dark" style={{ borderColor: 'rgba(255,255,255,0.05) !important' }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                        <small className="text-secondary">© {new Date().getFullYear()} {PROFILE_INFO.name}. All rights reserved.</small>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <div className="d-flex justify-content-center justify-content-md-end gap-3 text-secondary">
                            <a href={SOCIAL_LINKS.github} className="text-secondary text-decoration-none">GitHub</a>
                            <a href={SOCIAL_LINKS.linkedin} className="text-secondary text-decoration-none">LinkedIn</a>
                            <a href={SOCIAL_LINKS.email} className="text-secondary text-decoration-none">Email</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
