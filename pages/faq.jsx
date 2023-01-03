import React from "react";
function FAQ() {
    return (
        <div>
            <section className="text-gray-700">
                <div className="container px-5  mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                            Frequently Asked Question
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            The most common questions about how our business works and what
                            can do for you.
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="w-full lg:w-1/2 px-4 py-2">
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    I have a disability – can I join an Intrepid trip?
                                    Intrepid is committed
                                </summary>

                                <span>
                                    Intrepid is committed to making travel widely accessible, regardless of ability or disability. We ask that you carefully consider whether you are physically and mentally able to complete the itinerary you have chosen, recognising that on many trips you will be required to carry your own bags and use public transport.

                                    Where we can we will make reasonable adjustments to the operation of our trips to facilitate the requirements of disabled travellers – such as booking ground floor accommodation, or having our leaders communicate important directions in writing as well as verbally. Many travellers with disabilities have been able to enjoy our trips by travelling with a friend or companion who can assist with specific needs. If joining a group trip is not practical we may be able to provide you with a private departure. Please contact our sales team for further information on any of our itineraries.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                    I’m travelling alone – is that OK?
                                </summary>

                                <span>
                                    Travelling solo


                                    This is the beauty of the Intrepid style of travel: many of our travellers join because they are travelling solo and want to meet and share experiences with like-minded people. Learn more about solo travel.

                                    If I am travelling solo, will I be charged for having my own room?

                                    On our trips rooming is organised on a twin-share basis. We pair up solo travellers with another traveller of the same gender as per the gender marker on each of their passports. If you'd like your own space, you also have the choice to pay for an individual room (available on the majority of our trips).

                                    As a responsible tour operator, we strive to create a safe and inclusive environment for everyone. In the case that your gender identity differs from what is indicated on your passport, please contact us so that we can discuss rooming options with you.

                                    On a small selection of itineraries some accommodations are booked on an open-gender, multi-share basis (for example on a felucca in Egypt or an overnight train in Vietnam). In those instances, it will clearly be stated in your Essential Trip Information prior to booking and travelling.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">

                                    Which style of trip is right for me?
                                </summary>

                                <span>
                                    Trip styles

                                    Our four styles of travel – Basix, Original, Comfort and Premium – cover a whole gamut of travel experiences. To find out which one has ‘You’ written all over it, visit our trip styles page.

                                    Are trips physically demanding?

                                    Want to lie in a hammock and not move until cocktail hour? We’ve got a trip for that. Want to power up the side of a mountain at high altitude? We’ve also got a trip for that. To determine what type of trip suits you best, each of our trips comes with a Physical Rating to let you know how physically demanding it is… or isn’t.
                                </span>
                            </details>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 py-2">

                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    Does TravelEth have family trips?
                                </summary>

                                <span className="px-4 py-2">
                                    Travelling with children


                                    Intrepid offers a wide range of Family Adventures around the globe. The minimum age (for Family trips) varies depending on the destination, and Intrepid has set minimum ages to ensure that the included activities suit each age range. Additionally, you’ll notice that some of the more adventurous destinations have a higher minimum age. Please check out our Family Adventures for more information.
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    How can I communicate with you?
                                </summary>

                                <span className="px-4 py-2">
                                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                    minim velit nostrud pariatur culpa magna in aute.
                                </span>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FAQ;
