import React from 'react';
import { Link } from 'react-router-dom';

const Maine = ({ product }) => {
  const { product_id, product_title, product_img, price } = product;

  return (
    <div className='max-w-7xl mx-auto mb-5'>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={product_img}
            className='w-[480px] h-[300px] p-3 rounded-3xl'
            alt="Product"
          />
        </figure>
        <div className="card-body">
          <h2>{product_title}</h2>
          <p>{price}</p>
          <div className="">
            <Link to={`/product/${product_id}`} className="btn btn-primary">View Details</Link> {/* Absolute path */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maine;

