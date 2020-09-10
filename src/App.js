import React, { Component } from "react";
import Residents from './Components/Residents';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
  }

  getPlanets = () => {
    let url = "https://swapi.dev/api/planets/";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        // console.log(response);
        this.setState({ result: response.results });
      });
  };
 
  componentDidMount() {
    this.getPlanets();
  }
  render() {
    return (
      <ul>
        {this.state.result.map((item) => {
          return <li key={item.name + "_"}>{item.name}
                <Residents residents={item.residents}/>
          </li>;
        })}
      </ul>
    );
  }
}
export default MyComponent;
