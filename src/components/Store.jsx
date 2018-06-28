import React from 'react'
import closet from '../assets/images/closet.jpg'

function Store() {
  return (
    <div>
      <style jsx>{`
        .store-details-image {
          width: 1050px;
          display: block;
          margin: 60px auto 0;
        }

        .store-details {
          width: 600px;
          display: block;
          margin: 0 auto;
          text-align: center;
          background-color: white;
          transform: translateY(-55px);
          padding: 40px 100px;
          letter-spacing: .5px;
          color: #808284;
        }
        .store-details ul {
          margin-top: 30px;
          font-size: 12px;
          padding: 0;
          margin: 30px auto 0;
          width: 30%;
        }
        .store-details h1 {
          font-weight: lighter;
          margin-top: 10px;
          font-size: 36px;
        }

        .store-details-paragraph-1 {
          font-size: 14px;
          line-height: 25px;
          font-family: sans-serif;
          font-weight: lighter;
          margin: 30px 0 30px 0;
        }

        .flex {
          display: flex;
          justify-content: space-around;
        }

        .store li {
          margin-top: 5px;
          list-style: none;
          font-family: sans-serif;
          font-size: 13px;
          text-align: left;

        }
        .small {
          width: 48%;
          font-weight: lighter:
          display: block;
          margin: 0 auto;
        }
        .h2 {
          font-size: 24px;
          text-align: center;
          font-family: sans-serif;
          margin-top: 40px;
          margin-bottom: 15px;
          font-weight: lighter;
        }

        p.small {
          font-family: sans-serif;
          font-size: 14px;
          line-height: 25px;
        }
        .hours {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
        .book-now-button {
          margin-top: 20px;
          background-color: #808284;
          padding: 15px 30px 12px 30px;
          font-size: 12px;
          color: white;
        }
      `}</style>
      <div className='store'>
        <img className="store-details-image" src={closet} />
        <div className="store-details">
          <h1>Everlane Prince</h1>
          <p className="store-details-paragraph-1">Our first store is here. Visit us in Nolita to shop our latest arrivals and most essential products. With our integrated I.D. system, you can return in store, shop walletless, and apply any existing credits to your purchase.</p>
          <p style={{fontFamily: 'sans-serif', fontSize: '14px'}}>Stay tuned for community events, educational panels, and more.</p>
          <div className="flex">
            <ul>
              <li><strong>Location</strong></li>
              <li>28 Prince St.</li>
              <li>New York, NY 10012</li>
              <li>See Map</li>
            </ul>
            <ul>
              <li><strong>Hours</strong></li>
              <li>Monday-Friday: 11am-8pm</li>
              <li>Monday–Friday: 11am–8pm</li>
              <li>Saturday: 10am–7pm</li>
              <li>Sunday: 11am–6pm</li>
            </ul>
          </div>
          <h2 className="small h2">1-Hour Styling Sessions</h2>
          <p className="small">Book your appointment to shop with an Everlane Ambassador and we’ll help you find your new favorite looks.</p>
          <ul className="hours">
            <li style={{textAlign: 'center'}}>Monday-Thursday</li>
            <li style={{textAlign: 'center'}}>9am-1pm</li>
          </ul>
          <button className="book-now-button">BOOK NOW</button>
        </div>
      </div>

    </div>


);
}

export default Store
