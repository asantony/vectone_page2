import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
/* import './Headermenu.css'; */
import { isMobile } from 'react-device-detect';

export default class Headermenu extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (isMobile) {
            var leftmarginstyle = {
                marginLeft: "0px"
            }
            var rightmarginstyle = {
                marginRight: "0px"
            }
            var logo_iconwidth = {
                width: "75%"
            }
        }
        return (
            <Container className="vectone-header" fluid>
                <div className="float-left vectone-logo" style={leftmarginstyle}>
                    <img className="logo_icon" style={logo_iconwidth} src="assets/logo.svg"></img>
                </div>
                <div className="float-right vectone-phone" style={rightmarginstyle}>
                    <img className="phoneicon" src="assets/call_icon.svg"></img>
                    <span>02034440000</span>
                </div>
            </Container>
        )

    }
}