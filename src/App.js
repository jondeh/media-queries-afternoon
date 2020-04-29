import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      seeDropdown: false
    }
  }

  handleToggle = () => {
    this.setState({seeDropdown: !this.state.seeDropdown})
  }
  
  render(){
  return (
    <div className="App">
        <div className="main">
        <header className="header">
          <div className="dropdown" style={{display: 
          this.state.seeDropdown ? "initial" : "none"
          }}>
                <p>SERVICES</p>
                <p>PORTFOLIO</p>
                <p>ABOUT</p>
                <p>TEAM</p>
                <p>CONTACT</p>
          </div>
          <div className="logo">Start Bootstrap</div>
          {this.state.seeDropdown
            ? (
              <></>
              )
            : (
                <>
                <button className="menu-button" onClick={this.handleToggle}>MENU</button>
                <nav className="nav">
                <p>SERVICES</p>
                <p>PORTFOLIO</p>
                <p>ABOUT</p>
                <p>TEAM</p>
                <p>CONTACT</p>
                </nav>
                </>
              )
        }
        </header>
        <div className="main-container">
          <div className="welcome">Welcome To Our Studio!</div>
          <div className="meet">IT'S NICE TO MEET YOU</div>
          <button className="more">TELL ME MORE</button>
        </div>
        </div>
        <div className="services"></div>
        <div className="portfolio"></div>
        <div className="about"></div>
        <div className="team"></div>
        <div className="contact"></div>
        <div className="footer"></div>
    </div>
  );
}
}

export default App;
