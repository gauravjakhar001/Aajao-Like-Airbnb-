import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PropertyDetails = () => {
  const [showSheet, setShowSheet] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <PropertyDetailsContent showSheet={showSheet} setShowSheet={setShowSheet} isFavourite={isFavourite} setIsFavourite={setIsFavourite} />
  );
};

function PropertyDetailsContent({ showSheet, setShowSheet, isFavourite, setIsFavourite }: { showSheet: boolean, setShowSheet: (v: boolean) => void, isFavourite: boolean, setIsFavourite: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [showDatePicker, setShowDatePicker] = useState<null | 'from' | 'to'>(null);
  const [fromDate, setFromDate] = useState('2025-04-30');
  const [toDate, setToDate] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [checkInTime, setCheckInTime] = useState('16:00');
  const [checkOutTime, setCheckOutTime] = useState('14:00');
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const amenities = ["Wi-Fi", "Kitchen", "Parking", "Air Conditioning"];
  const navigate = useNavigate();
  // State for reviews
  const [reviews, setReviews] = useState<{ text: string }[]>([]);
  const [newReviewText, setNewReviewText] = useState('');
  const [showAddReviewForm, setShowAddReviewForm] = useState(false);
  // State for description toggle
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Full property description (placeholder for now)
  const fullDescription = "My home has a warm and inviting atmosphere, with a lot of natural light filtering through large windows. The living area is spacious and comfortable, perfect for relaxing after a long day. The kitchen is fully equipped, allowing you to prepare your own meals. The bedroom is cozy and offers a peaceful retreat. The neighborhood is quiet and friendly, with easy access to local amenities and public transport.";
  const truncatedDescription = "My home has a warm and inviting atmosphere, with a lot of natural light filtering through large windows.";

  // Function to handle deleting a review
  const handleDeleteReview = (indexToDelete: number) => {
    setReviews(reviews.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col relative">
      {/* Top image and overlay buttons */}
      <div className="relative w-full">
        <img
          src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
          alt="Cheeta house"
          className="w-full h-64 md:h-100 object-cover rounded-b-3xl"
        />
        {/* Back button */}
        <button
          className="absolute top-4 left-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
          onClick={() => navigate(-1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#333" strokeWidth="2" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        {/* Share and Like buttons */}
        <div className="absolute top-4 right-4 flex gap-3">
          <button
            className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            onClick={() => {
              const shareData = {
                title: document.title,
                text: 'Check out this property!',
                url: window.location.href,
              };
              if (navigator.share) {
                navigator.share(shareData).catch(() => {});
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#333" strokeWidth="2" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 10l5-5m0 0l5 5m-5-5v12" />
            </svg>
          </button>
          <button
            className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            onClick={() => setIsFavourite(fav => !fav)}
            aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
          >
            {isFavourite ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="#e11d48" viewBox="0 0 24 24" stroke="#e11d48" strokeWidth="2" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#e11d48" strokeWidth="2" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
              </svg>
            )}
          </button>
        </div>
        {/* Rating and type */}
        <div className="absolute bottom-2 left-4 flex gap-2">
          <span className="bg-white/80 rounded-xl px-3 py-1 text-sm flex items-center gap-1 shadow"><span className="text-yellow-500">★</span> 4.2</span>
          <span className="bg-white/80 rounded-xl px-3 py-1 text-sm shadow">Apartment</span>
        </div>
      </div>
      {/* Main content */}
      <div className="flex-1 px-4 pt-4 pb-32 bg-rose-50">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold">Cheeta house</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-rose-700 text-lg">📍</span>
              <span className="text-gray-500 font-medium">Cheeta house</span>
            </div>
          </div>
          <button className="bg-white rounded-full p-2 shadow text-rose-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#e11d48" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </button>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold text-lg mb-1">Property Description</h2>
          <p className="text-gray-700 mb-2">
            {showFullDescription ? fullDescription : truncatedDescription}
          </p>
          <button className="flex items-center gap-1 text-rose-700 font-semibold hover:underline"
            onClick={() => setShowFullDescription(prev => !prev)}
          >
            {showFullDescription ? 'Show less' : 'Show more'}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#e11d48" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d={showFullDescription ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
            </svg>
          </button>
        </div>
        {/* Amenities Section */}
        <div className="mt-8">
          <h2 className="font-semibold text-lg mb-2">Amenities</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            {amenities.map((amenity: string) => (
              <button
                key={amenity}
                onClick={() => setSelectedAmenities((prev: string[]) => prev.includes(amenity) ? prev.filter((a: string) => a !== amenity) : [...prev, amenity])}
                className={`rounded-2xl px-8 py-4 text-lg font-semibold shadow transition-all duration-150
                  ${selectedAmenities.includes(amenity)
                    ? 'bg-rose-700 text-white'
                    : 'bg-rose-100 text-gray-800 hover:bg-rose-200 hover:text-rose-700 active:bg-rose-300'}
                `}
                style={{ minWidth: 140 }}
              >
                {amenity}
              </button>
            ))}
          </div>
        </div>
        {/* Gallery Section */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2">Gallery</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            <div className="rounded-xl overflow-hidden shadow transition-transform duration-300 hover:scale-110 flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D" alt="Gallery 1" className="w-40 h-28 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow transition-transform duration-300 hover:scale-110 flex-shrink-0">
              <img src="https://blupp.b-cdn.net/eroshotel/bbd0e739-682a-4e30-a1b0-aea296169f28/home-slider-2.jpg?quality=80" alt="Gallery 2" className="w-40 h-28 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow transition-transform duration-300 hover:scale-110 flex-shrink-0">
              <img src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D" alt="Gallery 3" className="w-40 h-28 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow transition-transform duration-300 hover:scale-110 flex-shrink-0">
              <img src="https://plus.unsplash.com/premium_photo-1661923725782-f73c990fbddf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D" alt="Gallery 4" className="w-40 h-28 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow transition-transform duration-300 hover:scale-110 flex-shrink-0">
              <img src="https://plus.unsplash.com/premium_photo-1661876403473-64980cbfdf0f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8" alt="Gallery 5" className="w-40 h-28 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow transition-transform duration-300 hover:scale-110 flex-shrink-0">
              <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg" alt="Gallery 6" className="w-40 h-28 object-cover" />
            </div>
          </div>
        </div>
        {/* Reviews Section */}
        <div className="mt-6 ">
          <h2 className="font-semibold text-lg mb-2">Reviews</h2>
          {reviews.length === 0 && !showAddReviewForm && (
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center justify-center min-h-[180px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fbbf24" strokeWidth="2" className="w-12 h-12 mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.755l6.908-1.004L12 2.5l3.092 6.251L22 9.755l-5.007 4.367 1.179 6.873z" /></svg>
              <div className="text-xl font-semibold text-gray-700 mb-1">No Reviews Yet</div>
              <div className="text-gray-500 mb-4">Be the first to share your experience!</div>
              <button
                className="bg-rose-700 text-white rounded-lg px-6 py-2 font-semibold hover:bg-rose-800 transition"
                onClick={() => setShowAddReviewForm(true)}
              >
                Add a Review
              </button>
            </div>
          )}

          {reviews.length > 0 && (
            <div className="mb-4">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-2xl shadow p-4 mb-4 last:mb-0 flex justify-between items-center">
                  <p className="text-gray-700">{review.text}</p>
                  <button
                    className="text-red-500 hover:text-red-700 transition"
                    onClick={() => handleDeleteReview(index)}
                    aria-label="Delete review"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          {showAddReviewForm && (
            <div className="bg-white rounded-2xl shadow p-6">
              <textarea
                className="w-full border rounded-lg p-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={4}
                placeholder="Write your review here..."
                value={newReviewText}
                onChange={(e) => setNewReviewText(e.target.value)}
              ></textarea>
              <button
                className="w-full bg-rose-700 text-white rounded-lg py-3 font-semibold hover:bg-rose-800 transition"
                onClick={() => {
                  if (newReviewText.trim()) {
                    setReviews([...reviews, { text: newReviewText }]);
                    setNewReviewText('');
                    setShowAddReviewForm(false);
                  }
                }}
              >
                Submit Review
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Sticky bottom bar within PropertyDetails only */}
      <div className="sticky bottom-0 left-0 w-full flex justify-center z-40 bg-transparent">
        <button
          className="bg-rose-700 text-white rounded-t-3xl rounded-b-3xl flex items-center gap-4 px-6 py-3 my-3 shadow-xl max-w-md w-[95vw] text-2xl font-bold justify-center"
          onClick={() => setShowSheet(true)}
        >
          ₹2399.0
          <span className="flex items-center gap-2 bg-gray-600/40 rounded-xl px-3 py-1 text-base">
            <svg xmlns='http://www.w3.org/2000/svg' className='inline-block' width='20' height='20' fill='currentColor' viewBox='0 0 24 24'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>
            IN/2G
          </span>
          <span className="flex items-center gap-2 bg-gray-600/40 rounded-xl px-3 py-1 text-base">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            {fromDate ? new Date(fromDate).toLocaleDateString('en-GB') : 'Select Date'}
          </span>
        </button>
      </div>
      {showSheet && <BottomSheet onClose={() => setShowSheet(false)}
        showDatePicker={showDatePicker}
        setShowDatePicker={setShowDatePicker}
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
        showTimePicker={showTimePicker}
        setShowTimePicker={setShowTimePicker}
        checkInTime={checkInTime}
        setCheckInTime={setCheckInTime}
        checkOutTime={checkOutTime}
        setCheckOutTime={setCheckOutTime}
      />}
    </div>
  );
}

const BottomSheet = ({ onClose, showDatePicker, setShowDatePicker, fromDate, setFromDate, toDate, setToDate, showTimePicker, setShowTimePicker, checkInTime, setCheckInTime, checkOutTime, setCheckOutTime }: any) => {
  const [price, setPrice] = useState(2399);
  const priceOptions = [299, 349, 399, 449];

  return (
    <div className="fixed inset-0 z-[2000] flex items-end justify-center bg-black/30">
      <div className="bg-white w-full max-w-md rounded-t-3xl p-6 pb-8 shadow-2xl animate-slideUp relative">
        <button className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-rose-700" onClick={onClose}>&times;</button>
        <h2 className="text-xl font-bold mb-6">View Details</h2>
        {/* Date row */}
        <div className="flex items-center gap-3 mb-4 cursor-pointer" onClick={() => setShowDatePicker('from')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#444" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <span className="text-lg">{fromDate ? new Date(fromDate).toLocaleDateString('en-GB') : 'Select Date'}</span>
          <span className="ml-auto text-2xl text-gray-400">&gt;</span>
        </div>
        {/* Book To row */}
        <div className="flex items-center gap-3 mb-4 cursor-pointer" onClick={() => setShowDatePicker('to')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#444" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <span className="text-lg">{toDate ? new Date(toDate).toLocaleDateString('en-GB') : 'Book To (DD/MM/YYYY)'}</span>
          <span className="ml-auto text-2xl text-gray-400">&gt;</span>
        </div>
        {/* Check-in/Check-out row */}
        <div className="mb-4 cursor-pointer" onClick={() => setShowTimePicker(true)}>
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#444" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span className="text-lg">Check-in/Check-out Time</span>
            <span className="ml-auto text-2xl text-gray-400">&gt;</span>
          </div>
          <div className="ml-8 text-gray-500 text-base">{formatTime(checkInTime)} / {formatTime(checkOutTime)}</div>
        </div>
        {/* Price adjustment */}
        <div className="flex items-center justify-center gap-2 mb-4 mt-2">
          <button
            className={`rounded-xl px-6 py-3 text-lg font-bold border-2 ${price === 2389 ? 'border-blue-500 bg-gray-100 text-blue-700' : 'border-gray-100 bg-gray-100 text-gray-500'}`}
            onClick={() => setPrice(price - 10)}
          >
            -10
          </button>
          <div className="bg-gray-100 rounded-xl px-8 py-3 text-2xl font-bold flex items-center gap-2">
            <span className="text-gray-500">₹</span>{price}
          </div>
          <button
            className="bg-rose-700 text-white rounded-xl px-6 py-3 text-lg font-bold"
            onClick={() => setPrice(price + 10)}
          >
            +10
          </button>
        </div>
        {/* Price options */}
        <div className="flex flex-wrap gap-3 justify-center mb-4">
          {priceOptions.map((p) => (
            <button
              key={p}
              className={`rounded-xl px-6 py-2 text-lg font-semibold ${price === p ? 'bg-blue-100 text-blue-700 border-2 border-blue-500' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setPrice(p)}
            >
              ₹{p}.0
            </button>
          ))}
        </div>
        {/* Payment checkbox */}
        <div className="flex items-center gap-2 mb-6 mt-2">
          <input type="checkbox" id="payOnArrival" className="w-5 h-5 rounded border-gray-300" />
          <label htmlFor="payOnArrival" className="text-gray-700 text-base select-none">Make the payment upon arrival</label>
        </div>
        {/* Next button */}
        <button className="w-full bg-rose-700 text-white rounded-2xl py-3 text-lg font-bold hover:bg-rose-800 transition">Next</button>
        {/* Date Picker Modal */}
        {showDatePicker && (
          <div className="fixed inset-0 z-[2100] flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center">
              <h3 className="text-lg font-bold mb-2">Select Date</h3>
              <input
                type="date"
                className="border rounded px-4 py-2 mb-4"
                value={showDatePicker === 'from' ? fromDate : toDate}
                onChange={e => {
                  if (showDatePicker === 'from') setFromDate(e.target.value);
                  else setToDate(e.target.value);
                }}
              />
              <button
                className="bg-rose-700 text-white rounded-lg px-6 py-2 font-semibold"
                onClick={() => setShowDatePicker(null)}
              >OK</button>
            </div>
          </div>
        )}
        {/* Time Picker Modal */}
        {showTimePicker && (
          <div className="fixed inset-0 z-[2100] flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center">
              <h3 className="text-lg font-bold mb-2">Set Check-in/Check-out Time</h3>
              <div className="flex flex-col gap-4 mb-4">
                <label className="flex flex-col items-center">
                  <span className="mb-1 font-medium">Check-in Time</span>
                  <input
                    type="time"
                    className="border rounded px-4 py-2"
                    value={checkInTime}
                    onChange={e => setCheckInTime(e.target.value)}
                  />
                </label>
                <label className="flex flex-col items-center">
                  <span className="mb-1 font-medium">Check-out Time</span>
                  <input
                    type="time"
                    className="border rounded px-4 py-2"
                    value={checkOutTime}
                    onChange={e => setCheckOutTime(e.target.value)}
                  />
                </label>
              </div>
              <button
                className="bg-rose-700 text-white rounded-lg px-6 py-2 font-semibold"
                onClick={() => setShowTimePicker(false)}
              >OK</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper to format time as h:mm AM/PM
function formatTime(time: string) {
  if (!time) return '';
  const [h, m] = time.split(':');
  let hour = parseInt(h, 10);
  const min = m;
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  if (hour === 0) hour = 12;
  return `${hour}:${min} ${ampm}`;
}

export default PropertyDetails; 