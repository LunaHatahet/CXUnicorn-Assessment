import "./styles.css";
import React, { Component } from 'react';
import { Player } from 'video-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('https://api.sampleapis.com/futurama/episodes')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });

  }
  
  render() {
    var { isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div> Loading...</div>;
    }

    else {

      return (
        <div className="App">
          <ol>
            {items.map(item => (
              <li key={item.id}>
                <h2> Title: {item.title} </h2> <h4> Original-Air-Date: {item.originalAirDate} </h4> <p> Description: {item.desc} </p> <br/> 
                <iframe width="420" height="315"
                src="https://www.youtube.com/watch?v=ScMzIvxBSi4">
                </iframe> 
              </li>
            ))}
          </ol>

        </div>
      );

    }
  }
}

export default App;