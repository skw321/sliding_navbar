import React, { Component } from 'react';
import './App.css';
import calcTime from './getTime';

const offset = [
  { city: "Cupertino", value: "-8" },
  { city: "New York City", value: "-5" },
  { city: "London", value: "+1" },
  { city: "Amsterdam", value: "+1" },
  { city: "Tokyo", value: "+9" },
  { city: "Hong Kong", value: "+8" },
  { city: "Sydney", value: "+11" }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        { section: "cupertino", label: "Cupertino" },
        { section: "new-york-city", label: "New York City" },
        { section: "london", label: "London" },
        { section: "amsterdam", label: "Amsterdam" },
        { section: "tokyo", label: "Tokyo" },
        { section: "hong-kong", label: "Hong Kong" },
        { section: "sydney", label: "Sydney" }
      ],
      refList: [],
      tranlateObject: {
        width: "",
        left: "",
        transform: ""
      },
      selected: "",
      time: ""
    };
  }

  componentDidMount() {
    console.log(this.state.refList);
  }

  saveRef = ref => {
    let newRefList = this.state.refList;
    newRefList.push(ref);
    this.setState({ refList: newRefList });
  };

  handleClick = e => {
    console.log(offset.find(x => x.city === e.target.name).value);
    this.setState({
      time: calcTime(
        e.target.name,
        offset.find(x => x.city === e.target.name).value
      )
    });
    this.setState({ selected: e.target.name });
    this.state.refList.forEach(ele => {
      if (ele.innerText === e.target.name) {
        this.setState({
          tranlateObject: {
            width: `${ele.offsetWidth}px`,
            left: `${ele.offsetLeft}px`
          }
        });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.cities.map(city => {
            return (
              <li key={city.label}>
                <a
                  ref={this.saveRef}
                  onClick={this.handleClick}
                  name={city.label}
                  style={{
                    color: this.state.selected === city.label ? "black" : ""
                  }}
                >
                  {city.label}
                </a>
              </li>
            );
          })}
          <li className="bottomline" style={this.state.tranlateObject} />
        </ul>
        <div style={{ color: "gray" }}>{this.state.time}</div>
      </div>
    );
  }
}

export default App;
