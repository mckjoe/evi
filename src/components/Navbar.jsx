import React from 'react';
import Everlane_logo from '../assets/images/Everlane_logo.png';
import Suitcase from '../assets/images/suitcase-icon.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <style jsx>{`
        .top-bar {
          background: #a3a5a7;
          margin: 0;
          padding: 15px 0 15px 0;
          text-align: center;
          color: white;
          width: 100%;
          font-family: sans-serif;
          font-size: 13px;
          font-weight: bold;
          letter-spacing: .5px;
        }

        .underline {
          text-decoration: underline;
        }

        .navbar {
          min-width: 1000px;
          color: gray;
          font-size: .9rem;
          font-family: sans-serif;
          letter-spacing: 1px;
          padding-bottom: 0px;
          padding: 7px;
        }
        .navbar:hover {
          box-shadow: 20px 1px 5px #e2e2e2;
        }

        .everlane-logo {
          height: 17px;
          display: block;
          margin: 0 auto;
        }

        img.suitcase {
          width: 45px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: center;
          position: relative;
        }

        .flex {
          display: flex;
          list-style: none;
          justify-content: space-between;
          align-items: center;
        }

        .left-nav {
          max-width: 350px;
          margin-left: 5px;
        }

        li {
          margin-left: 45px;
          white-space: nowrap;
          font-size: 14px;
        }

        li:first-of-type {
          margin-left: 0;
        }

        ul:nth-of-type(2) {
          position: absolute;
          right: 10px;
        }
      `}</style>

      <p className='top-bar'><span className="underline">Sign Up</span> to get a sneak peek at our upcoming products.</p>
      <div className="navbar grid">
        <ul className="flex left-nav">
          <Link style={{color: 'gray', textDecoration: 'none', marginLeft: '30px'}} to="/women"><li className="left-nav-li">Women</li></Link>
          <Link style={{color: 'gray', textDecoration: 'none', marginLeft: '30px'}} to="/men"><li className="left-nav-li">Men</li></Link>
          <Link style={{color: 'gray', textDecoration: 'none', marginLeft: '30px'}} to="/visit-us"><li className="left-nav-li">Visit Us</li></Link>
          <Link style={{color: 'gray', textDecoration: 'none', marginLeft: '30px'}} to="/Factories"><li className="left-nav-li">Factories</li></Link>
          <Link style={{color: 'gray', textDecoration: 'none', marginLeft: '30px'}} to="/About"><li className="left-nav-li">About</li></Link>
        </ul>

        <Link style={{color: 'gray', textDecoration: 'none'}} to="/"><img className='everlane-logo' src={Everlane_logo}/></Link>

        <ul className="flex">
          <li>Log In</li>
          <li>Sign Up</li>
          <li><img className='suitcase' src={Suitcase}/></li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
