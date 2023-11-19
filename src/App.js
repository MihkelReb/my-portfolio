import React, { Component } from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: 'Menu',
    };
  }

  handleMenuChange = (menuName) => {
    this.setState({ activeMenu: menuName });
  };

  handleEmailClick = () => {
    window.open('mailto:mihkel.fox@gmail.com', '_blank');
  };

  handlePdfOpen = () => {
    window.open('/CV - Mihkel Rebane - 11.2023.pdf', '_blank');
  };
  
  handleButtonClick = () => {
    this.handleMenuChange('Menu');
    this.handlePdfOpen();
  };

  render() {
    const { activeMenu } = this.state;

    return (
      <div>
        <div>
          <img src='/Images/background-3.webp' alt='Secondary Background' className='background-3' />
          <img src='/Images/outline-top.webp' alt='White Outline Top' className='outline-top' />
          <img src='/Images/outline-bottom.webp' alt='White Outline Bottom' className='outline-bottom' />
        </div>
        <div className='header'></div>
        <div className="page-container">
          <div className='Name'><img src='/Images/Header/nimi.svg' alt='Mihkel Rebane' /></div>
          <div className='jobTitle'><img src='/Images/Header/amet.svg' alt='Junior Web-Developer' /></div>
          <div className='Portfolio'><img src='/Images/Header/portfolio.svg' alt='Portfolio' /></div>
          <div className='footer'>© 2023 MihkelRebane.com</div>
          {activeMenu === 'Menu' && <Menu onMenuChange={this.handleMenuChange} handleButtonClick={this.handleButtonClick} />}
          {activeMenu === 'MenuAbout' && <MenuAbout onMenuChange={this.handleMenuChange} handleButtonClick={this.handleButtonClick} handleEmailClick={this.handleEmailClick} />}
          {activeMenu === 'MenuProject' && <MenuProject onMenuChange={this.handleMenuChange} handleButtonClick={this.handleButtonClick} />}
        </div>
      </div>
    );
  }
}



class Menu extends Component {

	render() {
		return (
		  <div className="menu-container">
        <div className="square square-main square1" onClick={() => this.props.onMenuChange('Menu')}>
          <p className='button-text'>
          <img src='/Images/Buttons/home.svg' alt='Home'/></p>
        </div>
        <div className="square square-main square5" onClick={() => this.props.onMenuChange('MenuAbout')}>
          <p className='button-text'>
          <img src='/Images/Buttons/about.svg' alt='About'/></p>
        </div>
        <div className="square square-main square6" onClick={() => this.props.onMenuChange('MenuProject')}>
          <p className='button-text'>
          <img src='/Images/Buttons/projects.svg' alt='Projects'/></p>
        </div>
        <div className="square square-main square10" onClick={this.props.handleButtonClick}>
          <p className='button-text-cv'>
          <img src='/Images/Buttons/cv.svg' alt='CV'/></p>
          <img src='/Images/Buttons/Download.svg' alt='Resume' className="CV"/>
        </div>
        <div className="square square-secondary-left square3"></div>
        <div className="square square-secondary-left square8"></div>
        <div className="square square-secondary-middle square4"></div>
        <div className="square square-secondary-middle square9"></div>
        <div className="square square-secondary-right square2"></div>
        <div className="square square-secondary-right square7"></div>
        <div className="square square-secondary-right square11"></div>
		  </div>
		);
  }
}

class MenuAbout extends Component {
	render() {
		return (
		  <div className="menu-container">

        <div className="square square-main square1" onClick={() => this.props.onMenuChange('Menu')}>
          <p className='button-text'>
          <img src='/Images/Buttons/home.svg' alt='Home'/></p>
        </div>
        <div className="square square-main square5" onClick={() => this.props.onMenuChange('Menu')}>
          <p className='button-text'>
          <img src='/Images/Buttons/about.svg' alt='About'/></p>
        </div>
        <div className="square square-main square6" onClick={() => this.props.onMenuChange('MenuProject')}>
          <p className='button-text'>
          <img src='/Images/Buttons/projects.svg' alt='Projects'/></p>
        </div>
        <div className="square square-main square10" onClick={this.props.handleButtonClick}>
          <p className='button-text-cv'>
          <img src='/Images/Buttons/cv.svg' alt='CV'/></p>
          <img src='/Images/Buttons/Download.svg' alt='Resume' className="CV"/>
        </div>
        <div className="square square-secondary-left square3" style={{ cursor: 'pointer' }}>
          <p className="button-text">Who is Mihkel</p>
        </div>
        <div className="square square-secondary-left square8" style={{ cursor: 'pointer' }} onClick={this.props.handleEmailClick}>
          <p className="button-text">Email Me</p>
        </div>
        <div className="square square-secondary-middle square4"></div>
        <div className="square square-secondary-middle square9"></div>
        <div className="square square-secondary-right square2"></div>
        <div className="square square-secondary-right square7"></div>
        <div className="square square-secondary-right square11"></div>
		  </div>
		);
  }
}

class MenuProject extends Component {
	render() {
		return (
		  <div className="menu-container">

        <div className="square square-main square1" onClick={() => this.props.onMenuChange('Menu')}>
          <p className='button-text'>
          <img src='/Images/Buttons/home.svg' alt='Home'/></p>
        </div>
        <div className="square square-main square5" onClick={() => this.props.onMenuChange('MenuAbout')}>
          <p className='button-text'>
          <img src='/Images/Buttons/about.svg' alt='About'/></p>
        </div>
        <div className="square square-main square6" onClick={() => this.props.onMenuChange('Menu')}>
          <p className='button-text'>
          <img src='/Images/Buttons/projects.svg' alt='Projects'/></p>
        </div>
        <div className="square square-main square10" onClick={this.props.handleButtonClick}>
          <p className='button-text-cv'>
          <img src='/Images/Buttons/cv.svg' alt='CV'/></p>
          <img src='/Images/Buttons/Download.svg' alt='Resume' className="CV"/>
        </div>
        <div className="square square-secondary-left square3" style={{ cursor: 'pointer' }} >
          <p className="button-text">React - API</p>
        </div>
        <div className="square square-secondary-left square8" style={{ cursor: 'pointer' }} >
          <p className="button-text">C++ Script</p>
        </div>
        <div className="square square-secondary-middle square4" style={{ cursor: 'pointer' }} >
            <p className="button-text">TicTacToe<br/>in React</p>
            
        </div>
        <div className="square square-secondary-middle square9" style={{ cursor: 'pointer' }} >
          <p className="button-text">School projects</p>
        </div>
        <div className="square square-secondary-right square2"></div>
        <div className="square square-secondary-right square7"></div>
        <div className="square square-secondary-right square11"></div>
		  </div>
		);
  }
}

export default App;