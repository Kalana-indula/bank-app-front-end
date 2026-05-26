import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Page = () => {
    return (
        <>
            <div className="flex min-h-screen">
                {/*  Form section   */}
                <div className="w-1/2 h-screen flex flex-col items-center justify-center gap-6">
                    {/*Header*/}
                    <div className="flex gap-4">
                        <Image src={`/logo.png`}
                               alt={`logo`}
                               width={40} height={35}/>
                        <div className="text-[30px] font-semibold">
                            Horizon
                        </div>
                    </div>

                    {/*Login*/}
                    <div>
                        <div className="text-[36px] font-medium mb-2">
                            Login
                        </div>
                        <div className="text-gray-500 text-sm">
                            Welcome back! Please enter your details.
                        </div>

                        {/*Email*/}
                        <div className="my-6">
                            <div className="mb-2">
                                <label className="text-gray-700">Email</label>
                            </div>
                            <div>
                                <input className="border-2 border-[#D0D5DD] rounded-md h-[44px] w-[360px] p-[10px]"
                                       placeholder="Enter your email"/>
                            </div>
                        </div>

                        {/*Password*/}
                        <div className="my-6">
                            <div className="mb-2">
                                <label className="text-gray-700">Password</label>
                            </div>
                            <div>
                                <input className="border-2 border-[#D0D5DD] rounded-md h-[44px] w-[360px] p-[10px]"
                                       placeholder="Enter your password"/>
                            </div>
                        </div>

                        {/*    button*/}
                        <button className="w-[360px] h-[44px] cursor-pointer bg-bank-gradient text-white rounded-md hover:bg-[#026ecc]">
                            Login
                        </button>

                        {/*  Options  */}
                        <div className="mt-8 flex items-center justify-center">
                            <p className="text-gray-500">Don't have an account? <Link href={"/"} className="text-blue-600 font-semibold">Sign Up</Link></p>
                        </div>
                    </div>
                </div>

                {/*  Background section  */}
                <div className="w-1/2 h-screen bg-[#F3F9FF]">

                </div>
            </div>
        </>
    )
}
export default Page
