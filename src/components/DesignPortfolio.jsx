import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';
import finalImg from '../assets/image/final.png';
import balendaImg from '../assets/image/balenda.png';
import mobileImg from '../assets/image/mobile.png';

const DesignPortfolio = () => {
    const [hoveredId, setHoveredId] = useState(null);

    // Placeholder - would ideally come from constants.js
    const designs = [
        { id: 1, title: 'Part Computer', type: 'Mobile App', img: mobileImg },
        { id: 2, title: 'Fashion Store', type: 'Web Design', img: balendaImg },
        { id: 3, title: 'Travel', type: 'Poster', img: finalImg },
    ];

    return (
        <section id="design" className="py-5 mb-5">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="fw-bold display-5 mb-3">UI/UX <span style={{ color: 'var(--accent-purple)' }}>Portfolio</span></h2>
                    <p className="text-secondary">Selected works in interface and experience design.</p>
                </div>

                <Row className="g-4">
                    {designs.map((item, index) => (
                        <Col md={6} lg={4} key={item.id} data-aos="fade-up" data-aos-delay={index * 150}>
                            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} className="h-100">
                                <div
                                    className="position-relative rounded-3 overflow-hidden glass-card group h-100"
                                    role="button"
                                    onMouseEnter={() => setHoveredId(item.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    <div className="w-100 bg-black d-flex align-items-center justify-content-center" style={{ height: '400px' }}>
                                        <img
                                            src={item.img}
                                            className="img-fluid"
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                objectFit: hoveredId === item.id ? 'contain' : 'cover',
                                                transition: 'object-fit 0.3s ease' // Note: object-fit is not animatable in all browsers, but acts as a nice snap
                                            }}
                                            alt={item.title}
                                        />
                                    </div>
                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-black" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', pointerEvents: 'none' }}>
                                        <h4 className="text-white mb-0">{item.title}</h4>
                                        <small className="text-info">{item.type}</small>
                                    </div>
                                </div>
                            </Tilt>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default DesignPortfolio;
