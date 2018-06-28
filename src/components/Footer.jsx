import React from 'react';

function Footer() {
  return (
    <div>
      <style jsx>{`
        .footer {
          display: flex;
          justify-content: space-between;
          color: #808284;
          font-family: sans-serif;
          font-size: 14px;
          margin-bottom: 100px;
          line-height: 20px;
        }
        .flexed {
          display: flex;
          justify-content: space-around;
          width: 40%;
          margin: 0 auto;
          white-space: nowrap;
        }
        li {
          list-style: none;
          margin-bottom: 10px;

        }
        .big-button {
          width: 95%;
          height: 45px;
          padding: 10px;
          background-color: #333333;
          color: white;

        }
        .footer-right {
          width: 40%;
          margin: 0 auto;
        }
        .small-header {
          font-weight: bold;
        }
      `}</style>

      <div className='footer'>
        <div className="flexed">
          <ul>
            <li><span className="small-header">Account</span></li>
            <li>Manage Account</li>
            <li>Saved Items</li>
            <li>Orders & Returns</li>
            <li>Redeem a Gift</li>
          </ul>
          <ul>
            <li><span className="small-header">Company</span></li>
            <li>About</li>
            <li>Factories</li>
            <li>Careers</li>
            <li>Contact & FAQ</li>
          </ul>
          <ul>
            <li><span className="small-header">Visit Us</span></li>
            <li>Everlane Prince</li>
            <li>Everlane Valencia</li>
          </ul>
          <ul>
            <li><span className="small-header">Connect</span></li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div className="footer-right">
          <p>Exceptional quality. Ethical factories. Radical Transparency. Sign up to enjoy free U.S. shipping and returns on your first order.</p>
          <p>Email Address</p>
          <hr />
          <button className="big-button">CONTINUE</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
