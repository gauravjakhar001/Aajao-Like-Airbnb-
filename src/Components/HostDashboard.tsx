import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Item {
  name: string;
}

const HostDashboard = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [bookings] = useState<Item[]>([]);
  const [transactions] = useState<Item[]>([]);

  // Example handler for chat button
  const handleChatClick = () => {
    alert("Chat support coming soon!");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="p-6">
        <div className="bg-white rounded-full flex items-center px-4 py-2 shadow mb-6 border border-gray-200 focus-within:ring-2 focus-within:ring-rose-400 transition">
          <FaSearch className="mr-2 text-gray-400" />
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-gray-700 font-semibold placeholder:italic"
            placeholder="Discover your perfect stay..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-lg">Ongoing Bookings</span>
          <button
            className="text-rose-400 font-medium cursor-pointer"
            onClick={() => navigate("/dashboard/bookings")}
          >
            See all
          </button>
        </div>
        {bookings.length === 0 ? (
          <div className="text-center text-gray-500 mb-8">No Ongoing Bookings</div>
        ) : (
          <ul>
            {bookings.map((booking, idx) => (
              <li key={idx}>{booking.name}</li>
            ))}
          </ul>
        )}
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-lg">Recent Transactions</span>
          <button
            className="text-rose-400 font-medium cursor-pointer"
            onClick={() => navigate("/dashboard/transactions")}
          >
            See all
          </button>
        </div>
        {transactions.length === 0 ? (
          <div className="text-center text-gray-500">No Recent Transactions</div>
        ) : (
          <ul>
            {transactions.map((txn, idx) => (
              <li key={idx}>{txn.name}</li>
            ))}
          </ul>
        )}
      </div>
      <button
        className="fixed bottom-6 right-6 bg-rose-400 rounded-full p-4 shadow-lg text-white text-2xl"
        onClick={handleChatClick}
        aria-label="Open chat"
      >
        &#x1F4AC;
      </button>
    </div>
  );
};

export default HostDashboard; 