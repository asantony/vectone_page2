import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { isMobile, isTablet } from 'react-device-detect';
import keyfeature from "./Keyfeature";
import Additionalfeature from "./Additionalfeature";
import Csfeature from "./csfeature";
import TableHolder from "./TableHolder";

export default class TableItems extends Component {
    constructor(props) {
        super(props)
    }
    callforTable = (itemsArray) => {
        const rowLen = itemsArray.length;
        return (
            itemsArray.map((element, index) => {
                if (rowLen === index + 1) {
                    var removeborder = {
                        border: "transparent"
                    }
                }
                return (
                    <tr className="setcolwidth" style={removeborder}>
                        <td>{element.item1}</td>
                        {
                            (element.item2 == "tick") ? <td className="dcolor"><img className="imgstyle" src="./assets/tick.png"></img></td> : <td className="dcolor">{element.item2}</td>
                        }
                        {
                            (element.item3 == "tick") ? <td ><img className="imgstyle" src="./assets/tick.png"></img></td> : <td >{element.item3}</td>
                        }
                        {
                            (element.item4 == "tick") ? <td className="dcolor"><img className="imgstyle" src="./assets/tick.png"></img></td> : <td className="dcolor">{element.item4}</td>
                        }
                        {
                            (element.item5 == "tick") ? <td ><img className="imgstyle" src="./assets/tick.png"></img></td> : <td >{element.item5}</td>
                        }
                    </tr>
                )
            })
        )
    }
    render() {
        return (
            <Container className="compareplanscontainer" fluid>
                <Row className="compareplanstable">
                    <Table border className="featuretable" responsive>
                        <tbody>
                            <tr className="setcolwidth tdtile">
                                <td>KEY Features</td>
                                <td className="dcolor"></td>
                                <td></td>
                                <td className="dcolor"></td>
                                <td></td>
                            </tr>
                            {
                                this.callforTable(keyfeature)
                            }
                        </tbody>
                    </Table>
                    <Table border className="featuretable" responsive>
                        <tbody>
                            <tr className="setcolwidth tdtile">
                                <td>ADDITIONAL FEATURES</td>
                                <td className="dcolor"></td>
                                <td></td>
                                <td className="dcolor"></td>
                                <td></td>
                            </tr>
                            {
                                this.callforTable(Additionalfeature)
                            }
                        </tbody>
                    </Table>
                    <Table border className="featuretable" responsive>
                        <tbody>
                            <tr className="setcolwidth tdtile">
                                <td>Customer Support Features</td>
                                <td className="dcolor"></td>
                                <td></td>
                                <td className="dcolor"></td>
                                <td></td>
                            </tr>
                            {
                                this.callforTable(Csfeature)
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container >
        )
    }
}