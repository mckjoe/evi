import React from 'react';
import PropTypes from 'prop-types';

function Product(props) {
  return (
    <div>
      <style jsx>{`
        img {
          width: 100%;
        }
        .flex {
          display: flex;
          justify-content: space-between;
          color: #808284;
        }
      `}</style>
      <div>
        <div className='product'>
          <img src={props.image} />
          <div className="flex">
            <p className="flex">{props.name}</p>
            <p className="flex">{props.price}</p>
          </div>
          <p className="flex">{props.color}</p>
          <p className="flex">{props.washes}</p>
        </div>

      </div>
    </div>
  );
}
export default Product;
