import React from 'react';
import { data, registrationData } from '../Public/Data';

const page = () => {

console.log(data , 'data')
    return (
        <div className="m-5 p-5  border">
            <div className="flex border items-center justify-between p-4" >
                <h1 className="text-lg md:text-xl 2xl:text-2xl font-medium ">Contact List Management </h1>
                <button className="px-4 btn text-white btn-md 2xl:btn-lg hover:bg-primaryHover bg-primary ">See Example</button>
            </div>

            <h1 className="text-lg my-5 md:text-xl 2xl:text-2xl font-medium ">General </h1>

        <div className="grid  mt-10 grid-cols-1 md:grid-cols-4   gap-8">
            
        {
                data?.map((item ,idx) =>  <div className={`${idx == 0 ? "flex  justify-center items-center col-span-1 md:row-span-3" : "col-span-1"} rounded-xl -mt-3 text-center border p-5`}>
                    <div className=" space-y-2">
                    <h2 className="text-xl 2xl:text-2xl">{item?.title}</h2>
                    <h1 className=" text-3xl 2xl:text-4xl font-semibold">{item?.value}</h1>
                    <p className=" text-base 2xl:text-xl font-medium text-green-500">{item?.percentage}</p>
                    </div>
                </div>)
            }

        </div>

        <h1 className="text-lg md:text-xl my-5 2xl:text-2xl font-medium ">Registration Overview </h1>

        <div className="border rounded-2xl space-y-5 p-5">
            {
                registrationData.map(item => <div className="flex items-center  font-medium text-md 2xl:text-xl justify-between">
                    <h1 className=" font-medium">{item?.title}</h1>
                    <p>{item?.value}</p>
                </div> )
            }
        </div>
        </div>
    );
};

export default page;