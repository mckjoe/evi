import React from 'react'
import masthead from '../assets/images/masthead.png'

function LandingPage() {
  return(
    <div>
      <style jsx>{`
        .masthead {
          width: 100%;
          min-width: 1000px;
          background: url(${masthead});
          background-size: cover;
          display: flex;
          flex-direction: column;
          padding: 200px 0;
          justify-content: space-between;
          align-items: center;
        }

        .header{
          font-size: 5rem;
          font-weight: lighter;
        }

        .button {
          background-color: white;
          padding: 10px 30px;
          font-size: 12px;
          color: gray;
        }

      `}</style>
      <div className="masthead">
        <h1 className="header">Summer tees are in.</h1>
        <p className="button">SHOP NOW</p>
      </div>
    </div>
  )
}

export default LandingPage
