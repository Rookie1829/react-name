import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Contact() {
    return (
        <center>
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={8}>
                    <h1>Contact Us</h1>
                    <p>Please fill out the form below to contact us.</p>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </center>
    );
}
