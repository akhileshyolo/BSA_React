import React from 'react';
import Graph from './graph';
import CountrySelect from './country-select';
import YearSelect from './year-select';
import PollutantSelect from './pollutant-select';
import chartDataSet from '../../services/chartSeries';

export default class Sidebar extends React.Component {
  constructor(props) { 
      super(props);
      this.urlParams = new URLSearchParams(window.location.search)
      this.state = {
        country: this.urlParams.get('country'),
        year: this.urlParams.get('year'),
        pollutant: this.urlParams.get('pollutant')
      }

      this.updateRoute = function () {
        let queryString = Object.keys(this.state).map(i => `${i}=${this.state[i]}&`).join("");
        window.history.pushState(undefined, undefined, `/?${queryString}`)
      }
      this.updateState = (key,arg) => {
        this.setState({
          [key]: arg.value
        }, this.updateRoute);
      }
      this.countryChange = (arg) => {
        this.updateState("country", arg);
      }
      this.parameterChange = (arg) => {
        this.updateState("year", arg);
      }
      this.pollutantChange = (arg) => {
        this.updateState("pollutant", arg = {value: arg.value==='All' || arg.value=='null' ? '' :arg.value.replace(/ /g,'_')});
      }
      this.getEvents = function() {
        console.log(this.state);
      }
  }

  render() {
    return (
      <div className="sidebar">
        <div className="dropdowns">
          <CountrySelect changeEvent={this.countryChange} defaultChoice={this.state.country ?? "Select Country"} />
          <YearSelect changeEvent={this.parameterChange} defaultChoice={this.state.year ?? "Select Year"} />
          <PollutantSelect changeEvent={this.pollutantChange} defaultChoice={this.state.pollutant ? this.state.pollutant : "Select Pollutant Category"}  />
        </div>
        <Graph dataSet={chartDataSet(this.state)} country={this.state.country} />
      </div>
    );
  }
}
