import React from "react";


export default class ScrollMenu extends React.Component {
    constructor(props) {
      super(props);
  
      this.listener = null;
      this.state = {
        status: "top"
      };
    }
  
    componentDidMount() {
      this.listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= 80) {
          if (this.state.status !== "amir") {
            this.setState({ status: "amir" });
          }
        } else {
          if (this.state.status !== "top") {
            this.setState({ status: "top" });
          }
        }
      });
    }
  
    componentDidUpdate() {
      document.removeEventListener("scroll", this.listener);
    }
  
    render() {
      return (
<>

<div class="menu" style={{
    backgroundColor: this.state.status === "top" ? "" : "white",
    position: "fixed",
    boxShadow: this.state.status === "top" ? "" : "0 5px 8px 0 rgba(0, 0, 0, .14)",
    margin: 0,
    padding: 0
}}>
  <div class="container" backgroundColor="red">
    <div class="row" backgroundColor="red">
      <div class="menu__wrapper d-none d-lg-block col-md-12" backgroundColor="red">
        <nav class="" >
          <ul>
            <li><a  style={{ color: this.state.status === "top" ? "" : "#2E2E2E", top: this.state.status === "top" ? "" : '-25px',  }} href="#hello">Hello</a></li>
            <li><a style={{ color: this.state.status === "top" ? "" : "#2E2E2E", top: this.state.status === "top" ? "" : '-25px',  }} href="#resume">Resume</a></li>
            <li><a style={{ color: this.state.status === "top" ? "" : "#2E2E2E", top: this.state.status === "top" ? "" : '-25px',  }} href="#portfolio">Portfolio</a></li>
            <li><a style={{ color: this.state.status === "top" ? "" : "#2E2E2E", top: this.state.status === "top" ? "" : '-25px',  }} href="#blog">blog</a></li>
          </ul>
        </nav>
      </div>
      
      <div class="menu__wrapper col-md-12 d-lg-none">
        <button type="button" class="menu__mobile-button">
          <span><i class="fa fa-bars" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  </div>
</div>

</>
      );
    }
  }