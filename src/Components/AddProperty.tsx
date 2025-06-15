import React, { useRef, useState } from "react";
import { FaCamera, FaBuilding, FaMapMarkerAlt, FaFlag, FaFileAlt, FaDollarSign, FaEnvelope, FaPhone } from "react-icons/fa";

const amenitiesList = [
  "Wi-Fi", "Pool", "Gym", "Kitchen", "Air Conditioning", "Parking"
];

const AddProperty = () => {
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    name: "",
    type: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    description: "",
    exactPrice: "",
    minPrice: "",
    amenities: [] as string[],
    checkIn: "",
    checkOut: "",
    petFriendly: false,
    phone: "6306880941",
    email: "apurvakix@gmail.com",
    agree: false,
  });
  const [error, setError] = useState("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).slice(0, 6 - images.length);
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (ev) => {
          setImages(prev => [...prev, ev.target?.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleRemoveImage = (idx: number) => {
    setImages(images.filter((_, i) => i !== idx));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? target.checked : value
    }));
  };

  const handleAmenityToggle = (amenity: string) => {
    setForm(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.type || !form.address || !form.city || !form.state || !form.country || !form.zip || !form.description || !form.exactPrice || !form.phone || !form.email || !form.agree) {
      setError("Please fill all required fields and agree to the terms.");
      return;
    }
    setError("");
    alert("Property submitted!");
  };

  return (
    <form className="max-w-md mx-auto py-8 px-4 space-y-6" onSubmit={handleSubmit}>
      {/* Property Images */}
      <div>
        <h2 className="font-bold text-xl mb-2">Property Images (up to 6)</h2>
        <div className="grid grid-cols-3 gap-3 mb-2">
          {images.map((img, idx) => (
            <div key={idx} className="relative group">
              <img src={img} alt="Property" className="w-full h-24 object-cover rounded-lg" />
              <button type="button" onClick={() => handleRemoveImage(idx)} className="absolute top-1 right-1 bg-white rounded-full px-2 py-1 text-xs shadow">✕</button>
            </div>
          ))}
          {images.length < 6 && (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex flex-col items-center justify-center h-24 rounded-lg bg-gray-100 border-2 border-dashed border-gray-300 text-gray-500 text-3xl hover:bg-gray-200"
            >
              <FaCamera />
              <span className="text-xs mt-1">Add</span>
              <input
                type="file"
                accept="image/*"
                multiple
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
              />
            </button>
          )}
        </div>
      </div>
      {/* Basic Property Details */}
      <div>
        <h2 className="font-bold text-xl mb-2">Basic Property Details</h2>
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-3">
          <FaBuilding className="mr-2 text-gray-400" />
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Property Name"
            className="bg-transparent outline-none flex-1 text-gray-700"
          />
        </div>
        <h2 className="font-bold text-lg mb-2">Property Type</h2>
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-3">
          <FaMapMarkerAlt className="mr-2 text-gray-400" />
          <input
            name="type"
            value={form.type}
            onChange={handleChange}
            placeholder="Select Location"
            className="bg-transparent outline-none flex-1 text-gray-700"
          />
        </div>
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-3">
          <FaMapMarkerAlt className="mr-2 text-gray-400" />
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            className="bg-transparent outline-none flex-1 text-gray-700"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <FaBuilding className="mr-2 text-gray-400" />
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              className="bg-transparent outline-none flex-1 text-gray-700"
            />
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <FaMapMarkerAlt className="mr-2 text-gray-400" />
            <input
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="State"
              className="bg-transparent outline-none flex-1 text-gray-700"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <FaFlag className="mr-2 text-gray-400" />
            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Country"
              className="bg-transparent outline-none flex-1 text-gray-700"
            />
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <FaMapMarkerAlt className="mr-2 text-gray-400" />
            <input
              name="zip"
              value={form.zip}
              onChange={handleChange}
              placeholder="Zip Code"
              className="bg-transparent outline-none flex-1 text-gray-700"
            />
          </div>
        </div>
      </div>
      {/* Property Description */}
      <div>
        <h2 className="font-bold text-xl mb-2">Property Description</h2>
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-3">
          <FaFileAlt className="mr-2 text-gray-400" />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="bg-transparent outline-none flex-1 text-gray-700 resize-none h-16"
          />
        </div>
      </div>
      {/* Pricing */}
      <div>
        <h2 className="font-bold text-xl mb-2">Pricing</h2>
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-3">
          <FaDollarSign className="mr-2 text-gray-400" />
          <input
            name="exactPrice"
            value={form.exactPrice}
            onChange={handleChange}
            placeholder="Exact Price per Night"
            className="bg-transparent outline-none flex-1 text-gray-700"
            type="number"
            min="0"
          />
        </div>
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-3">
          <FaDollarSign className="mr-2 text-gray-400" />
          <input
            name="minPrice"
            value={form.minPrice}
            onChange={handleChange}
            placeholder="Minimum Price per Night (for offers)"
            className="bg-transparent outline-none flex-1 text-gray-700"
            type="number"
            min="0"
          />
        </div>
      </div>
      {/* Amenities */}
      <div>
        <h2 className="font-bold text-xl mb-2">Amenities</h2>
        <div className="flex flex-wrap gap-2 mb-3">
          {amenitiesList.map((amenity) => (
            <button
              type="button"
              key={amenity}
              onClick={() => handleAmenityToggle(amenity)}
              className={`px-4 py-2 rounded-lg border ${form.amenities.includes(amenity) ? "bg-rose-100 border-rose-400 text-rose-900" : "bg-white border-gray-300 text-gray-700"}`}
            >
              {amenity}
            </button>
          ))}
        </div>
      </div>
      {/* Policies */}
      <div>
        <h2 className="font-bold text-xl mb-2">Policies</h2>
        <div className="flex flex-col gap-3 mb-3">
          <input
            name="checkIn"
            value={form.checkIn}
            onChange={handleChange}
            placeholder="Check-in Time"
            className="bg-gray-100 rounded-lg px-3 py-2 outline-none text-gray-700"
            type="time"
          />
          <input
            name="checkOut"
            value={form.checkOut}
            onChange={handleChange}
            placeholder="Check-out Time"
            className="bg-gray-100 rounded-lg px-3 py-2 outline-none text-gray-700"
            type="time"
          />
          <div className="flex items-center gap-3">
            <span>Pet-Friendly</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="petFriendly"
                checked={form.petFriendly}
                onChange={handleChange}
                className="sr-only"
              />
              <span className={`w-10 h-6 flex items-center bg-gray-200 rounded-full p-1 duration-300 ease-in-out ${form.petFriendly ? 'bg-rose-300' : ''}`}>
                <span className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${form.petFriendly ? 'translate-x-4' : ''}`}></span>
              </span>
            </label>
          </div>
        </div>
      </div>
      {/* Contact Information */}
      <div>
        <h2 className="font-bold text-xl mb-2">Contact Information</h2>
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-3">
          <FaPhone className="mr-2 text-gray-400" />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Contact Number"
            className="bg-transparent outline-none flex-1 text-gray-700"
            type="tel"
          />
        </div>
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-3">
          <FaEnvelope className="mr-2 text-gray-400" />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-transparent outline-none flex-1 text-gray-700"
            type="email"
          />
        </div>
      </div>
      {/* Terms and Submit */}
      <div className="flex items-center mb-3">
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          className="mr-2"
        />
        <span>I agree to the terms and conditions</span>
      </div>
      {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
      <button
        type="submit"
        className="w-full py-3 bg-rose-400 text-white rounded-full font-semibold shadow-lg hover:bg-rose-500 transition-all duration-300 mt-2"
      >
        Submit
      </button>
    </form>
  );
};

export default AddProperty; 