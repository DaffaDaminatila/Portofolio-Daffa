import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { SOCIAL_LINKS } from '../data/constants';

const Contact = () => {
    return (
        <section id="contact" className="py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8} data-aos="zoom-in" data-aos-duration="800">
                        <div className="glass-card p-5">
                            <div className="text-center mb-5">
                                <h2 className="fw-bold mb-3">Let's Work <span className="text-primary">Together</span></h2>
                                <p className="text-secondary">Have a project in mind? Fill out the form below or send me an email.</p>
                            </div>

                            <Form action={`mailto:${SOCIAL_LINKS.email}`} method="post" encType="text/plain">
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="formName">
                                            <Form.Label className="text-secondary small">Your Name</Form.Label>
                                            <Form.Control type="text" name="name" placeholder="John Doe" className="bg-transparent text-white border-secondary" style={{ backdropFilter: 'blur(5px)' }} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="formEmail">
                                            <Form.Label className="text-secondary small">Email Address</Form.Label>
                                            <Form.Control type="email" name="email" placeholder="name@example.com" className="bg-transparent text-white border-secondary" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="formSubject">
                                    <Form.Label className="text-secondary small">Subject</Form.Label>
                                    <Form.Select name="subject" className="bg-transparent text-secondary border-secondary">
                                        <option value="Project Inquiry">Project Inquiry</option>
                                        <option value="Hiring">Hiring</option>
                                        <option value="Collaboration">Collaboration</option>
                                        <option value="Other">Other</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formMessage">
                                    <Form.Label className="text-secondary small">Message</Form.Label>
                                    <Form.Control as="textarea" name="message" rows={4} placeholder="Tell me about your project..." className="bg-transparent text-white border-secondary" />
                                </Form.Group>
                                <div className="text-center">
                                    <Button variant="primary" type="submit" className="btn-primary-custom w-100 py-3">
                                        Send Message to {SOCIAL_LINKS.email}
                                    </Button>
                                    {/* <div className="mt-3 text-secondary small">
                                        Or email me directly at: <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-info">{SOCIAL_LINKS.email}</a>
                                    </div> */}
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
