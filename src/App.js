import React from 'react';
import './App.css';


function App() {
  return (
      <div className='overlay'>
        <div>
          <img src='/Images/placeholder.png' alt='Secondary Background' className="background-2"/>
        </div>
        <div className='WIP'>WORK IN PROGRESS</div>
        {/* <div className="page-container">
            <div className='Name'>Mihkel Rebane</div>
            <div className='jobTitle'>Junior Web Developer</div>
            <div className='Portfolio'>Portfolio</div>
            <Menu/>
            <div className='footer'>My Footer</div>
        </div> */}
      </div>
  );
}

// const Menu = class extends React.Component {
//   render() {
//     return (
//       <div className="menu-container">
//         <div className="square square-main square1">Home</div>
//         <div className="square square-secondary-right square2"></div>
//         <div className="square square-secondary-left square3"></div>
//         <div className="square square-secondary-middle square4"></div>
//         <div className="square square-main square5">About</div>
//         <div className="square square-main square6">Projects</div>
//         <div className="square square-secondary-right square7"></div>
//         <div className="square square-secondary-left square8"></div>
//         <div className="square square-secondary-middle square9"></div>
//         <div className="square square-main square10">CV</div>
//         <div className="square square-secondary-right square11"></div>
//       </div>
//     );
//   }
// };

export default App;