import React from "react";
import YearPicker from "react-year-picker";

class YearPick extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    console.log(date);
  }
 
  render() {
    return <YearPicker onChange={this.handleChange} />;
  }
}

export default YearPick;