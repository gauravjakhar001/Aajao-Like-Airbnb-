import React, { useEffect, useState } from "react";
import logo from "../assets/aajao.png";
// import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import Loginkaro from "../Components/Loginkaro";
import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Header: React.FC = () => {
    const [showModal, setShowModal] = useState<'none' | 'login' | 'signup'>('none');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setShowModal('none');
    }, [location.pathname]);

    useEffect(() => {
        const handleShowLogin = () => setShowModal('login');
        const handleShowSignup = () => setShowModal('signup');

        window.addEventListener('showLogin', handleShowLogin);
        window.addEventListener('showSignup', handleShowSignup);

        return () => {
            window.removeEventListener('showLogin', handleShowLogin);
            window.removeEventListener('showSignup', handleShowSignup);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-8 md:h-10 object-contain" />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden p-2 rounded-md hover:bg-gray-100"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Desktop Navigation and Auth Buttons - Right Side */}
                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex gap-6">
                        <Link
                            to="/"
                            className="text-sm font-medium text-rose-900 hover:text-rose-700">
                            Home
                        </Link>
                        <Link to='/About' className='text-sm font-medium text-gray-500 hover:text-rose-700'>
                            About
                        </Link>
                        <Link to='/contact' className='text-sm font-medium text-gray-500 hover:text-rose-700'>
                            Contact
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link
                            to="/host"
                            className="text-sm font-medium text-gray-500 hover:text-rose-700">
                            Become a Host
                        </Link>
                        <button
                            onClick={() => setShowModal('signup')}
                            className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-rose-900 to-rose-600 rounded-md hover:from-rose-800 hover:to-rose-600 flex items-center gap-2">
                            <FaUser className="text-sm" />
                            Login/SignUp
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-white border-b md:hidden">
                        <nav className="flex flex-col p-4 space-y-4">
                            <Link
                                to="/"
                                className="text-sm font-medium text-rose-900 hover:text-rose-700">
                                Home
                            </Link>
                            <Link to='/About' className='text-sm font-medium text-gray-500 hover:text-rose-700'>
                                About
                            </Link>
                            <Link to='/contact' className='text-sm font-medium text-gray-500 hover:text-rose-700'>
                                Contact
                            </Link>
                            <Link
                                to="/host"
                                className="text-sm font-medium text-gray-500 hover:text-rose-700">
                                Become a Host
                            </Link>
                            <button
                                onClick={() => {
                                    setShowModal('signup');
                                    setIsMobileMenuOpen(false);
                                }}
                                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-rose-900 to-rose-600 rounded-md hover:from-rose-800 hover:to-rose-600 flex items-center gap-2">
                                <FaUser className="text-sm" />
                                Login/SignUp
                            </button>
                        </nav>
                    </div>
                )}
            </div>
            {showModal === 'signup' && <SignUp onClose={() => setShowModal('none')} />}
            {showModal === 'login' && <Loginkaro onClose={() => setShowModal('none')} />}
        </header>
    );
};

export default Header;
