import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import { isMobile, isTablet } from 'react-device-detect';

export default class BannerHeader extends Component {
    constructor(props) {
        super(props)
    }
    renderforDevice = () => {
        var showcard = {
            display: this.props.item.movedown,
            position: "relative",
            top: "40px",
            right: "5px"
        }
        if (this.props.item.movedown == "block") {
            var moveup = {
                marginTop: "40px"
            }
        }
        return (
            <div>
                <div className="recommonded" style={showcard}>
                    <img src="./assets/recommonded.svg"></img>
                </div>
                <Accordion>
                    <Accordion.Item eventKey={this.props.item.index}>
                        < div className="assignmargin" >
                            <div style={moveup}>
                                <span className="cardtitle">{this.props.item.title}</span>
                                <span className="cardprice">{this.props.item.price}</span>
                                <span className="cardusermonthly">/user/monthly</span>
                            </div>
                            <div className="bluebtn">
                                <p className="buytxt">Buy Now</p>
                            </div>
                            <div className="whitebtn">
                                <p className="trailtxt">14-Day Free Trial</p>
                            </div>
                            <p className="cardno">No credit card required</p>

                            <Accordion.Header>{this.props.item.plan}</Accordion.Header>
                            <Accordion.Body>
                                {this.props.item.txt}
                            </Accordion.Body>
                        </div >
                    </Accordion.Item>
                </Accordion>
            </div>
        )
    }
    renderforDesk = () => {
        var showcard = {
            display: this.props.item.movedown,
            position: "relative",
            top: "10px",
            right: "5px"
        }
        if (this.props.item.movedown == "block") {
            var moveup = {
                marginTop: "10px"
            }
        }

        return (
            <div>
                <div className="recommonded" style={showcard}>
                    <img src="./assets/recommonded.svg"></img>
                </div>
                < div className="assignmargin" style={moveup} >
                    <div>
                        <span className="cardtitle">{this.props.item.title}</span>
                        <span className="cardprice">{this.props.item.price}</span>
                        <span className="cardusermonthly">/user/monthly</span>
                    </div>
                    <div className="bluebtn">
                        <p className="buytxt">Buy Now</p>
                    </div>
                    <div className="whitebtn">
                        <p className="trailtxt">14-Day Free Trial</p>
                    </div>
                    <p className="cardno">No credit card required</p>
                    <p className="cardplan">{this.props.item.plan}</p>
                    <p className="cardtxt">{this.props.item.txt}</p>
                </div >
            </div>
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