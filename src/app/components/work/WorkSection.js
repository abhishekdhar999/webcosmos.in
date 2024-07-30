import React from 'react';
    
    export default function WorkSection({worksData}) {
        return (
            <div className="px-20 py-0 w-full col-span-12">
                <div className="grid grid-cols-2 gap-6 p-6 bg-background">
                    {worksData.map((work, index) => (
                        <a key={index} href={work.link} className="shadow-md rounded-[1.125rem] overflow-hidden relative group block">
                            <div className="md:rounded-t-[1.125rem] md:items-baseline md:p-[1.1rem_1.25rem_2.225rem] w-full flex justify-between border-t border-r border-l border-white-600 mb-[-1.125rem]">
                                <h3 className="md:gap-2.5 md:text-xl font-normal leading-none m-0 text-heading-white">{work.name}</h3>
                                <p className="md:text-xl font-normal leading-none text-heading-white">{work.year}</p>
                            </div>
                            <div className="aspect-4/3 md:rounded-lg relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-black/80 p-5%_9% opacity-0 transition-opacity duration-300 z-10 flex items-center justify-center text-white group-hover:opacity-100 leading-5 font-normal mb-4 text-2xl">
                                    {work.text}
                                </div>
                                <span className="md:rounded-t-[1.125rem] top-0 left-0 w-full h-full object-cover">
                                    <img src={work.image} alt={work.name} className="md:rounded-t-[1.125rem] block max-w-full max-h-full overflow-clip" />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        );
    }
    