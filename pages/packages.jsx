import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Image from 'next/image'
function packages() {
  return (
    <>
      <main className="px-3">
        <div className="text-4xl sm:text-5xl text-center my-10">Types of Tour Packages we Provide</div>

        <div className="grid md:grid-cols-3 gap-8 m-5 max-w-5xl m-auto">
          <div className="bg-white">
            {/* <image src="https://www.google.cbiw=1920&bih=937&dpr=1#imgrc=NqR7OpRWMnbqvM&imgdii=_cNNt10fZAWIbM" alt="" className="w-full h-48 sm:h-56 object-cover" /> */}

            <div className="px-10 py-6 mb-10 text-center">
              <div className="text-2xl font-bold text-purple-500 mb-4">Business Tour</div>
              <span className="text-sm">
                The nature of business tour is  different in many ways from that of other tour packages. However, the pleasure element can not be separated from the business tours.

                Because business persons travel for a variety of reasons – destinations are not chosen by them but predetermined and more often attractions are added to make business tours more effective and attractive.
              </span>
            </div>

            <button className="rounded-md w-full text-lg h-16 text-white font-extrabold bg-purple-500">VIEW RECIPES</button>
          </div>

          <div className="bg-white">
            <div className="px-10 py-6 mb-10 text-center">
              <div className="text-2xl font-bold text-green-500 mb-4">Escorted Tour</div>
              <span className="text-sm">It is also known as ‘Conducted Tour’. A tour escort is provided from the starting point back to the point of return to accompany the tour members.
                This type of tour is generally arranged by ground operators on behalf of main tour operator.Some tours will have both a local escort and a professional escort sharing the responsibilities involved throughout the entire journey.</span>
            </div>
            <button className="rounded-md w-full text-lg h-16 text-white font-extrabold bg-green-500">VIEW RECIPES</button>
          </div>

          <div className="bg-white">
            <div className="px-10 py-6 mb-10 text-center">
              <div className="text-2xl font-bold text-blue-500 mb-4">Independent Tour</div>

              <span className="text-sm">Independent tour is prepared to the individual/particular traveler’s specification.
                In this tour, a traveler is free and independent to select any component for his journey.
                The travel agency/tour operator puts the components of the ‘Tour’ together, working directly
                with the vendors – airlines, hotels, cruise lines, transport operators and others
                independent tour may be a package</span>
            </div>

            <button className="rounded-md w-full text-lg h-16 text-white font-extrabold bg-blue-500">VIEW RECIPES</button>
          </div>
          <div className="bg-white">
            <div className="px-10 py-6 mb-10 text-center">
              <div className="text-2xl font-bold text-yellow-500 mb-4"> Inclusive Tour</div>

              <span className="text-sm">The tour ingredients purchased, combined and sold as a package at an inclusive price to tourists by a tour operator is known as an inclusive tour.
                It is an advertised tour package which includes travel and ground arrangements at group rates</span>
            </div>

            <button className="rounded-md w-full text-lg h-16 text-white font-extrabold bg-yellow-500 mb-10">VIEW RECIPES</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default packages