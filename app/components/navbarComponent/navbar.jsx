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

    return (
        <div className="flex flex-col h-screen">
            {/* Navbar Section (Fixed on top) */}
            <div className="bg-white flex items-center justify-between px-5 py-2 rounded-[20px] sticky top-0 z-50">
                {/* MRF Logo */}
                <Image
                    className="rounded-md h-12 w-32"
                    alt="company logo"
                    src={companyNameLogo}
                    height={50}
                    width={150}
                />

                {/* LP Compressor text */}
                <p className="font-bold text-center flex-grow ml-8">LP Compressor</p>

                {/* Current Date and Time */}
                <div className="font-medium text-center flex-grow py-1 px-2">
                    {dateTime ? dateTime.toLocaleString() : "Loading..."}
                </div>

                {/* JD Logo */}
                <Image
                    className="rounded-md"
                    alt="jdtlogo"
                    src={TvsMobility}
                    height={50}
                    width={50}
                />
            </div>

            {/* BodyContent Section */}
            <div className="flex-grow overflow-auto mt-4"> {/* mt-4 to give space below Navbar */}
                <BodyContent />
            </div>
        </div>
    );
};

export default Navbar;
