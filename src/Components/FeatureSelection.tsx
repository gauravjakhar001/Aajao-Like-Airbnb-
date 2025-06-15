import { useState } from "react";
import SignUp from "./SignUp";

export default function FeatureSelection() {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <section 
            className="relative w-full min-h-screen py-12 md:py-20"
            style={{
                backgroundImage: 'url("https://www.v-hotels.in/assets/site-images/blogs/3.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'overlay'
            }}
        >
            {/* Overlay to ensure text readability - reduced opacity */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-rose-900/40"></div>
            
            <div className="container relative z-10 px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center min-h-[80vh] max-w-4xl mx-auto">
                    {/* Text Section - enhanced visibility */}
                    <div className="space-y-8 text-center">
                        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white drop-shadow-lg">
                            Discover Your <span className="text-rose-300">Dream Home</span>
                        </h2>
                        <p className="text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto text-rose-100 font-medium drop-shadow-md">
                            Find a perfect property with ease. <br /> Explore, compare and connect with <br /> trusted agents all in one app
                        </p>
                        
                        <div className="flex justify-center pt-4">
                            <button 
                                onClick={() => setShowLogin(true)}
                                className="px-8 py-3 rounded-full w-100 md:w-70 text-white font-medium bg-gradient-to-r from-rose-900 to-rose-600 hover:from-rose-800 hover:to-rose-600 transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:scale-105 active:translate-y-0.5 active:shadow-lg"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showLogin && <SignUp onClose={() => setShowLogin(false)} />}
        </section>
    );
}