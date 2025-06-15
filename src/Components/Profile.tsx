import React, { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setAvatar(ev.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-md mx-auto py-8 px-4">
      {/* Avatar and Welcome */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-28 h-28 mb-2">
          <img
            src={avatar || "https://avatars.githubusercontent.com/u/9919?v=4"}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow"
          />
          <button
            onClick={handleAvatarClick}
            className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow border border-gray-200"
            aria-label="Upload avatar"
          >
            <FaCamera className="text-blue-500 text-lg" />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleAvatarChange}
            className="hidden"
          />
        </div>
      </div>
      {/* Basic Info */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Basic Information</h2>
        <div className="flex justify-between text-gray-500 mb-1">
          <span>Name</span>
          <span className="text-black">Apurva</span>
        </div>
        <div className="flex justify-between text-gray-500 mb-1">
          <span>Host Rating</span>
          <span className="text-black">4.8 / 5</span>
        </div>
        <div className="flex justify-between text-gray-500 mb-1">
          <span>DOB</span>
          <span className="text-black">01/08/2004</span>
        </div>
      </div>
      {/* Contact Details */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Contact Details</h2>
        <div className="flex justify-between text-gray-500 mb-1">
          <span>Email</span>
          <span className="text-black">apurvakix@gmail.com</span>
        </div>
        <div className="flex justify-between text-gray-500 mb-1">
          <span>Phone</span>
          <span className="text-black">6306880941</span>
        </div>
      </div>
      {/* Managed Properties */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold">Managed Properties</h2>
          <button className="text-2xl text-rose-400 hover:text-rose-600 font-bold">+</button>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          {/* Placeholder illustration */}
          <svg width="120" height="60" fill="none" viewBox="0 0 120 60">
            <rect x="10" y="40" width="100" height="10" rx="2" fill="#e5e7eb" />
            <circle cx="30" cy="50" r="5" fill="#e5e7eb" />
            <circle cx="90" cy="50" r="5" fill="#e5e7eb" />
            <rect x="40" y="30" width="40" height="10" rx="2" fill="#e5e7eb" />
          </svg>
          <span className="mt-2 text-gray-500">No properties found</span>
        </div>
      </div>
    </div>
  );
};

export default Profile; 