import React from 'react'
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown'
import DataSelector from '../../utils/getOptions.js';

export default function YearSelect(props) {
    //Write logic to render all countries as dropdown options
    const options = DataSelector().yearOption;
    return(
        <div className="parameter-select">
            <Dropdown options={options} onChange={props.changeEvent} value={props.defaultChoice} placeholder={props.defaultChoice} />
        </div>
    )
}