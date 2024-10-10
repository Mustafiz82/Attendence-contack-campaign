import React from 'react';
import { TbCalendarClock } from "react-icons/tb";
import { IoCheckmarkDone } from "react-icons/io5";
import { TbWallet } from "react-icons/tb";

const page = () => {
    return (
        <div className="border m-2 lg:m-5 2xl:m-10">
            <div className="border p-5 lg:p-10 text-xl 2xl:text-2xl font-semibold ">
                <h1>Attendee Orders Manager
                </h1>
            </div>
            <div className="p-5 lg:p-10">
                <h1 className="text-xl 2xl:text-2xl font-semibold">
                    Ticket Sale summary
                </h1>
                <p className="text-lg 2xl:text-xl">Refund Sale are not Included</p>


                <div className="border p-2 lg:p-5 mt-5">
                    <div className="flex flex-col md:flex-row gap-5 md:gap-auto lg:justify-between">
                        <div className="flex flex-1 border-r md:pr-5 justify-between">
                            <div>
                                <p className="text-lg 2xl:text-xl">Total Ticket Sold</p>
                                <h1 className="text-2xl 2xl:text-3xl font-semibold">56</h1>
                            </div>
                            <div className="text-3xl 2xl:text-4xl ">
                                <TbCalendarClock className="bg-base-300 p-1 rounded-sm " />

                            </div>
                        </div>
                        <div className="flex flex-1 border-r md:px-5 justify-between">
                            <div>
                                <p className="text-lg 2xl:text-xl">Total Gross Sells</p>
                                <h1 className="text-2xl 2xl:text-3xl font-semibold">12698</h1>
                            </div>
                            <div className="text-3xl 2xl:text-4xl ">
                                <IoCheckmarkDone className="bg-base-300 p-1 rounded-sm " />

                            </div>
                        </div>
                        <div className="flex flex-1 md:pl-5 justify-between">
                            <div>
                                <p className="text-lg 2xl:text-xl">Total Net Sells</p>
                                <h1 className="text-2xl 2xl:text-3xl font-semibold">124</h1>
                            </div>
                            <div className="text-3xl 2xl:text-4xl ">
                                <TbWallet className="bg-base-300 p-1 rounded-sm " />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto md:overflow-hiden">

                    <div className="border min-w-[500px]  text-sm md:text-base my-5">

                        {/* Table header */}
                        <div className="grid bg-base-200 text-md 2xl:text-xl font-medium grid-cols-6 py-5">
                            <h1 class="p-2 border-r-4 pl-4  col-span-2">TICKET</h1>
                            <h1 class="p-2 border-r-4 pl-4 ">LAST EMAILED</h1>
                            <h1 class="p-2 text-center border-r-4 pl-4 ">LAST EMAILED</h1>
                            <h1 class="p-2 text-center border-r-4 pl-4 ">LAST UPDATE</h1>
                            <h1 class="p-2 text-center border-r-4 pl-4 ">SESSION</h1>
                        </div>

                        {/* Table body */}
                        <div className="grid border  text-md 2xl:text-xl grid-cols-6 py-5">
                            <h1 class="p-2  pl-4  col-span-2">APAN53</h1>
                            <h1 class="p-2  pl-4 ">Free</h1>
                            <h1 class="p-2 text-center  pl-4 ">1188</h1>
                            <h1 class="p-2 text-center  pl-4 "> US$ 0.00
                            </h1>
                            <h1 class="p-2 text-center  pl-4 "> US$ 0.00
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;