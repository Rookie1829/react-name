import "./styles.css"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
    return (
        <center>
        <div>
            <div className="row">
                <div className="logo-row">
                    <img src={require('./images/logo.png')} />
                </div>
            </div>
                <Container>
                    <h1>Welcome to My Website!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for
                        calling extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Container>
            <Container>
                <Row>
                    <Col>
                        <h2>Section 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                            sed nibh euismod, gravida enim a, tincidunt est. Sed euismod
                            vehicula risus, vel iaculis libero maximus vel. Suspendisse
                            potenti. Proin sit amet erat vel tellus vestibulum tincidunt.
                        </p>
                    </Col>
                    <Col>
                        <h2>Section 2</h2>
                        <p>
                            Sed euismod vehicula risus, vel iaculis libero maximus vel.
                            Suspendisse potenti. Proin sit amet erat vel tellus vestibulum
                            tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus sed nibh euismod, gravida enim a, tincidunt est.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Section 3</h2>
                        <p>
                            Proin sit amet erat vel tellus vestibulum tincidunt. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Vivamus sed nibh
                            euismod, gravida enim a, tincidunt est. Sed euismod vehicula risus,
                            vel iaculis libero maximus vel. Suspendisse potenti.
                        </p>
                    </Col>
                    <Col>
                        <h2>Section 4</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                            sed nibh euismod, gravida enim a, tincidunt est. Sed euismod
                            vehicula risus, vel iaculis libero maximus vel. Suspendisse
                            potenti. Proin sit amet erat vel tellus vestibulum tincidunt.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
        </center>
    );
}

        /*
        <>
        <h1>Home Page</h1>
        <header>
            <div className="row">
                <div className="logo-row">
                    <img src={require('./images/logo.png')} />
                </div>
            </div>
        </header>
        </>

         */
