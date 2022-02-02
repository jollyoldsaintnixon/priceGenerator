import React from "react";

export default class DropDown extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <select className="input dropdown-select" value={this.props.selectedItem} onChange={(e) => this.props.onSelect(e)}>
                <option disabled selected value={null} key={-1}> -- select an option -- </option>
                {this.props.itemList.map((item, i) => <option className="dropdown-option" value={item} key={i} >{item}</option>)}
            </select>
        )
    }
}