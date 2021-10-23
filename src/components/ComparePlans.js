import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { isMobile, isTablet } from 'react-device-detect';
import ButtonHolder from "./ButtonHolder"

export default class ComparePlans extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container className="compareplanscontainer" fluid>
                <Row className="align-items-center comparetexttitle">
                    <h2>Compare Plans</h2>
                </Row>
                <Row className="compareplanstypecontainerHolder">
                    <Col xs={12} md={12} lg={3}>
                        <div className="compareplansstartercontainer">
                            <p>Have a question? <br /> Call <span className="contactnum">1800 856 2145</span></p>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={9} >
                        <Row>

                            <Col xs={12} md={12} lg={3} >
                                <ButtonHolder title="Starter" />
                            </Col>
                            <Col xs={12} md={12} lg={3} >
                                <ButtonHolder title="Standard" />
                            </Col>
                            <Col xs={12} md={12} lg={3} >
                                <ButtonHolder title="Professional" />
                            </Col>
                            <Col xs={12} md={12} lg={3} >
                                <ButtonHolder title="Enterprise" />
                            </Col>

                        </Row>
                    </Col>
                </Row>

            </Container >
        )
    }
}