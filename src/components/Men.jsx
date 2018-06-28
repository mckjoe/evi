import React from 'react';
import mensImage from '../assets/images/mens-shoulder.jpg';
import jeans1 from '../assets/images/jeans1.jpg';
import jeans2 from '../assets/images/jeans2.jpg';
import jeans3 from '../assets/images/jeans3.jpg';
import Product from './Product';


const PRODUCT_LIST = [
  {
    image: jeans1,
    name: 'The Slim Fit Jean',
    price: '$68',
    color: 'Mid Blue',
    washes: '4 washes available'
  },
  {
    image: jeans2,
    name: 'The Slim Fit Jean',
    price: '$68',
    color: 'Dark Indigo',
    washes: '4 washes available'
  },
  {
    image: jeans3,
    name: 'The Straight Fit Jean',
    price: '$68',
    color: 'Black',
    washes: '4 washes available'
  }
];

function Men() {
  return (
    <div>
      <style jsx>{`
        .mens-page-top {
          max-width: 1400px;
          display: block;
          margin: 0 auto;
        }

        .nav {
          display: flex;
          border-top: 1px solid lightgray;
          border-bottom: 1px solid lightgray;
          padding: 18px 0;
          width: 93%;
          margin: 0 auto 30px;
          font-size: 14px;
        }

        .flex {
          display: flex;
          margin: 30px 50px;
        }

        .nav li {
          color: gray;
          list-style: none;
          margin-left: 15px;
          font-family: sans-serif;
          letter-spacing: 1px;
        }

        .flexed-list {
          list-style: none;
          white-space: nowrap;
          margin-right: 50px;
          display: none;
        }

        ul {
          padding-left: 0;
        }

        .flexed-list li {
          margin-bottom: 10px;
          font-size: 14px;
          font-family: sans-serif;
          color: #808284;
        }
        .flexed-list li:nth-of-type(2) {
          margin-bottom: 40px;
        }

        .masthead {
          width: 100%;
          min-width:600px;
          background: url(${mensImage});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: right 0;
        }

        .masthead-text {
          color: #4c4c4c;
          font-size: 2rem;
          font-weight: lighter;
          padding-top: 150px;
          padding-left: 200px;
          padding-bottom: 150px;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 10px;
        }
        @media (min-width: 700px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
          .flexed-list {
            display: block;
          }
        }
        @media (min-width: 1001px) {
          .grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
          .flexed-list {
            display: block;
          }
        }
      `}</style>
      <div className="mens-page-top">
        <ul className='nav'>
          <li>Home</li>
          <li>/</li>
          <li>Men</li>
        </ul>
        <div className="flex">
          <ul className='flexed-list'>
            <li><strong>Men’s All</strong></li>
            <li>New Arrivals</li>
            <li>Tees</li>
            <li>Shirts & Polos</li>
            <li>Pants & Shorts</li>
            <li>Denim</li>
            <li>Sweatshirts & Hoodies</li>
            <li>Sweaters</li>
            <li>Outerwear</li>
            <li>Underwear</li>
            <li>Backpacks & Bags</li>
            <li>Accessories & Gift Cards</li>
            <li>Choose What You Pay</li>
          </ul>
          <div>
            <div className="masthead">
              <p className="masthead-text">Men's</p>
            </div>
            <div className="grid">
              {PRODUCT_LIST.map((product, index) =>
                <Product image={product.image}
                  name={product.name}
                  price={product.price}
                  color={product.color}
                  washes={product.washes}
                  key={index} />
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}



export default Men;
