import React, { Component} from 'react';
import ReactModal from 'react-modal';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: 'Menu',
    };
  }

  componentDidMount() {
    ReactModal.setAppElement('#root');
  };

  handleMenuChange = (menuName) => {
    this.setState({ activeMenu: menuName });
  };

  handleProjectClick1 = () => {
    window.open('https://glitch.com/edit/#!/f0rest-rank-api?path=server.js%3A6%3A44', '_blank');
  };

  handleProjectClick2 = () => {
    window.open('https://github.com/MihkelReb/React_Tic-Tac-Toe', '_blank');
  };

  handleProjectClick3 = () => {
    window.open('https://github.com/MihkelReb/C---Script-for-CS2', '_blank');
  };

  handleProjectClick4 = () => {
    window.open('https://github.com/MihkelReb/School', '_blank');
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
        <div className='WIP'>Currently a WIP and not yet mobile friendly, will work on that next</div>
          <img src='/Images/background-3.webp' alt=' Background' className='background-3' />
          <img src='/Images/outline-top.webp' alt='White Outline Top' className='outline-top' />
          <img src='/Images/outline-bottom.webp' alt='White Outline Bottom' className='outline-bottom' />
        </div>
        <div className='header'></div>
        <div className="page-container">
          <div className='Name'><img src='/Images/Header/nimi.svg' alt='Mihkel Rebane' /></div>
          <div className='jobTitle'><img src='/Images/Header/amet.svg' alt='Junior Web-Developer' /></div>
          <div className='Portfolio'><img src='/Images/Header/portfolio.svg' alt='Portfolio' /></div>
          <div id="main"></div>
          <div className='footer'>© 2023 MihkelRebane.com - development began 16.11.2023</div>

          {activeMenu === 'Menu' && <Menu
                                              onMenuChange={this.handleMenuChange}
                                              handleButtonClick={this.handleButtonClick} />}
          {activeMenu === 'MenuAbout' && <MenuAbout
                                              onMenuChange={this.handleMenuChange}
                                              handleButtonClick={this.handleButtonClick}
                                              handleEmailClick={this.handleEmailClick} />}
          {activeMenu === 'MenuProject' && <MenuProject
                                              onMenuChange={this.handleMenuChange}
                                              handleButtonClick={this.handleButtonClick}
                                              handleProjectClick1={this.handleProjectClick1}
                                              handleProjectClick2={this.handleProjectClick2}
                                              handleProjectClick3={this.handleProjectClick3}
                                              handleProjectClick4={this.handleProjectClick4}/>}
        </div>
      </div>
    );
  }
}

class Menu extends Component {

	render() {
		return (
		  <div className="menu-container">
        <div className="square sq-main sq1 hover" onClick={() => this.props.onMenuChange('Menu')}>
          <p className='button-text'>
          <img src='/Images/Buttons/home.svg' alt='Home'/></p>
        </div>
        <div className="square sq-main sq5 hover" onClick={() => this.props.onMenuChange('MenuAbout')}>
          <p className='button-text'>
          <img src='/Images/Buttons/about.svg' alt='About'/></p>
        </div>
        <div className="square sq-main sq6 hover" onClick={() => this.props.onMenuChange('MenuProject')}>
          <p className='button-text'>
          <img src='/Images/Buttons/projects.svg' alt='Projects'/></p>
        </div>
        <div className="square sq-main sq10 hover" onClick={this.props.handleButtonClick}>
          <p className='button-text-cv'>
          <img src='/Images/Buttons/cv.svg' alt='CV'/></p>
          <img src='/Images/Buttons/Download.svg' alt='Resume' className="CV"/>
        </div>
        <div className="square sq-left sq3"></div>
        <div className="square sq-left sq8"></div>
        <div className="square sq-middle sq4"></div>
        <div className="square sq-middle sq9"></div>
        <div className="square sq-right sq2"></div>
        <div className="square sq-right sq7"></div>
        <div className="square sq-right sq11"></div>
		  </div>
		);
  }
}

class MenuAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      textContent: null,
    };
  }

  async componentDidMount() {
    const filePath = '/text/about me.txt';
    const content = await this.fetchTextFileContent(filePath);

    if (content) {
      this.setState({ textContent: content });
    }
  }

  async fetchTextFileContent(filePath) {
    try {
      const response = await fetch(filePath);
      const content = await response.text();
      return content;
    } catch (error) {
      console.error('Error fetching text file:', error);
      return null;
    }
  }

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

	render() {
		return (
		  <div className="menu-container">
        <div className="square sq-main sq1 hover" onClick={() => this.props.onMenuChange('Menu')}>
          <p className='button-text'>
          <img src='/Images/Buttons/home.svg' alt='Home'/></p>
        </div>
        <div className="square sq-main sq5 hover" onClick={() => this.props.onMenuChange('Menu')}>
          <p className='button-text'>
          <img src='/Images/Buttons/about.svg' alt='About'/></p>
        </div>
        <div className="square sq-main sq6 hover" onClick={() => this.props.onMenuChange('MenuProject')}>
          <p className='button-text'>
          <img src='/Images/Buttons/projects.svg' alt='Projects'/></p>
        </div>
        <div className="square sq-main sq10 hover" onClick={this.props.handleButtonClick}>
          <p className='button-text-cv'>
          <img src='/Images/Buttons/cv.svg' alt='CV'/></p>
          <img src='/Images/Buttons/Download.svg' alt='Resume' className="CV"/>
        </div>
        <div
          className={`square sq-left sq3  hover`}
          style={{ cursor: 'pointer' }}
          onClick={this.handleOpenModal}>
          <p className="button-text">An Introduction</p>
        </div>

        <ReactModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleCloseModal}
          contentLabel="Modal - Who is Mihkel"
          className="Introduction"
          overlayClassName="Overlay">
          {this.state.textContent ? (
            <div className='IntroductionModal' dangerouslySetInnerHTML={{ __html: this.state.textContent }} />
          ) : (
            <p>Loading content...</p>
          )}
        </ReactModal>

        <div className="square sq-left sq8 hover" style={{ cursor: 'pointer' }} onClick={this.props.handleEmailClick}>
          <p className="button-text">Email Me</p>
        </div>
        <div className="square sq-middle sq4"></div>
        <div className="square sq-middle sq9"></div>
        <div className="square sq-right sq2"></div>
        <div className="square sq-right sq7"></div>
        <div className="square sq-right sq11"></div>
		  </div>
		);
  }
}

class MenuProject extends Component {
  render() {
    return (
		  <div className="menu-container">

        <div
          className="square sq-main sq1 hover"
          onClick={() => this.props.onMenuChange('Menu')}>
          <p className='button-text'>
          <img src='/Images/Buttons/home.svg' alt='Home'/></p>
        </div>
        <div
          className="square sq-main sq5 hover"
          onClick={() => this.props.onMenuChange('MenuAbout')}>
          <p className='button-text'>
          <img src='/Images/Buttons/about.svg' alt='About'/></p>
        </div>
        <div
          className="square sq-main sq6 hover"
          onClick={() => this.props.onMenuChange('Menu')}>
          <p className='button-text'>
          <img src='/Images/Buttons/projects.svg' alt='Projects'/></p>
        </div>
        <div
          className="square sq-main sq10 hover"
          onClick={this.props.handleButtonClick}>
          <p className='button-text-cv'>
          <img src='/Images/Buttons/cv.svg' alt='CV'/></p>
          <img src='/Images/Buttons/Download.svg' alt='Resume' className="CV"/>
        </div>
        <div
          className={`square sq-left sq3 hover`}
          style={{ cursor: 'pointer' }}
          onClick={this.props.handleProjectClick1}>
          <p className="button-text">React - API</p>
        </div>
        <div
          className="square sq-left sq8 hover"
          style={{ cursor: 'pointer' }}
          onClick={this.props.handleProjectClick3}>
          <p className="button-text">C++ Script</p>
        </div>
        <div
          className="square sq-middle sq4 hover"
          style={{ cursor: 'pointer' }}
           onClick={this.props.handleProjectClick2}>
          <p className="button-text">TicTacToe<br/>in React</p>
        </div>

        <div
          className="square sq-middle sq9 hover"
          style={{ cursor: 'pointer' }}
          onClick={this.props.handleProjectClick4}>
          <p className="button-text">Schoolwork</p>
        </div>
        <div className="square sq-right sq2"></div>
        <div className="square sq-right sq7"></div>
        <div className="square sq-right sq11"></div>
		  </div>
		);
  }
}

export default App;