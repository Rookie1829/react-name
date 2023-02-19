import "./styles.css"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import $ from 'jquery';
export default function About() {
    return (
        <center>
        <Container>
            <Row>
                <Col>
                    <p></p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Our Team</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <img src="https://via.placeholder.com/150" alt="Team Member" />
                    <h3>John Naquin</h3>
                    <p>Computer Science</p>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <img src="https://via.placeholder.com/150" alt="Team Member" />
                    <h3>Bradley Pranther</h3>
                    <p>Informatics</p>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <img src="https://via.placeholder.com/150" alt="Team Member" />
                    <h3>Devin Arton</h3>
                    <p>Informatics</p>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <img src="https://via.placeholder.com/150" alt="Team Member" />
                    <h3>Jada</h3>
                    <p>Computer Science</p>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <img src="https://via.placeholder.com/150" alt="Team Member" />
                    <h3>Owyn</h3>
                    <p>Informatics</p>
                </Col>

            </Row>
        </Container>
        </center>

        );
}