"use client"; // This tells Next.js that this is a Client Component

import React, { useState, useEffect } from "react";
import Image from "next/image";
import companyNameLogo from "../../../public/images/mrflogo.png";
import TvsMobility from "../../../public/images/jdtlogo.png";
import BodyContent from "../bodyContent/bodyContent";

const Navbar = () => {
    const [dateTime, setDateTime] = useState(null); // Start with null

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        // Cleanup interval on unmount
        return () => clearInterval(timer);
    }, []);

    // If the component is not yet mounted (no dateTime), render a placeholder
    if (dateTime === null) {
        return (
            <div className="px-5">
                <div className="bg-slate-100 flex flex-col py-[3.4rem] sticky top-0 z-50"></div>

                <div className="bg-white flex items-center justify-between px-5 py-2 rounded-[20px] sticky top-12 -mt-16 z-50">
                    {/* MRF Logo - Slightly increased size */}
                    <Image
                        className="rounded-md h-16 w-36" // Increased size of MRF logo
                        alt="company logo"
                        src={companyNameLogo}
                        height={150}
                        width={200}
                    />

                    {/* BIAS CUTTER text with increased margin */}
                    <p className="font-bold text-center flex-grow ml-8">BIAS CUTTER</p> {/* Increased margin-left for more gap */}

                    {/* Placeholder for Date and Time */}
                    <div className="font-medium text-center">Loading...</div>

                    {/* JD Logo */}
                    <Image
                        className="rounded-md"
                        alt="jdtlogo"
                        src={TvsMobility}
                        height={150}
                        width={150}
                    />
                </div>

                <BodyContent />
            </div>
        );
    }

    return (
        <div className="px-5">
            <div className="bg-slate-100 flex flex-col py-[3.4rem] sticky top-0 z-50"></div>

            <div className="bg-white flex items-center justify-between px-5 py-2 rounded-[20px] sticky top-12 -mt-16 z-50">
                {/* MRF Logo - Slightly increased size */}
                <Image
                    className="rounded-md h-16 w-36" // Increased size of MRF logo
                    alt="company logo"
                    src={companyNameLogo}
                    height={150}
                    width={200}
                />

                {/* BIAS CUTTER text with increased margin */}
                <p className="font-bold text-center flex-grow ml-8">BIAS CUTTER</p> {/* Increased margin-left for more gap */}

                {/* Current Date and Time */}
                <div className="font-medium text-center flex-grow">
                    {dateTime.toLocaleString()}
                </div>

                {/* JD Logo */}
                <Image
                    className="rounded-md"
                    alt="jdtlogo"
                    src={TvsMobility}
                    height={150}
                    width={150}
                />
            </div>

            <BodyContent />
        </div>
    );
};

export default Navbar;
