import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { config } from './config';
import Chart from "./Chart";
import {DropAnswers} from './dropAnswers'
import { Container } from 'react-bootstrap';

// eslint-disable-next-line no-extend-native
Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

export class Charts extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = defaultState;
        let now = new Date();
        let futureDate = new Date().addDays(1);
        this.state.tideDaysFilter = {"reading.time": {$gte: now, $lte: futureDate}};
        this.state.weatherFilter = {"time": {$gte: now, $lte: futureDate}};
    }
    
    handleDays = (days) => {
        this.setState({days: Number(days)});
        let now = new Date();
        let futureDate = new Date().addDays(days);
        this.setState({tideDaysFilter: {"reading.time": {$gte: now, $lte: futureDate}}});
        this.setState({weatherFilter: {"time": {$gte: now, $lte: futureDate}}});
    }
    
    render() {
        return (
            <div>
                <div className='charts'>
                    <Container fluid>
                        <Form>
                            <Row>
                                <Col><h1>Île d'Oléron Weather, Tide and Surf</h1></Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="validationCustom27">
                                        <Form.Text className="text-muted">Days to forecast</Form.Text>
                                        <DropdownButton
                                            variant="outline-secondary"
                                            title={this.state.days}
                                            id="input-group-dropdown-1"
                                            onSelect={this.handleDays}
                                            >
                                            <DropAnswers options={[1,2,3,4,5,6,7]}/>
                                        </DropdownButton>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Chart height={'600px'} width={'800px'} chartId={config.weatherChartId} filter={this.state.weatherFilter}/>
                                </Col>
                                <Col>
                                    <Chart height={'600px'} width={'500px'} chartId={config.tempTableId} filter={this.state.weatherFilter}/>
                                </Col>
                            </Row>
                            {/* <Row>
                            <Chart height={'600px'} width={'800px'} chartId={config.tideChartId}/>
                            </Row> */}
                            <Row>
                                <Chart height={'600px'} width={'1400px'} chartId={config.cloudCoverId} filter={this.state.weatherFilter}/>
                            </Row>
                            <Row>
                                <Col>
                                    <Chart height={'600px'} width={'800px'} chartId={config.flexTideChart} filter={this.state.tideDaysFilter}/>
                                </Col>
                                <Col>
                                    <Chart height={'600px'} width={'500px'} chartId={config.extremeTideTableId} filter={this.state.weatherFilter}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Chart height={'600px'} width={'800px'} chartId={config.wavesWindChartId} filter={this.state.weatherFilter}/>
                                </Col>
                                <Col>
                                    <Chart height={'600px'} width={'800px'} chartId={config.wavesWindChartTable} filter={this.state.weatherFilter}/>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </div>
            </div>
            )
        }
    }
    
    const defaultState = {
        days: 1,
        tideDaysFilter: {},
        weatherFilter: {}
    }