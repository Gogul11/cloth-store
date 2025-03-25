import { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import Footer from "./footer";

export default function About() {

    return (
        <div>

            <div className="mt-5 max-w-screen-lg mx-auto">
                <div className="flex justify-center">
                    <NavBar />
                </div>
                <p className="text-[40px] text-white my-4 font-bold text-center">ABOUT US</p>
                <div className="my-5 p-4 flex flex-col gap-10 md:flex-row md:items-center">

                    <div className="w-full md:w-2/3">
                        <p className="text-white font-medium text-[18px] my-4">
                            Welcome to <span className="text-blue-600 font-light">Trendy Trends</span>, your go-to destination for fashion that speaks your style!
                            We believe that clothing is more than just fabric—it's an expression of who you are.
                            Our collection is carefully curated to bring you the latest trends,
                            timeless classics, and everything in between, ensuring you always look and feel your best.
                        </p>
                        <p className="text-white font-medium text-[18px] my-4">
                            At <span className="text-blue-600 font-light">Trendy Trends</span>, we are committed to providing high-quality, stylish,
                            and affordable fashion for everyone. Whether you're looking for casual wear, party outfits,
                            or everyday essentials, we have something to suit your vibe.
                        </p>
                        <p className="text-[24px] text-white font-bold mt-12">Why Choose Us?</p>
                        <ul className="text-white text-[18px] space-y-2">
                            <li><span className="text-blue-600 font-light">✔ Trendy & Affordable:</span> Stay ahead of fashion without breaking the bank.</li>
                            <li><span className="text-blue-600 font-light">✔ Premium Quality:</span> We handpick the best materials for comfort and durability.</li>
                            <li><span className="text-blue-600 font-light">✔ Customer First:</span> Your satisfaction is our priority, and we strive to make your shopping experience seamless.</li>
                        </ul>
                        <p className="text-white font-medium text-[18px] mt-6">
                            Join us on this fashion journey and redefine your wardrobe with <span className="text-blue-600 text-[20px] font-light">Trendy Trends</span> - where style meets confidence!
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <img src="https://placehold.co/300x300.png" alt="Fashion Display" className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>

    );
}
