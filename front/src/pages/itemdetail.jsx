import React, { useState, useEffect } from 'react';
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import Footer from './footer';
import NavBar from '../components/navbar';


const Itemdetail = () => {
    const images = [
        'https://picsum.photos/250/400',
        'https://picsum.photos/250/400',
        'https://picsum.photos/250/400',
        'https://picsum.photos/250/400',
        'https://picsum.photos/250/400',
        'https://picsum.photos/250/400',
        'https://picsum.photos/250/400',
        'https://picsum.photos/250/400',

    ];

    const [ind, setInd] = useState(0);
    const [fade, setFade] = useState(true);

    const changeImage = (direction) => {
        setFade(false); 
        setTimeout(() => {
            setInd(prev => {
                if (direction === -1 && prev > 0) return prev - 1;
                if (direction === 1 && prev < images.length - 1) return prev + 1;
                return prev;
            });
            setFade(true); 
        }, 200); 
    };

    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    const [activeSize, setActiveSize] = useState('');

    return (
        <>
        <NavBar />    
        <div className='flex flex-col p-2 my-4 pb-14 md:flex-row'>

            <div className='md:w-[50%] md:flex md:flex-col md:items-center'>
                <div className='flex bg-gray-900 items-center justify-around m-2 rounded-2xl border-white border md:w-[370px] lg:w-[500px]'>
                    <button
                        className='h-[30px] w-[30px] rounded-2xl flex justify-center items-center bg-blue-600 hover:bg-blue-400'
                        onClick={() => changeImage(-1)}
                    >
                        <GrFormPreviousLink size={25} />
                    </button>

                    <div className='h-[450px] w-[250px] flex justify-center items-center overflow-hidden'>
                        <img 
                            src={images[ind]} 
                            alt="" 
                            className={`transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
                        />
                    </div>

                    <button
                        className='h-[30px] w-[30px] rounded-2xl flex justify-center items-center  bg-blue-600 hover:bg-blue-400'
                        onClick={() => changeImage(1)}
                    >
                        <GrFormNextLink size={25} />
                    </button>
                </div>

                <div className='hidden w-full h-16 md:flex justify-center gap-4 items-center z-50'>
                    <button className='h-10 bg-blue-600 w-[40%] rounded-lg text-white flex justify-evenly items-center hover:bg-blue-500 md:w-[35%]'>
                        <RiShoppingCartLine /> Add to cart
                    </button>
                    <button className='h-10 bg-blue-600 w-[40%] rounded-lg text-white flex justify-evenly items-center hover:bg-blue-500 md:w-[35%] '>
                        <FaRegHeart /> Wishlist
                    </button>
                </div>
            </div>
            <div className='md:w-[50%]'>
                <div className='flex flex-col m-2 bg-gray-900 rounded-lg border-white border p-2'>
                    <div className='px-2'>
                        <p
                            className='text-2xl text-blue-600 my-2'
                        >Mens Full hand shirts, sleeves, jeans pant all in one palce this will continue untill i</p>
                        <p
                            className='text-xl text-green-600 my-2'
                        >&#8377;500</p>
                        <p className='my-2 text-lg text-gray-400'>
                            4.5 ⭐ <span className='text-sm'>ratings</span> 
                        </p>
                        <p
                            className='bg-blue-400 w-24 rounded-xl my-2 text-center text-sm backdrop-blur-md'
                        >Free delivery</p>
                    </div>
                </div>

                <div className='flex flex-col m-2 bg-gray-900 rounded-lg border-white border p-4'>
                    <p
                        className='text-blue-600 text-lg'
                    >Size chart</p>
                    <div className="flex gap-3 flex-wrap mt-4">
                            {sizes.map((size) => (
                                <button
                                key={size}
                                onClick={() => setActiveSize(size)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-colors duration-200
                                    ${
                                    activeSize === size
                                        ? 'bg-blue-600 text-white scale-105'
                                        : 'bg-gray-800 text-white hover:bg-gray-700'
                                    }`}
                                >
                                {size}
                                </button>
                            ))}
                    </div>

                </div>

                <div className='md:hidden fixed bottom-0 left-0 w-full bg-gray-900 h-16 flex justify-center gap-4 items-center z-50'>
                    <button className='h-10 bg-blue-500 w-[40%] rounded-lg text-white flex justify-evenly items-center'>
                        <RiShoppingCartLine /> Add to cart
                    </button>
                    <button className='h-10 bg-blue-500 w-[40%] rounded-lg text-white flex justify-evenly items-center'>
                        <FaRegHeart /> Wishlist
                    </button>
                </div>

                <div className='flex flex-col m-2 bg-gray-900 rounded-lg border-white border p-4'>
                    <p className='text-blue-600 text-lg'>Item description : </p>
                    <p className='text-white text-sm'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit earum facilis labore magnam adipisci blanditiis, d
                        electus minus, tenetur recusandae, ad sunt vitae! Distinctio sint officia repudiandae corrupti fugiat nostrum officiis.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit earum facilis labore magnam adipisci blanditiis, d
                        electus minus, tenetur recusandae, ad sunt vitae! Distinctio sint officia repudiandae corrupti fugiat nostrum officiis.   
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit earum facilis labore magnam adipisci blanditiis, d
                        electus minus, tenetur recusandae, ad sunt vitae! Distinctio sint officia repudiandae corrupti fugiat nostrum officiis.   
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit earum facilis labore magnam adipisci blanditiis, d
                        electus minus, tenetur recusandae, ad sunt vitae! Distinctio sint officia repudiandae corrupti fugiat nostrum officiis.   
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit earum facilis labore magnam adipisci blanditiis, d
                        electus minus, tenetur recusandae, ad sunt vitae! Distinctio sint officia repudiandae corrupti fugiat nostrum officiis.   
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit earum facilis labore magnam adipisci blanditiis, d
                        electus minus, tenetur recusandae, ad sunt vitae! Distinctio sint officia repudiandae corrupti fugiat nostrum officiis.
                    </p>
                </div>
            </div>
            
        </div>
            <Footer/>
        </>

    );
};

export default Itemdetail;
