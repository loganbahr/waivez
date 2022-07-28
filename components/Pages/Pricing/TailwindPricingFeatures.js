/* This example requires Tailwind CSS v2.0+ */
import {GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon} from '@heroicons/react/outline'

const features = [
    {
        name: 'Appreciate',
        description: "Get to know your customers — where they come from and when they'll be back. The Partner Dashboard analytics will show you.",
        icon: GlobeAltIcon,
    },
    {
        name: 'Integrate',
        description:
            "Connect with third-party services like FareHarbor, Quickbooks, Mailchimp, and more. We want to add to your existing systems, not replace them.",
        icon: ScaleIcon,
    },
    {
        name: 'Automate',
        description:
            "If you're still using physical waivers, it's time to digitalize them. Your customers need to be able to sign waivers from anywhere, at anytime.",
        icon: LightningBoltIcon,
    },
    {
        name: 'Communicate',
        description:
            "It's not what you say, it's when you say it. Our Machine Learning analytics find the best time to communicate with your customers.",
        icon: MailIcon,
    },
]

export default function TailwindPricingFeatures() {
    return (
        <div className="bg-gray-50 overflow-hidden my-20">
            <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <svg
                    className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
                    width={404}
                    height={784}
                    fill="none"
                    viewBox="0 0 404 784"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
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
                    <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"/>
                </svg>

                <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Manage your liability and your users.
                        </h2>
                    </div>
                    <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
                        {features.map((feature) => (
                            <div key={feature.name}>
                                <dt>
                                    <div
                                        className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true"/>
                                    </div>
                                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
