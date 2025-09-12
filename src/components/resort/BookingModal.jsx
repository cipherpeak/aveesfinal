import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle, X } from "lucide-react";

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "",
    checkIn: undefined,
    checkOut: undefined,
    guests: "",
    specialRequests: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        name: "",
        email: "",
        phone: "",
        roomType: "",
        checkIn: undefined,
        checkOut: undefined,
        guests: "",
        specialRequests: "",
      });
    }, 3000);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
        <div className="bg-white max-w-md w-full mx-auto rounded-2xl p-8 text-center">
          <div className="py-6">
            <div className="flex justify-center mb-5">
              <div className="bg-red-100 p-3 rounded-full">
                <CheckCircle className="h-12 w-12 text-red-600" fill="currentColor" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Thank you for your booking!
            </h3>
            <p className="text-gray-600 mb-6">
              Your request has been received. Our team will contact you shortly to confirm your reservation.
            </p>
            <button
              onClick={onClose}
              className="bg-red-600 text-white hover:bg-red-700 w-full rounded-full py-3 font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white max-w-3xl w-full mx-4 rounded-2xl border border-gray-100 shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 rounded-full p-1.5 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
          
          <div className="pt-8 pb-4 px-8">
            <div className="flex justify-center mb-2">
              <div className="w-12 h-1 bg-red-600 rounded-full"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
              Book Your Stay at Avees Resort
            </h2>
            <p className="text-gray-600 text-center mt-2">
              Complete the form below to request your reservation
            </p>
          </div>
        </div>
        
        <div className="px-8 py-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors py-3 px-4"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors py-3 px-4"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  placeholder="+91 9876543210"
                  className="w-full rounded-lg border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors py-3 px-4"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="roomType" className="text-sm font-medium text-gray-700">Room Type *</label>
                <select
                  id="roomType"
                  value={formData.roomType}
                  onChange={(e) => handleInputChange("roomType", e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors py-3 px-4 bg-white"
                >
                  <option value="">Select room type</option>
                  <option value="single">Single Room</option>
                  <option value="double">Double Room</option>
                  <option value="family">Family Room</option>
                  <option value="suite">Heritage Suite</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-gray-700">Check-in Date *</label>
                <button
                  type="button"
                  onClick={() => setShowCheckInCalendar(!showCheckInCalendar)}
                  className={`w-full text-left font-normal rounded-lg border border-gray-300 py-3 px-4 flex items-center ${
                    !formData.checkIn ? "text-gray-400" : "text-gray-900"
                  }`}
                >
                  <CalendarIcon className="mr-2 h-5 w-5 text-gray-500" />
                  {formData.checkIn ? format(formData.checkIn, "PPP") : "Select check-in date"}
                </button>
                
                {showCheckInCalendar && (
                  <div className="absolute z-10 mt-1 bg-white rounded-lg border border-gray-200 shadow-md p-2 w-full">
                    <div className="calendar">
                      {/* Simplified calendar implementation - in a real app you'd use a proper calendar component */}
                      <div className="text-center font-medium mb-2">
                        {format(new Date(), "MMMM yyyy")}
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                          <div key={i} className="text-center text-sm font-medium py-1">
                            {day}
                          </div>
                        ))}
                        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => {
                              const date = new Date();
                              date.setDate(day);
                              handleInputChange("checkIn", date);
                              setShowCheckInCalendar(false);
                            }}
                            className={`p-2 rounded-full hover:bg-red-100 ${
                              formData.checkIn && formData.checkIn.getDate() === day
                                ? "bg-red-600 text-white"
                                : ""
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-2 relative">
                <label className="text-sm font-medium text-gray-700">Check-out Date *</label>
                <button
                  type="button"
                  onClick={() => setShowCheckOutCalendar(!showCheckOutCalendar)}
                  className={`w-full text-left font-normal rounded-lg border border-gray-300 py-3 px-4 flex items-center ${
                    !formData.checkOut ? "text-gray-400" : "text-gray-900"
                  }`}
                >
                  <CalendarIcon className="mr-2 h-5 w-5 text-gray-500" />
                  {formData.checkOut ? format(formData.checkOut, "PPP") : "Select check-out date"}
                </button>
                
                {showCheckOutCalendar && (
                  <div className="absolute z-10 mt-1 bg-white rounded-lg border border-gray-200 shadow-md p-2 w-full">
                    <div className="calendar">
                      <div className="text-center font-medium mb-2">
                        {format(new Date(), "MMMM yyyy")}
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                          <div key={i} className="text-center text-sm font-medium py-1">
                            {day}
                          </div>
                        ))}
                        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => {
                              const date = new Date();
                              date.setDate(day);
                              handleInputChange("checkOut", date);
                              setShowCheckOutCalendar(false);
                            }}
                            className={`p-2 rounded-full hover:bg-red-100 ${
                              formData.checkOut && formData.checkOut.getDate() === day
                                ? "bg-red-600 text-white"
                                : ""
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="guests" className="text-sm font-medium text-gray-700">Number of Guests *</label>
              <input
                id="guests"
                type="number"
                min="1"
                max="20"
                value={formData.guests}
                onChange={(e) => handleInputChange("guests", e.target.value)}
                required
                placeholder="Number of guests"
                className="w-full rounded-lg border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors py-3 px-4"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="specialRequests" className="text-sm font-medium text-gray-700">Special Requests</label>
              <textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                placeholder="Any special requirements or requests (dietary needs, accessibility, celebrations, etc.)"
                rows={4}
                className="w-full rounded-lg border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors py-3 px-4"
              />
            </div>

            <div className="px-0 pt-4 pb-2">
              <button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full transition-colors shadow-md"
              >
                Request Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;