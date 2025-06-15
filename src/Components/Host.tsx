import { useState } from "react";
import { FaBell, FaUser, FaHome, FaPlusSquare, FaListUl, FaFileInvoice, FaMoneyCheckAlt, FaShieldAlt, FaSignOutAlt, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Host() {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
      navigate("/");
    };
  
    const closeMenu = () => setShowMenu(false);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
                
                <div></div>
                {/* Center: Navigation */}
                <nav className="flex gap-6">
                    <button className="px-4 py-2 rounded-lg bg-rose-100 text-rose-900 font-semibold hover:bg-rose-200 transition">History</button>
                    <Link to="/dashboard/invoices">
                    <button className="px-4 py-2 rounded-lg bg-rose-100 text-rose-900 font-semibold hover:bg-rose-200 transition">Invoices</button>
                    </Link>
                    
                    <button className="px-4 py-2 rounded-lg bg-rose-700 text-white font-semibold hover:bg-rose-600 transition">Manage your Property</button>
                </nav>
                {/* Right: Icons */}
                <div className="flex items-center gap-4">
                     <Link
                                to="#"
                               
                              >
                                 <FaBell className="text-2xl text-gray-400 hover:text-rose-600 cursor-pointer" title="Notifications" />
                     </Link>
                    
                     <Link
                                to="/dashboard/profile"
                                
                              >
                                <FaUser className="text-2xl text-gray-400 hover:text-rose-600 cursor-pointer" title="Profile" />
                              </Link>

                     <Link
                                to="#"
                                onClick={() => setShowMenu((prev) => !prev)}
                              >
                                 <FaBars className="text-2xl text-gray-400 hover:text-rose-600 cursor-pointer" title="Menu" />
                    </Link>
                    
                </div>
            </header>

            {/* Host Sidebar Menu */}
            {showMenu && (
              <div className="fixed inset-0 z-50 flex justify-end">
                <div className="w-72 bg-white h-full shadow-2xl rounded-l-3xl flex flex-col pt-10 px-6 relative">
                  <nav className="flex-1 space-y-2">
                    <Link to="/dashboard/profile" onClick={closeMenu} className="flex items-center gap-3 py-3 px-2 rounded-lg text-gray-700 hover:bg-rose-50 text-lg">
                      <FaUser className="text-xl" /> Profile
                    </Link>
                    <Link to="/dashboard" onClick={closeMenu} className="flex items-center gap-3 py-3 px-2 rounded-lg text-gray-700 hover:bg-rose-50 text-lg">
                      <FaHome className="text-xl" /> Home
                    </Link>
                    <Link to="/dashboard/add-property" onClick={closeMenu} className="flex items-center gap-3 py-3 px-2 rounded-lg text-gray-700 hover:bg-rose-50 text-lg">
                      <FaPlusSquare className="text-xl" /> Add Property
                    </Link>
                    <Link to="/dashboard/bookings" onClick={closeMenu} className="flex items-center gap-3 py-3 px-2 rounded-lg text-gray-700 hover:bg-rose-50 text-lg">
                      <FaListUl className="text-xl" /> Booking History
                    </Link>
                    <Link to="/dashboard/invoices" onClick={closeMenu} className="flex items-center gap-3 py-3 px-2 rounded-lg text-gray-700 hover:bg-rose-50 text-lg">
                      <FaFileInvoice className="text-xl" /> Invoices
                    </Link>
                    <Link to="/dashboard/payout" onClick={closeMenu} className="flex items-center gap-3 py-3 px-2 rounded-lg text-gray-700 hover:bg-rose-50 text-lg">
                      <FaMoneyCheckAlt className="text-xl" /> Payout
                    </Link>
                    <Link to="/dashboard/privacy" onClick={closeMenu} className="flex items-center gap-3 py-3 px-2 rounded-lg text-gray-700 hover:bg-rose-50 text-lg">
                      <FaShieldAlt className="text-xl" /> Privacy Policy
                    </Link>
                    <button onClick={() => { handleLogout(); closeMenu(); }} className="flex items-center gap-3 py-3 px-2 rounded-lg text-gray-700 hover:bg-rose-50 text-lg w-full text-left">
                      <FaSignOutAlt className="text-xl" /> Logout
                    </button>
                  </nav>
                </div>
                {/* Overlay to close menu */}
                <div className="flex-1" onClick={closeMenu} />
              </div>
            )}

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-rose-900 mt-10 mb-4">Welcome, Anuj</h1>
                <p className="text-lg text-gray-600 mb-8">Quote, <span className="italic">"Define here"</span></p>
                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-rose-900 to-rose-600 text-white text-xl font-bold shadow-lg hover:scale-105 transition mb-8">
                    List your Property
                </button>
                <div className="text-center text-gray-700 text-base mb-8">
                    Add blog2 &mdash; <span className="font-medium">Show Host can earn, Set Price</span>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full py-4 bg-white border-t text-center text-gray-500">
                Footer
            </footer>
        </div>
    )
}