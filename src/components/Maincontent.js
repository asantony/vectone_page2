import React, { Component } from 'react';
import { Row, Container, Col, Image } from 'react-bootstrap';
import { isMobile, isTablet } from 'react-device-detect';
import { Card } from 'react-bootstrap';
import CardHolder from "./CardHolder"
/* import './Maincontent.css'; */
var starterItem = {
    index: 0,
    title: "Starter",
    price: "£6.99",
    plan: "Startup Plan",
    txt: "Up to 20 users only Business phone or toll- free numbers Unlimited calls within the US/CA* Unlimited business SMS Voicemail-to-text Team messaging Document sharing",
    movedown: "none"
}
var StandardItem = {
    index: 1,
    title: "Standard",
    price: "£12.99",
    plan: "Everything in Startup plus",
    txt: "No limit on number of users Business phone numbers in over 100 countries Unlimited internet fax Unlimited audio conferencing Video meetings with up to 100 participants Up to 24-hour meeting duration Quality-of-service reports Popular integrations including Office 365, G Suite, Slack, and more 24/7 support",
    movedown: "none"
}
var ProfessionalItem = {
    index: 2,
    title: "Professional",
    price: "£20.99",
    plan: "Everything in Standard plus",
    txt: "Automatic call recording Single Sign-on Multi-site admin and management Up to 8-digit extensions with site codes Hot desking Advanced call handling including whisper, barge, and more Video meetings with up to 200 participants Real-time analytics Popular CRM integrations with Salesforce, Zendesk, and more",
    movedown: "block"
}
var EnterpriseItem = {
    index: 3,
    title: "Enterprise",
    price: "£26.99",
    plan: "Everything in Professional Plus",
    txt: "Device status reports Device status alerts Unlimited storage**",
    movedown: "none"
}

export default class Maincontent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (isMobile) {
            var addMargin = {
                margin: "15px auto"
            }
            var setMargin = {
                border: "transparent",
                height: "auto"
            }
            var reducepadd = {
                padding: "30px !important",
                borderRadius: "11px"
            }
            var reducemargin = {
                marginTop: "-165px"
            }
        }
        return (
            <Container className="typecontainer" fluid style={reducemargin} >
                <Row className="typecontainerHolder" style={reducepadd}>
                    <Col xs={12} md={12} lg={3} style={addMargin}>
                        <div className="startercontainer" style={setMargin}>
                            <CardHolder item={starterItem} />
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={3} style={addMargin} >
                        <div className="standardcontainer" style={setMargin}>
                            <CardHolder item={StandardItem} />
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={3} style={addMargin} >
                        <div className="professionalcontainer" style={setMargin}>
                            <CardHolder item={ProfessionalItem} />
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={3} style={addMargin}>
                        <div className="enterprisecontainer" style={setMargin}>
                            <CardHolder item={EnterpriseItem} />
                        </div>
                    </Col>
                </Row>
            </Container >
        )
    }
}