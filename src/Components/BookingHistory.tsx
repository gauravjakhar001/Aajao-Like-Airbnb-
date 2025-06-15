import { useState } from "react";

const mockBookings: { id: string; property: string; date: string; status: string }[] = [];
// To test with bookings, add objects to mockBookings array above.

const BookingHistory = () => {
  const [bookings] = useState(mockBookings);

  return (
    <div className="max-w-md mx-auto py-12 px-4 min-h-[60vh] flex flex-col items-center justify-center">
      {bookings.length === 0 ? (
        <>
          <svg width="120" height="60" fill="none" viewBox="0 0 120 60" className="mb-4">
            <rect x="10" y="40" width="100" height="10" rx="2" fill="#e5e7eb" />
            <circle cx="30" cy="50" r="5" fill="#e5e7eb" />
            <circle cx="90" cy="50" r="5" fill="#e5e7eb" />
            <rect x="40" y="30" width="40" height="10" rx="2" fill="#e5e7eb" />
          </svg>
          <div className="text-gray-500 text-lg">No Booking History</div>
        </>
      ) : (
        <div className="w-full space-y-4">
          <h2 className="text-xl font-bold mb-4">Booking History</h2>
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="font-semibold">{booking.property}</span>
                <span className="text-sm text-gray-400">{booking.date}</span>
              </div>
              <div className="text-sm text-gray-600">Status: {booking.status}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingHistory; 