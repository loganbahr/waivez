import React from 'react';
import Image from "next/image";
import loganbahrprofile from "../../../public/Graphics/TeamPictures/loganbahrprofile.png";
import devinarenaprofile from "../../../public/Graphics/TeamPictures/devinarenaprofile.jpg";

const AboutTeam = () => {

    const people = [
        {
            name: 'Logan Bahr',
            role: 'Full-Stack Developer',
            degree: 'Software Engineer',
            image: loganbahrprofile,
            bio: 'Logan is a full-stack developer with a passion for building beautiful, interactive websites. He was born and raised in Southwest Florida, with a background in business and hospitality. Previous to software development, Logan helped manage and operate one of the largest watersports companies in the country — now known as Hoffmann Watersports. ',
            githubUrl: 'https://www.github.com/LBThree',
            linkedinUrl: 'https://www.linkedin.com/in/logan-bahr-0a1298201/',
        },
        {
            name: 'Devin Arena',
            role: 'Full-Stack Developer',
            degree: 'Software Engineer',
            image: devinarenaprofile,
            bio: "Devin is a full-stack developer who found his love for programming at the early age of 9! Ever since, he's been fascinated by the world of programming. He's addicted to designing and building websites, applications, and games. In his spare time Devin enjoys playing the piano, learning music theory, Speedcubing, and game development.",
            githubUrl: 'https://github.com/devinarena/',
            linkedinUrl: 'https://www.linkedin.com/in/devin-arena/',
        },
    ];

    return (
        <div className="bg-secondary">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                    <div className="space-y-5 sm:space-y-4">
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">The
                            Team</h2>
                        <p className="text-xl text-gray-500">
                            The original team behind <span className={'text-primary font-medium'}>waivez</span> is
                            just two developers — both graduates from Florida Gulf Coast University with Software
                            Engineering degrees. Logan and Devin both grew up in Naples, Florida and still live
                            there today.
                        </p>
                    </div>
                    <div className="lg:col-span-2">
                        <ul
                            role="list"
                            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
                        >
                            {people.map((person) => (
                                <li key={person.name}>
                                    <div className="space-y-4">
                                        <div className="aspect-w-3 aspect-h-2">
                                            <Image className="object-cover shadow-lg rounded-lg"
                                                   width={300}
                                                   height={400}
                                                   src={person.image}
                                                   alt=""/>

                                        </div>
                                        <div className="text-lg leading-6 text-slate-900 space-y-1">
                                            <h3 className={'font-bold'}>{person.name}</h3>
                                            <p className="text-primary font-medium">{person.role}</p>
                                            <p className="text-gray-500 text-lg font-light">{person.degree}</p>
                                        </div>
                                        <div className="text-lg">
                                            <p className="text-gray-500">{person.bio}</p>
                                        </div>

                                        <ul role="list" className="flex space-x-5">
                                            <li>
                                                <a href={person.githubUrl}
                                                   className="text-gray-400 hover:text-gray-500">
                                                    <span className="sr-only">Github</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"
                                                         fill={'currentColor'} className={'w-5 h-5'}>
                                                        <path
                                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={person.linkedinUrl}
                                                   target={'_blank'}
                                                   rel={'noopener noreferrer'}
                                                   className="text-gray-400 hover:text-gray-500">
                                                    <span className="sr-only">LinkedIn</span>
                                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor"
                                                         viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTeam;
