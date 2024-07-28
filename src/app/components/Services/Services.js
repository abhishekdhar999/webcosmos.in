import React from "react";

export const ServicesSection = () => {
    return (
        <div>
            <div className="bg-tertiary p-4">
                <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
                    {/* Event 1 */}
                    <div className="flex md:contents flex-row-reverse">
                        <div className="relative p-4 my-6 text-heading-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto hidden md:block">
                            <h3 className="text-lg font-medium md:text-3xl lg:text-4xl">New Event 1</h3>
                            <p className="mt-2 leading-6 text-lg">Description of the first event.</p>
                            {/* <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 1</span> */}
                        </div>
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-line rounded-t-full bg-gradient-to-b"></div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-dot rounded-full top-1/2"></div>
                        </div>
                        <div className="relative p-4 my-6 text-heading-white col-start-6 col-end-10 mr-auto">
                            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/test.png`} className="w-full h-auto" alt="Event 1" />
                        </div>
                    </div>

                    {/* Event 2 */}
                    <div className="flex md:contents">
                        <div className="relative p-4 my-6 text-heading-white col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/test.png`} className="w-full h-auto" alt="Event 2" />
                        </div>
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-line"></div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-dot rounded-full top-1/2"></div>
                        </div>
                        <div className="relative p-4 my-6 text-heading-white rounded-xl col-start-6 col-end-10 mr-auto hidden md:block">
                            <h3 className="text-lg font-medium md:text-3xl lg:text-4xl">New Event 2</h3>
                            <p className="mt-2 leading-6 text-lg">Description of the second event.</p>
                            {/* <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 2</span> */}
                        </div>
                    </div>

                    {/* Event 3 */}
                    <div className="flex md:contents flex-row-reverse">
                        <div className="relative p-4 my-6 text-heading-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto hidden md:block">
                            <h3 className="text-lg font-medium md:text-3xl lg:text-4xl">New Event 3</h3>
                            <p className="mt-2 leading-6 text-lg">Description of the first event.</p>
                            {/* <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 3</span> */}
                        </div>
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-line rounded-t-full bg-gradient-to-b"></div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-dot rounded-full top-1/2"></div>
                        </div>
                        <div className="relative p-4 my-6 text-heading-white col-start-6 col-end-10 mr-auto">
                            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/test.png`} className="w-full h-auto" alt="Event 3" />
                        </div>
                    </div>
                </div>

                {/* Internal Link Button */}
                <div className="text-center mt-8">
                    <button className="p-8 text-left text-blue-500 mt-2 hover:underline">
                        View all Projects →
                    </button>
                </div>
            </div>
        </div>
    );
};
