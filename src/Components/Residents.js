import React, { Component } from "react";

class Residents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      residents: []
    };
  }
//   resi = [];  
  getDetails = (arr,k) => {
    let url = arr[k];
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        // console.log(response);
        this.setState({ residents: [...this.state.residents, response.name] })
        k++;
        if(k < arr.length) {
          this.getDetails(arr,k);     
        }
      });    
  }

//   getResidents = () => {
//     // console.log(this.props.residents);
//     // let url = "https://swapi.dev/api/planets/";
//     // fetch(url)
//     //   .then((res) => {
//     //     return res.json();
//     //   })
//     //   .then((response) => {
//     //     console.log(response);
//     //     this.setState({ result: response.results });
//     //   });
//   };
  componentDidMount() {
    // this.getResidents();
    this.getDetails(this.props.residents,0);
  }
  
  render() {
    // console.log('abc');
    return (
      <div>
          {/* residents */}
          {this.state.residents}
      </div>
    );
  }
}
export default Residents;
