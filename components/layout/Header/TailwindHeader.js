import React, {useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";
import {signOut, useSession} from "next-auth/react";
import Logo from "../../Graphics/Logo";
import WaivezLandingLogo from "../../Graphics/WaivezLandingLogo";
import WaivezLogo from "../../Graphics/WaivezLogo";
import WaivezLogoCropped from "../../Graphics/WaivezLogoCropped";


const navigation = [
    {name: 'Partners', href: '/partners'},
    {name: 'Pricing', href: '/pricing'},
    {name: 'About', href: '/about'},
    {name: 'Contact', href: '/contact'},
];

const TailwindHeader = () => {
        const {data: session, status} = useSession();

        return (
            <div className={''}>
                <header className="bg-[#7f00ff]">
                    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                        <div className="w-full py-2 flex items-center justify-between border-b border-white lg:border-none">
                            <div className="flex items-center">
                                <Link href={'/'}>
                                    <a className={''}>
                                        <span className="sr-only">Workflow</span>
                                        <WaivezLogoCropped width={150} height={50} color={'white'}/>
                                    </a>
                                </Link>
                                <div className="hidden ml-10 space-x-8 lg:block">
                                    {navigation.map((link) => (
                                        <Link href={link.href} key={link.name}>
                                            <a className="text-base font-medium text-white hover:text-indigo-50">
                                                {link.name}
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div
                                className="ml-2 flex flex-col space-y-1 sm:space-y-0 sm:flex-row sm:space-x-2 sm:align-middle">
                                {!session ? <Link href={'/auth/signin'}>
                                    <button
                                        className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-[#7f00ff] hover:bg-opacity-75">
                                        Sign in
                                    </button>
                                </Link> : <button
                                    className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-[#7f00ff] hover:bg-opacity-75"
                                    onClick={async () => {
                                        await signOut({callbackUrl: '/auth/signin'});
                                    }}>
                                    Sign Out
                                </button>}

                                {session &&
                                    <Link passHref={true}
                                          href={`/partner/${session.user.name.toLowerCase().replace(/\s/g, '')}/dashboard`}>
                                        <button
                                            className={'inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-[#7f00ff] hover:bg-opacity-75'}>
                                            Dashboard
                                        </button>
                                    </Link>}
                            </div>
                        </div>
                        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                            {navigation.map((link) => (
                                <a key={link.name} href={link.href}
                                   className="text-base font-medium text-white hover:text-indigo-50">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
;

export default TailwindHeader;
