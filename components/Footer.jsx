import React from 'react'
import Link from 'next/link'
function Footer() {
  return (
   

    <div aria-label="Site Footer" className="bg-gray-900">
    {/* <Nav /> */}
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="lg:flex lg:gap-8">
        <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-6 lg:gap-y-16">
          <div className="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
            <p className="font-bold text-white">About us</p>

            <nav
              aria-label="Footer Nav"
              className="mt-6 flex flex-col space-y-4 text-sm text-gray-300"
            >
              <Link className="inline-block" href="/">
                {" "}
                Company Profile{" "}
              </Link>
              <Link className="inline-block" href="/BoardofDirectors">
                {" "}
                About Us{" "}
              </Link>
              <Link className="inline-block" href="/executiveManagement">
                {" "}
                What we do{" "}
              </Link>
              <Link className="inline-block" href="/">
                {" "}
                What can we offer to you{" "}
              </Link>
            </nav>
          </div>
          <div className="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
            <p className="font-bold text-white">CONTACT US</p>

            <nav className="mt-6 flex flex-col space-y-4 text-sm text-gray-300">
              <Link className="inline-block" href="/">
                {" "}
                linkedin {" "}
              </Link>
              <Link className="inline-block" href="/">
                {" "}
                Facebook{" "}
              </Link>
              <Link className="inline-block" href="/">
                {" "}
                Telegram{" "}
              </Link>
              <Link className="inline-block" href="/">
                {" "}
                Twitter{" "}
              </Link>
            </nav>
          </div>
          <div className="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
            <p className="font-bold text-white">SUPPORT</p>

            <nav className="mt-6 flex flex-col space-y-4 text-sm text-gray-300">
              <Link className="inline-block" href="/">
                {" "}
               Call 951{" "}
              </Link>
              <Link className="inline-block" href="/faq">
                {" "}
                Faq{" "}
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <p className="text-center text-xs text-gray-400 lg:text-left">
            Copyright &copy; 2022. Abenezer Kifle. All rights
            reserved.
          </p>

          <div className="flex justify-center gap-4 text-xs text-gray-400 lg:justify-end">
            <Link href="/"> Terms & Conditions </Link>
            <Link href="/"> Privacy Policy </Link>
            <Link href="/"> Cookies </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer