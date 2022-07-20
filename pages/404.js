/* This example requires Tailwind CSS v2.0+ */
import WaivezLogoCropped from "../components/Graphics/WaivezLogoCropped";
import Link from "next/link";

export default function Example() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
            <div className="min-h-screen pt-16 pb-12 flex flex-col bg-white">
                <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hidden md:flex flex-shrink-0 justify-center">
                    </div>
                    <div className="py-16">
                        <div className="text-center">
                            <p className="text-sm font-semibold text-primary uppercase tracking-wide">404 error</p>
                            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page
                                not found.</h1>
                            <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking
                                for.</p>
                            <div className="mt-6">
                                <Link href={'/'}>
                                    <a className="text-base font-medium text-primary hover:text-primaryHover">
                                        Go back home<span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
