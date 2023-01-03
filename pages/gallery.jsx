"use client";

import { motion } from "framer-motion";
import {PageWrapper} from '../components/PageWrapper'
const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const images = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Productpage() {
  return (
    <>
    <div className="container mx-auto">
      <h1>
        <PageWrapper>
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 pt-24 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-0">
              <div>
                <div className="w-full">
                  <div className="mb-12 max-w-[620px] lg:mb-20">
                    <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                      All Heritage
                    </h2>
                    <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                      There are many variations of passages of Lorem Ipsum
                      available but the majority have suffered alteration in
                      some form.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
            >
              <motion.div variants={images} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src="http://cdn.cnn.com/cnnnext/dam/assets/160719115824-ethiopia4-erte-ale-volcano-danakil-desert-c-ethiopian-tourism-organization.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        Afar
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Ethiopia</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={images} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src="https://www.hospitalitynet.org/picture/xxl_153074816.jpg?t=1487331394"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        Gonder
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Ethiopia</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={images} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src="https://www.ethiosports.com/wp-content/uploads/2014/03/Ethiopia-Tourism.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        Gonder
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Ethiopia</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={images} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src="https://wantsee.world/wp-content/uploads/2020/05/ethiopia-2.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                       Bensangomze
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Ethiopia</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={images} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src="https://static.euronews.com/articles/682349/1024x538_682349.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                       Harar
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Ethiopia</p>
                  </div>
                </div>
                
              </motion.div>
              <motion.div variants={images} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src="https://www.walkinethiopia.com/media/k2/items/cache/73608782f50eb6af17bb69bdcd662692_M.jpg"
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                       Addis Ababa
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Ethiopia</p>
                  </div>
                </div>
                
              </motion.div>
            </motion.div>
          </div>
        </PageWrapper>
      </h1>
    </div>
    </>
  );
}
