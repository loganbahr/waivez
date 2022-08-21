import React from "react";
import TailwindPartnerSearchBar from "./TailwindPartnerSearchBar";

export default function TailwindHero({companies}) {

    return (
        <div className="relative bg-secondary overflow-hidden md:mt-12 z-0">
            <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
                <div className="relative h-full max-w-7xl mx-auto">
                    <svg
                        className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                        width={404}
                        height={784}
                        fill="none"
                        viewBox="0 0 404 784"
                    >
                        <defs>
                            <pattern
                                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-primary opacity-20"
                                      fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
                    </svg>
                    <svg
                        className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                        width={404}
                        height={784}
                        fill="none"
                        viewBox="0 0 404 784"
                    >
                        <defs>
                            <pattern
                                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-primary opacity-20"
                                      fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"/>
                    </svg>
                </div>
            </div>

            <div className={'flex justify-center pt-16'}>
                <h1 className={'text-6xl md:text-8xl tracking-tight font-bold text-primary'}>
                    waivez
                </h1>
            </div>

            <div className="relative pb-16 sm:pb-24">
                <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Data driven liability waivers</span>{' '}
                            <span className="block text-primary xl:inline">for any business.</span>
                        </h1>
                        <p className="mt-9 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            <span>On the water, in the air, and anywhere between —</span>
                            <span className={'text-primary font-semibold text-2xl tracking-tight mr-1'}> waivez</span>
                            <span> has it covered.</span>
                        </p>
                    </div>
                </main>


                {/*search bar to find partner*/}
                <div className={'max-w-4xl mx-auto my-6'}>
                    <TailwindPartnerSearchBar companies={companies}/>
                </div>

            </div>
        </div>
    )
}
