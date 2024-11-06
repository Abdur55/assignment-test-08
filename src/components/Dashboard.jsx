import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../utility/AddToClik';


const Dashboard = () => {

    const [readList, setReadList] = useState([]);
    const allProduct = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => (id));

        console.log("storedReadList:", storedReadList, "storedReadListInt:", storedReadListInt, "allProduct:", allProduct);

        const readProductList = (Array.isArray(allProduct) ? allProduct : []).filter(product =>
            storedReadListInt.includes(product.product_id)
            
        );

        setReadList(readProductList);
    }, []);

    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <div className="hero-content text-center bg-[#9538E2] mb-5">
                    <div className=" ">
                        <h1 className="text-4xl font-bold text-white mb-4">Statistics</h1>
                        <p className="text-white mb-4">
                            Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, <br /> we have it all!
                        </p>
                        <div>
                            <button className='bg-white p-3 border rounded-xl'>Cart</button>
                            <button className='bg-white p-3 border rounded-xl ml-5'>Wishlist</button>
                        </div>
                    </div>

                </div>
            </div>
            {/* product item */}
            <div>

            
            <div className="grid grid-cols-3 gap-6">
                {readList.map(product => ( <div key={product.product_id} >
                        <img src={product.product_img} alt={product.product_title} className="w-full h-40 object-cover mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{product.product_title}</h3>
                        <p className="text-gray-700 mb-2">Category: {product.category}</p>
                        <p className="text-gray-700 mb-2">Price: ${product.price}</p>
                        <p className="text-gray-700">{product.description}</p>
                    </div>
                ))}
            </div>
            

            </div>
            {/* product item */}
        </div>
    );
};

export default Dashboard;



