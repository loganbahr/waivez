import React from 'react';
import {CheckIcon} from "@heroicons/react/solid";

const steps = [
    {
        name: 'Prototype Complete (4/15/22)',
        description: 'Our completed Prototype already has a lot of the core functionality required for a successful product launch. A user can search for a company, sign that companies waivers, and then view the waiver they signed. In essence, this is the core of what Waivez needs to do. Our next phases will improve on this functionality and allow Partners to interact and make use of this core feature.',
        status: 'complete'
    },
    {
        name: 'Partner Dashboard: Desktop (4/15/22 — 9/1/22)',
        description: "The Desktop Partner Dashboard is a simple, intuitive interface that allows Partners to view the users that signed their company's waivers. A Partner will be able to edit, remove, and add information to an existing waiver. The Partner Dashboard will also feature metadata on the companies user-base, implementing various charts and diagrams to accurately depict the kinds of people that visit your business.",
        status: 'current',
    },
    {
        name: 'Partner Dashboard: Mobile (9/1/22 — 1/1/23)',
        description: 'This phase will focus on extending the capabilities of the Partner Dashboard natively to mobile platforms, available on the iOS App Store and Google Playstore. Partners will be able to download the app on their phones or tablets and operate the dashboard just as they would in the desktop version.',
        status: 'upcoming'
    },
    {
        name: 'Testing',
        description: 'We intend to spend a minimum of one month dedicated to rigorous testing, allowing us to determine the necessary infrastructure to support all product capabilities at scale. Waivez must retain full functionality under load, and be able to handle growth — not only in terms of increasing users, but also an increase in features.',
        status: 'upcoming'
    },
    {
        name: 'Deployment',
        description: "We do not currently have an exact date of deployment, but we intend to officially launch Waivez sometime in the first quarter of 2023. We see no reason to rush the launch with consideration to the sensitive nature of the data we are storing and its' potential for abuse. We are working diligently to ensure that the product we deliver is exceptional at launch.",
        status: 'upcoming'
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const AboutStepper = () => {
    return (
        <div className={'max-w-6xl mx-2 md:mx-auto'}>
            <h1 className={'text-4xl tracking-tight my-10 mx-2 mt-6 md:mt-20 font-extrabold text-slate-900 md:text-5xl'}>
                Product Roadmap
            </h1>
            <nav aria-label="Progress">
                <ol role="list" className="overflow-hidden">
                    {steps.map((step, stepIdx) => (
                        <li key={step.name}
                            className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
                            {step.status === 'complete' ? (
                                <>
                                    {stepIdx !== steps.length - 1 ? (
                                        <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-primary"
                                             aria-hidden="true"/>
                                    ) : null}
                                    <a href={step.href} className="relative flex items-start group">
                  <span className="h-9 flex items-center">
                    <span
                        className="relative z-10 w-8 h-8 flex items-center justify-center bg-primary rounded-full group-hover:bg-primaryHover">
                      <CheckIcon className="w-5 h-5 text-white" aria-hidden="true"/>
                    </span>
                  </span>
                                        <span className="ml-4 min-w-0 flex flex-col">
                    <span className="text-xl font-semibold tracking-wide uppercase">{step.name}</span>
                    <span className="text-lg text-gray-500">{step.description}</span>
                  </span>
                                    </a>
                                </>
                            ) : step.status === 'current' ? (
                                <>
                                    {stepIdx !== steps.length - 1 ? (
                                        <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                                             aria-hidden="true"/>
                                    ) : null}
                                    <a href={step.href} className="relative flex items-start group" aria-current="step">
                  <span className="h-9 flex items-center" aria-hidden="true">
                    <span
                        className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-primary rounded-full">
                      <span className="h-2.5 w-2.5 bg-primary rounded-full"/>
                    </span>
                  </span>
                                        <span className="ml-4 min-w-0 flex flex-col">
                    <span className="text-xl font-semibold tracking-wide uppercase text-primary">{step.name}</span>
                    <span className="text-lg text-gray-500">{step.description}</span>
                  </span>
                                    </a>
                                </>
                            ) : (
                                <>
                                    {stepIdx !== steps.length - 1 ? (
                                        <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                                             aria-hidden="true"/>
                                    ) : null}
                                    <a href={step.href} className="relative flex items-start group">
                  <span className="h-9 flex items-center" aria-hidden="true">
                    <span
                        className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                      <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"/>
                    </span>
                  </span>
                                        <span className="ml-4 min-w-0 flex flex-col">
                    <span className="text-xl font-semibold tracking-wide uppercase text-gray-500">{step.name}</span>
                    <span className="text-lg text-gray-500">{step.description}</span>
                  </span>
                                    </a>
                                </>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    );
};

export default AboutStepper;
