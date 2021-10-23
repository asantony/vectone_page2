import React, { Component } from 'react';


export default class ButtonHolder extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        if (this.props.title == "Professional") {
            var moveup = {
                marginTop: "-33px"
            }
            var showcard = {
                display: "grid",
            }
        } else {
            var showcard = {
                display: "none",
            }
        }

        return (
            <div className="parentcontainer" style={moveup}>
                <div className="comparerecommonded" style={showcard}>
                    <img src="./assets/comparerecomended.svg"></img>
                </div>
                < div id="boxcontainer" className="compareassignmargin" >
                    <div className="comparecardtitle">
                        <span className="cardtitle">{this.props.title}</span>
                    </div>
                    <div className="bluebtn">
                        <p className="buytxt">Buy Now</p>
                    </div>
                    <div className="whitebtn">
                        <p className="trailtxt">14-Day Free Trial</p>
                    </div>
                    <p className="buttonHoldercardno">No credit card required</p>
                </div >
            </div>
        )
    }
}