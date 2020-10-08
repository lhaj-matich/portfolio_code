import React, { Component } from "react";
import Header from "./Component/Header";
import AboutMe from "./Component/About/About";
import Resume from "./Component/Resume/resume";
import RecentWork from "./Component/RecentWork/recentWork";
import Contact from "./Component/Contact/contact";
import SideNav from "./Component/Widgets/SideNav";

class App extends Component {
  state = {
    showNav: false,
    class: "navigation",
  };

  handleSideNav = (action) => {
    this.setState({ showNav: action });
  };

  handleScroll = () => {
    if (window.scrollY > 260) {
      this.setState({ class: "navigation--fixed" });
    } else {
      this.setState({ class: "navigation" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className="container">
        <SideNav
          onCloseNav={() => this.handleSideNav(false)}
          showNav={this.state.showNav}
        />
        <Header
          onOpenNav={() => this.handleSideNav(true)}
          config={this.state.class}
        />
        <AboutMe />
        <Resume />
        <RecentWork />
        <Contact />
      </div>
    );
  }
}

export default App;
