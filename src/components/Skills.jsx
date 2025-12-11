import React, { useState } from 'react';
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import { SKILLS } from '../data/constants';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Beginner', 'Intermediate', 'Advanced'];

    const filteredSkills = filter === 'All'
        ? SKILLS
        : SKILLS.filter(skill => skill.level === filter);

    return (
        <section id="skills" className="py-5 position-relative">
            <Container className="py-5">
                <div className="text-center mb-5" data-aos="fade-up">
                    <h2 className="fw-bold fs-1 mb-3">My <span style={{ color: 'var(--accent-purple)' }}>Skills</span></h2>
                    <p className="text-secondary mx-auto mb-4" style={{ maxWidth: '600px' }}>
                        Stack & Tools I use to build powerful digital products.
                    </p>

                    {/* Filter Buttons */}
                    <div className="d-flex justify-content-center gap-2 flex-wrap mb-4">
                        {categories.map(cat => (
                            <Button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                variant={filter === cat ? "primary" : "outline-light"}
                                className={filter === cat ? "btn-primary-custom" : "btn-outline-custom border-secondary text-secondary"}
                                style={{ minWidth: '100px' }}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>

                <Row className="g-4 justify-content-center">
                    {filteredSkills.map((skill, index) => (
                        <Col key={skill.name} lg={3} md={4} sm={6} data-aos="fade-up" data-aos-delay={index * 50}>
                            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={true} glareMaxOpacity={0.15} scale={1.02} className="h-100">
                                <div className="glass-card p-4 h-100 d-flex flex-column align-items-center justify-content-center text-center position-relative overflow-hidden group-hover-glow">
                                    {/* Icon Background Glow */}
                                    <div className="position-absolute top-50 start-50 translate-middle"
                                        style={{ width: '80px', height: '80px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)', filter: 'blur(20px)', zIndex: 0 }}>
                                    </div>

                                    <div className="mb-3 position-relative" style={{ zIndex: 1 }}>
                                        <div className="rounded-circle d-flex align-items-center justify-content-center bg-dark border border-secondary" style={{ width: '60px', height: '60px' }}>
                                            <i className={`bi ${skill.icon} fs-3`} style={{ color: 'var(--accent-purple)' }}></i>
                                        </div>
                                    </div>

                                    <h4 className="h6 fw-bold mb-3">{skill.name}</h4>

                                    <div className="w-100 mt-auto">
                                        <div className="d-flex justify-content-between mb-1 small text-secondary">
                                            <span>{skill.level}</span>
                                            <span>{skill.percentage}%</span>
                                        </div>
                                        <ProgressBar
                                            now={skill.percentage}
                                            variant="custom"
                                            style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.05)' }}
                                        />
                                        <style>{`
                                            .progress-bar-custom {
                                                background: var(--accent-purple);
                                                position: relative;
                                                overflow: hidden;
                                            }
                                            .progress-bar {
                                                background-color: var(--accent-purple);
                                                box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
                                            }
                                        `}</style>
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

export default Skills;
