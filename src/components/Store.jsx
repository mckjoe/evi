import React from 'react'
import PropTypes from 'prop-types'

function Store(props) {
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
        <img className="store-details-image" src={props.image} />
        <div className="store-details">
          <h1>{props.name}</h1>
          <p className="store-details-paragraph-1">{props.desc}</p>
          <p style={{fontFamily: 'sans-serif', fontSize: '14px'}}>{props.descriptionAdditional}</p>
          <div className="flex">
            <ul>
              <li><strong>Location</strong></li>
              <li>{props.location[0].street}</li>
              <li>{props.location[0].cityStateZip}</li>
              <li>{props.location[0].mapLink}</li>
            </ul>
            <ul>
              <li><strong>Hours</strong></li>
              <li>{props.hours[0].hours1}</li>
              <li>{props.hours[0].hours2}</li>
              <li>{props.hours[0].hours3}</li>
            </ul>
          </div>
          <h2 className="small h2">{props.services[0].name}</h2>
          <p className="small">{props.services[0].description}</p>
          <ul className="hours">
            <li style={{textAlign: 'center'}}>{props.services[0].days}</li>
            <li style={{textAlign: 'center'}}>{props.services[0].hours}</li>
          </ul>
          <button className="book-now-button">BOOK NOW</button>
        </div>
      </div>

    </div>


  )
}
Store.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  descriptionAdditional: PropTypes.string,
  location: PropTypes.array,
  hours: PropTypes.array,
  services: PropTypes.array

}

export default Store
