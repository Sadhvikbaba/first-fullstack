import React from 'react'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    const status = useSelector((state) => state.auth.status)
    let direction = status ? "/profile" : "/login" ;
  return (
    <section className="relative overflow-hidden py-10 bg-gray-100  border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className=" mb-4 inline-flex items-center ml-17 ">
                                &nbsp; &nbsp; &nbsp; &nbsp;<Logo width="175" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2024. All Rights Reserved by sadhvik.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-orange-600 hover:text-gray-400"
                                        to="/terms-and-conditions"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-orange-600 hover:text-gray-400"
                                        to="/contact-us"
                                    >
                                        let's meet
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-orange-600 hover:text-gray-400"
                                        
                                        to={direction}
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-orange-600 hover:text-gray-400"
                                        to="/contact-us"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-orange-600 hover:text-gray-400"
                                        to="/contact-us"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-orange-600 hover:text-gray-400"
                                        to="/contact-us"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-orange-600 hover:text-gray-400"
                                        to="/terms-and-conditions"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-orange-600 hover:text-gray-400"
                                        to="/terms-and-conditions"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer