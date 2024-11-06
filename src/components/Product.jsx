import React, { useEffect, useState } from 'react';
import Maine from './Maine';

const Product = () => {

    const [product, setProduct] = useState([]);

    useEffect( () => {
        fetch('Category.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    return (
        <div>
             <h2 className='text-3xl text-center mb-12'>Explore Cutting-Edge Gadgets</h2>
                
            <div className='grid grid-cols-3 max-w-7xl mx-auto mb-36'>
               {
                 product.map(product => <Maine product={product} key={product.product_id}></Maine>)
               }
            </div>
        </div>
    );
};

export default Product;