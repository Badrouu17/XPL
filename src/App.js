import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Maps from "./components/Maps";
import News from "./components/News";
import Footer from "./components/Footer";
import axios from "axios";

import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

class App extends Component {
  state = {
    data: null,
    url: "https://api.nasa.gov/planetary/apod?api_key=",
    key: "19gQpVmWr1zDUYViDkd1jqsr44Pru0F5dj0NUJYo"
  };

  async componentDidMount() {
    const { url, key } = this.state;
    const { data } = await axios.get(url + key);
    this.setState({ data });
  }

  render() {
    return (
      <div className="app container">
        <div className="container-stretch">
          <Home></Home>
          <About></About>
          <Maps></Maps>
          <News data={this.state.data}></News>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
