
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import {useState} from "react";
export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email: ${email}\nPassword: ${password}`);
    };

    return (
        <center>
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Sign up</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </center>
    );
}
