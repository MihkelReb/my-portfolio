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
    window.open('/CV FIN - Mihkel Rebane - 2024', '_blank');
  };

  handleButtonClick = () => {
    this.handleMenuChange('Menu');
    this.handlePdfOpen();
  };
//development began 16.11.2023, halted - 21-11.2023-22.02.2024
  render() {
    const { activeMenu } = this.state;
    return (
      <div className='ThePage'>
        <div className='WIP'>Currently a WIP and not yet mobile friendly - working on it</div>
            <div className='ImagesDiv'>
              <img src='/Images/outline-top.webp' alt='White Outline Top' className='outline-top' />
              <img src='/Images/outline-bottom.webp' alt='White Outline Bottom' className='outline-bottom' />
            </div>
            <div className="page-container">
              <div className='header'>
                <svg className='Name'><use xlinkHref='/Images/Header/headertext.svg#NameSVG' /></svg>
                <svg className='jobTitle'><use xlinkHref='/Images/Header/headertext.svg#TitleSVG' /></svg>
                <svg className='Portfolio'><use xlinkHref='/Images/Header/headertext.svg#PortfolioSVG' /></svg>
              </div>
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
              <div className='footer'>© 2024 MihkelRebane.com</div>  
            </div>
            <div  className='background-3' ><img src='/Images/background-3.webp' alt=' Background'/></div>
      </div>
    );
  }
}

class Menu extends Component {

	render() {
		return (
      <div className='menu-container-wrapper'>
        <div className="menu-container">
          <div className="sq-main sq1 hover" onClick={() => this.props.onMenuChange('Menu')}></div>
            <div className='button-text sq1'>
                <img src='/Images/Buttons/home.svg' alt='Home'/>
            </div>
          <div className="sq-main sq5 hover" onClick={() => this.props.onMenuChange('MenuAbout')}></div>
            <div className='button-text sq5'>
                <img src='/Images/Buttons/about.svg' alt='About'/>
            </div>
          <div className="sq-main sq6 hover" onClick={() => this.props.onMenuChange('MenuProject')}></div>
            <div className='button-text sq6'>
                <img src='/Images/Buttons/projects.svg' alt='Projects'/>
            </div>
          <div className="sq-main sq10 hover" onClick={this.props.handleButtonClick}></div>
          <div className='button-text sq10'>
            <img src='/Images/Buttons/cv.svg' alt='CV' className="CV"/>
            <img src='/Images/Buttons/Download.svg' alt='Resume' className="DL"/>
          </div>
          <div className="sq-left sq3"></div>
          <div className="sq-left sq8"></div>
          <div className="sq-middle sq4"></div>
          <div className="sq-middle sq9"></div>
          <div className="sq-right sq2"></div>
          <div className="sq-right sq7"></div>
          <div className="sq-right sq11"></div>
        </div>
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
    document.body.classList.add('modal-open');
  };
  
  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
    document.body.classList.remove('modal-open');
  };

  render() {
		return (
      <div className='menu-container-wrapper'>
        <div className="menu-container">
            <div className="sq-main sq1 hover" onClick={() => this.props.onMenuChange('Menu')}></div>
            <div className='button-text sq1'>
                <img src='/Images/Buttons/home.svg' alt='Home'/>
            </div>
            <div className="sq-main sq5 hover" onClick={() => this.props.onMenuChange('Menu')}></div>
              <div className='button-text sq5'>
                  <img src='/Images/Buttons/about.svg' alt='About'/>
              </div>
            <div className="sq-main sq6 hover" onClick={() => this.props.onMenuChange('MenuProject')}></div>
              <div className='button-text sq6'>
                  <img src='/Images/Buttons/projects.svg' alt='Projects'/>
              </div>
            <div className="sq-main sq10 hover" onClick={this.props.handleButtonClick}></div>
            <div className='button-text sq10'>
                <img src='/Images/Buttons/cv.svg' alt='CV' className="CV"/>
              <img src='/Images/Buttons/Download.svg' alt='Resume' className="DL"/>
            </div>
            <div
                className={`sq-left sq3 hover`}
                style={{ cursor: 'pointer' }}
                onClick={this.handleOpenModal}>
            </div>
            <div className="button-text sq3">An Introduction</div>
            <ReactModal
              isOpen={this.state.isModalOpen}
              onRequestClose={this.handleCloseModal}
              contentLabel="Modal - Who is Mihkel"
              className="Introduction"
              overlayClassName="Overlay">
              <div className='IntroductionModal'>
                  {this.state.textContent ? (
                    <div dangerouslySetInnerHTML={{ __html: this.state.textContent }} />
                  ) : (
                    <div>
                      <p>Loading content...</p>
                    </div>
                  )}
              </div>
            </ReactModal>
          <div className="sq-left sq8 hover" style={{ cursor: 'pointer' }} onClick={this.props.handleEmailClick}></div>
          <div className="button-text sq8">Email Me</div>
          <div className="sq-middle sq4"></div>
          <div className="sq-middle sq9"></div>
          <div className="sq-right sq2"></div>
          <div className="sq-right sq7"></div>
          <div className="sq-right sq11"></div>
        </div>
		  </div>
		);
  }
}

class MenuProject extends Component {
  render() {
		return (
      <div className='menu-container-wrapper'>
        <div className="menu-container">
          <div className="sq-main sq1 hover" onClick={() => this.props.onMenuChange('Menu')}></div>
            <div className='button-text sq1'>
                <img src='/Images/Buttons/home.svg' alt='Home'/>
            </div>
          <div className="sq-main sq5 hover" onClick={() => this.props.onMenuChange('MenuAbout')}></div>
            <div className='button-text sq5'>
                <img src='/Images/Buttons/about.svg' alt='About'/>
            </div>
          <div className="sq-main sq6 hover" onClick={() => this.props.onMenuChange('Menu')}></div>
            <div className='button-text sq6'>
                <img src='/Images/Buttons/projects.svg' alt='Projects'/>
            </div>
          <div className="sq-main sq10 hover" onClick={this.props.handleButtonClick}></div>
          <div className='button-text sq10'>
              <img src='/Images/Buttons/cv.svg' alt='CV' className="CV"/>
            <img src='/Images/Buttons/Download.svg' alt='Resume' className="DL"/>
          </div>
          <div
            className={`sq-left sq3 hover`}
            style={{ cursor: 'pointer' }}
            onClick={this.props.handleProjectClick1}>
          </div>
          <div className="button-text sq3">React - API</div>
          <div
            className="sq-left sq8 hover"
            style={{ cursor: 'pointer' }}
            onClick={this.props.handleProjectClick3}>
          </div>
          <div className='button-text sq8'>C++ Script</div>
          <div
            className="sq-middle sq4 hover"
            style={{ cursor: 'pointer' }}
            onClick={this.props.handleProjectClick2}>
          </div>
          <div className="button-text sq4">TicTacToe<br/>in React</div>
          <div
            className="sq-middle sq9 hover"
            style={{ cursor: 'pointer' }}
            onClick={this.props.handleProjectClick4}>
          </div>
          <div className="button-text sq9">Schoolwork</div>
          <div className="sq-right sq2"></div>
          <div className="sq-right sq7"></div>
          <div className="sq-right sq11"></div>
        </div>
      </div>
		);
  }
}

export default App;
