import React from 'react';
import { FaGoogleDrive } from "react-icons/fa";
import { IoSearchSharp } from 'react-icons/io5';


const page = () => {
    return (
        <div className="m-5  border">
            <div className="flex border items-center justify-between p-4" >
                <h1 className="text-lg md:text-xl 2xl:text-2xl font-medium ">Contact List Management </h1>
                <button className="px-4 btn text-white btn-md 2xl:btn-lg hover:bg-primaryHover bg-primary ">See Example</button>
            </div>

            <div className="p-5 md:p-10">
                <h1 className="text-lg md:text-xl 2xl:text-2xl font-medium "> Create and manage separate contact lists for your email campaigns. The contact lists can be reused for different campaigns
                </h1>

                <div className="space-y-2 md:space-y-0 md:space-x-5 mt-14 mb-5">
                    <button className="px-4 hover:bg-primaryHover  w-full md:w-auto    btn btn-md 2xl:btn-lg btn-outline text-primary "><span className="text-3xl">+
                    </span>  Send Text Email</button>
                    <button className="px-8 w-full md:w-auto hover:bg-primaryHover btn btn-md 2xl:btn-lg text-white bg-primary "><span className="text-3xl"><FaGoogleDrive />

                    </span>  Save Draft</button>
                </div>
            </div>

            <div className="border flex-col m-5 mt-0 rounded-md  h-[350px] flex justify-center items-center bg-base-300">
            
                    <IoSearchSharp className="text-8xl "></IoSearchSharp>
                    <p className="font-semibold">There are no result to display</p>
                
            </div>
        </div>
    );
};

export default page;