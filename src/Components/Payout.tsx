import { useState } from "react";

const Payout = () => {
  // Mock payout progress and history
  const [progress] = useState(0); // percent
  const [goal] = useState(35000);
  const [history] = useState([]); // add objects for payout history
  const [loading, setLoading] = useState(false);

  const handleRequestPayout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Payout requested!");
    }, 1200);
  };

  return (
    <div className="max-w-md mx-auto py-8 px-4">
      {/* Plan Card */}
      <div className="bg-gray-100 rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-bold text-rose-400 mb-1">Basic Plan</h2>
        <div className="text-gray-400 mb-4">Free Listing on every Property</div>
        <div className="flex flex-col items-center mb-2">
          {/* Progress Arc Spinner */}
          <svg width="48" height="48" viewBox="0 0 48 48" className="animate-spin">
            <circle cx="24" cy="24" r="20" stroke="#e5e7eb" strokeWidth="4" fill="none" />
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="#a1626a"
              strokeWidth="4"
              fill="none"
              strokeDasharray="32 100"
              strokeDashoffset="0"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="font-bold text-lg mb-1">Earnings Goal Progress</div>
        <div className="h-2 bg-gray-200 rounded mb-1">
          <div className="h-2 bg-rose-300 rounded" style={{ width: `${progress}%` }} />
        </div>
        <div className="text-gray-400 text-sm mb-2">{progress}% of your ₹{goal.toLocaleString()} monthly goal</div>
        <button
          className="w-full py-3 bg-rose-400 text-white rounded-full font-semibold shadow-lg hover:bg-rose-500 transition-all duration-300 mt-2"
          onClick={handleRequestPayout}
          disabled={loading}
        >
          {loading ? "Requesting..." : "Request Payout"}
        </button>
      </div>
      {/* Payout History */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-left">Payout History</h2>
        {history.length === 0 ? (
          <div className="flex flex-col items-center mt-4">
            <svg width="48" height="48" viewBox="0 0 48 48" className="animate-spin">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="#a1626a"
                strokeWidth="4"
                fill="none"
                strokeDasharray="32 100"
                strokeDashoffset="0"
                strokeLinecap="round"
              />
            </svg>
          </div>
        ) : (
          <ul className="space-y-2">
            {history.map((_, idx) => (
              <li key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
                {/* Render payout history details here */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Payout; 