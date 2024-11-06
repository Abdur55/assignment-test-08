import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../utility/AddToClik';

const ViewDetails = () => {

    const { productId } = useParams();


    const data = useLoaderData();

    const product = data.find(product => product.product_id === productId)


    const handleMarkAsRead = (id) => {

        addToStoredReadList(id);
    }

    return (
        <div className="hero bg-[#9538E2] w-6/6 mx-auto -mt-6 mb-96 relative">
            <div className="hero-content text-center pt-32 pb-36">
                <div className=" ">
                    <h1 className="text-4xl font-bold text-white mb-4">Product Details</h1>
                    <p className="text-white">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                    </p>
                </div>
            </div>
            <div className="absolute top-60 mb-52 mt-10 w-2/4 border rounded-lg p-5 bg-white">
                <div className="grid grid-cols-3 gap-8">
                    <div className="">
                        <div>
                            <img className="h-[280px] w-[360]" src={product.product_img} alt="" />
                        </div>
                    </div>
                    <div className="col-span-2 space-y-5">


                        <div>
                            <h3 className="text-3xl font-bold">{product.product_title}</h3>
                            <h2>{product.category}</h2>

                            <span className="font-semibold text-2xl">
                                Price:$ {product.price}
                            </span>
                        </div>
                        <p>{product.description}</p>
                        <p></p>
                        <div className="flex items-center gap-1">
                            <p className='text-xl font-bold'>Rating</p>
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex">
                                <div className="rating">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                </div>
                            </div>
                            <div className="bg-gray-200 rounded-full px-2"><p>{product.rating}</p></div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button onClick={() => handleMarkAsRead(productId)} className="flex items-center bg-[#9538E2] px-3 py-2 rounded-full gap-3 text-white">Add to cart

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </button>
                            <h2 className='border rounded-full p-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ViewDetails;