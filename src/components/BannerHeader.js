import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { isMobile, isTablet } from 'react-device-detect';

export default class BannerHeader extends Component {
    constructor(props) {
        super(props)
    }
    renderforDevice = () => {
        return (
            <Container className="web-bannercontainer" fluid>
                <Row className="align-items-center mobtexttitle">
                    <h2>Find the Right Plan for your Communication</h2>
                </Row>
                <Row className="mobrangemonthlycontainer">
                    <Col xs={12} md={12} lg={6} className="mob-userrangecontainer">
                        <div>
                            <span>Users Range</span>
                        </div>
                        <div>
                            <p className="mobuserrange">
                                <span className="mobuserbackground">
                                    <span className="bothrange">1-19</span>
                                    <span className="centerrange">20-99</span>
                                    <span className="bothrange">100+</span>
                                </span>
                            </p>
                        </div>

                    </Col>
                    <Col xs={12} md={12} lg={6} className="mob-monthly">
                        <div>
                            <span>Monthly</span>
                        </div>
                        <div className="mobmonthcontainer">
                            <p>
                                <span className="bothsidemonth">12 Months</span>
                                <span className="centersidemonth">24 Months</span>
                                <span className="onesidemonth">36 Months</span>
                            </p>
                        </div>

                    </Col>
                </Row>
            </Container >
        )
    }
    renderforDesk = () => {
        return (
            <Container className="web-bannercontainer" fluid>
                <Row className="align-items-center texttitle">
                    <h2>Find the Right Plan for your Communication</h2>
                </Row>
                <Row className="rangemonthlycontainer">
                    <Col xs={12} md={12} lg={6} className="userrangecontainer">
                        <div>
                            <p className="userrange">
                                <span className="userrangetitle">Users Range</span>
                                <span className="userbackground">
                                    <span className="bothrange">1-19</span>
                                    <span className="centerrange">20-99</span>
                                    <span className="bothrange">100+</span>
                                </span>
                            </p>
                        </div>

                    </Col>
                    <Col xs={12} md={12} lg={6} className="monthly">
                        <div>
                            <p className="monthlyborder">
                                <span className="rightsidemonth">Monthly</span>
                                <span className="bothsidemonth">12 Months</span>
                                <span className="centersidemonth">24 Months</span>
                                <span className="onesidemonth">36 Months</span>
                            </p>
                        </div>

                    </Col>
                </Row>
            </Container >
        )
    }
    render() {
        if (isMobile) {
            return this.renderforDevice();
        } else {
            return this.renderforDesk();
        }

    }
}