import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

export default class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (isMobile) {
            return (
                <Container className="mob-vectone-footer" fluid>
                    <div className="mob-vectone-footer-row">
                        <img className="logo_icon" src="assets/logo.svg"></img>
                        <p>2020 UnifiedRing. All rights reserved</p>
                    </div>
                </Container>
            )
        } else {
            return (
                <Container className="vectone-footer" fluid>
                    <Row className="vectone-footer-row">
                        <Col xs={12} md={12} lg={4} className="vectone-footer-logo">
                            <img className="logo_icon" src="assets/logo.svg"></img>
                        </Col>
                        <Col xs={12} md={12} lg={4} className="vectone-alrights">
                            <p>2020 UnifiedRing. All rights reserved</p>
                        </Col>
                    </Row>
                    <div className="hangouticon">
                        <img src="assets/chat.svg"></img>
                    </div>
                </Container>
            )
        }
    }
}