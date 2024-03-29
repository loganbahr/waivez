import WaivezLogoCropped from "../components/Graphics/WaivezLogoCropped";
import Link from "next/link";

export default function Example() {
  return (
    <>
      <div className="flex flex-col min-h-screen pt-16 pb-12 bg-secondary">
        <main className="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="justify-center flex-shrink-0 hidden md:flex"></div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold tracking-wide uppercase text-primary">
                404 error
              </p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Page not found.
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-6">
                <Link href={"/"}>
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
  );
}
