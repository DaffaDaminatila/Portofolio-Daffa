import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { PROJECTS } from '../data/constants';
import Tilt from 'react-parallax-tilt';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Web App', 'Landing Page', 'API', 'Dashboard'];

    const filteredProjects = filter === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-5">
            <Container>
                <div className="d-flex flex-column align-items-center mb-5">
                    <h2 className="fw-bold display-5 mb-4">Coding <span style={{ color: 'var(--accent-blue)' }}>Projects</span></h2>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                        {categories.map(cat => (
                            <Button
                                key={cat}
                                variant={filter === cat ? 'primary' : 'outline-secondary'}
                                className={filter === cat ? 'btn-primary-custom' : 'btn-outline-custom text-white border-secondary'}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="projects-swiper pb-5 px-2"
                >
                    {filteredProjects.map((project, index) => (
                        <SwiperSlide key={project.id}>
                            <div data-aos="fade-up" data-aos-delay={index * 100} className="h-100">
                                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="h-100">
                                    <Card className="glass-card h-100 border-0 text-white overflow-hidden" style={{ cursor: 'pointer' }}>
                                        <div className="position-relative overflow-hidden">
                                            <Card.Img variant="top" src={project.image} style={{ transition: 'transform 0.5s ease' }} className="project-img" />
                                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75 project-overlay"
                                                style={{ opacity: 0, transition: 'opacity 0.3s ease' }}>
                                                <Button variant="outline-light" className="rounded-pill px-4">View Details</Button>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <div className="d-flex justify-content-between align-items-start mb-2">
                                                <Card.Title className="fw-bold">{project.title}</Card.Title>
                                                <Badge bg="dark" className="border border-secondary">{project.category}</Badge>
                                            </div>
                                            <Card.Text className="text-secondary small mb-3">
                                                {project.description}
                                            </Card.Text>
                                            <div className="d-flex gap-2 flex-wrap mb-3">
                                                {project.tech.map(t => (
                                                    <small key={t} className="text-info">#{t}</small>
                                                ))}
                                            </div>
                                            <div className="d-flex gap-3 mt-auto">
                                                <a href={project.demoLink} className="text-white text-decoration-none small"><i className="bi bi-eye me-1"></i> Live Demo</a>
                                                <a href={project.repoLink} className="text-white text-decoration-none small"><i className="bi bi-github me-1"></i> Source Code</a>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Tilt>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>

            <style>{`
        .project-img:hover { transform: scale(1.05); }
        .glass-card:hover .project-overlay { opacity: 1 !important; }
      `}</style>
        </section>
    );
};

export default Projects;
