import React from 'react';
import './App.css';


function App() {
  return (
      <div>
        <div>
          <img src='/Images/background-3.png' alt='Secondary Background' className="background-2"/>
        </div>
        <div className="page-container">
            <div className='Name'>Mihkel Rebane - WIP</div>
            <div>WIP</div>
            <div>WIP</div>
            <div>WIP</div>
            <div className='jobTitle'>Junior Web Developer WIP</div>
            <div className='Portfolio'>Portfolio work in progress</div>
            <Menu/>
            <div className='footer'>WIP</div>
        </div>
      </div>
  );
}

const Menu = class extends React.Component {
  render() {
    return (
      <div className="menu-container">
        <div className="square square-main square1">Home</div>
        <div className="square square-secondary-right square2">WIP</div>
        <div className="square square-secondary-left square3">WIP</div>
        <div className="square square-secondary-middle square4">WIP</div>
        <div className="square square-main square5">About</div>
        <div className="square square-main square6">Projects</div>
        <div className="square square-secondary-right square7">WIP</div>
        <div className="square square-secondary-left square8">WIP</div>
        <div className="square square-secondary-middle square9">WIP</div>
        <div className="square square-main square10">CV</div>
        <div className="square square-secondary-right square11">WIP</div>
      </div>
    );
  }
};

export default App;