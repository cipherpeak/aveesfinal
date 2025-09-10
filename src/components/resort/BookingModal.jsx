import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Textarea } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import {Calendar} from "@heroui/calendar";
import {Popover, PopoverTrigger, PopoverContent} from "@heroui/popover";
import { CalendarIcon, CheckCircle, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../../lib/utils";

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

  if (isSubmitted) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} className="max-w-md mx-auto">
        <ModalContent className="p-8 text-center rounded-2xl">
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
            <Button
              onClick={onClose}
              className="bg-red-600 text-white hover:bg-red-700 w-full rounded-full py-3 font-medium"
            >
              Close
            </Button>
          </div>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      size="2xl"
      className="max-w-3xl mx-4"
      hideCloseButton
    >
      <ModalContent className="max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-100 shadow-xl">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 rounded-full p-1.5 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
          
          <ModalHeader className="pt-8 pb-4 px-8">
            <div className="flex justify-center mb-2">
              <div className="w-12 h-1 bg-red-600 rounded-full"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
              Book Your Stay at Avees Resort
            </h2>
            <p className="text-gray-600 text-center mt-2">
              Complete the form below to request your reservation
            </p>
          </ModalHeader>
        </div>
        
        <ModalBody className="px-8 py-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  placeholder="Your full name"
                  className="rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500 transition-colors py-3"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500 transition-colors py-3"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  placeholder="+91 9876543210"
                  className="rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500 transition-colors py-3"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="roomType" className="text-sm font-medium text-gray-700">Room Type *</label>
                <Select 
                  selectedKeys={formData.roomType ? [formData.roomType] : []}
                  onChange={(value) => handleInputChange("roomType", value.target.value)}
                  className="w-full rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500"
                  popoverProps={{
                    classNames: {
                      content: "rounded-lg border border-gray-200 shadow-md"
                    }
                  }}
                >
                  <SelectItem key="single" className="rounded-md hover:bg-red-50 data-[selected=true]:bg-red-100">
                    Single Room
                  </SelectItem>
                  <SelectItem key="double" className="rounded-md hover:bg-red-50 data-[selected=true]:bg-red-100">
                    Double Room
                  </SelectItem>
                  <SelectItem key="family" className="rounded-md hover:bg-red-50 data-[selected=true]:bg-red-100">
                    Family Room
                  </SelectItem>
                  <SelectItem key="suite" className="rounded-md hover:bg-red-50 data-[selected=true]:bg-red-100">
                    Heritage Suite
                  </SelectItem>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Check-in Date *</label>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      variant="bordered"
                      className={cn(
                        "w-full justify-start text-left font-normal rounded-lg border-gray-300 py-3 h-auto",
                        !formData.checkIn ? "text-gray-400" : "text-gray-900"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-5 w-5 text-gray-500" />
                      {formData.checkIn ? format(formData.checkIn, "PPP") : "Select check-in date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 rounded-lg border border-gray-200 shadow-md">
                    <Calendar
                      mode="single"
                      selected={formData.checkIn}
                      onSelect={(date) => handleInputChange("checkIn", date)}
                      initialFocus
                      disabled={(date) => date < new Date()}
                      className="pointer-events-auto rounded-lg"
                      classNames={{
                        cell: "data-[selected=true]:bg-red-600 data-[hover=true]:bg-red-100",
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Check-out Date *</label>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      variant="bordered"
                      className={cn(
                        "w-full justify-start text-left font-normal rounded-lg border-gray-300 py-3 h-auto",
                        !formData.checkOut ? "text-gray-400" : "text-gray-900"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-5 w-5 text-gray-500" />
                      {formData.checkOut ? format(formData.checkOut, "PPP") : "Select check-out date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 rounded-lg border border-gray-200 shadow-md">
                    <Calendar
                      mode="single"
                      selected={formData.checkOut}
                      onSelect={(date) => handleInputChange("checkOut", date)}
                      initialFocus
                      disabled={(date) => date <= (formData.checkIn || new Date())}
                      className="pointer-events-auto rounded-lg"
                      classNames={{
                        cell: "data-[selected=true]:bg-red-600 data-[hover=true]:bg-red-100",
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="guests" className="text-sm font-medium text-gray-700">Number of Guests *</label>
              <Input
                id="guests"
                type="number"
                min="1"
                max="20"
                value={formData.guests}
                onChange={(e) => handleInputChange("guests", e.target.value)}
                required
                placeholder="Number of guests"
                className="rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500 transition-colors py-3"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="specialRequests" className="text-sm font-medium text-gray-700">Special Requests</label>
              <Textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                placeholder="Any special requirements or requests (dietary needs, accessibility, celebrations, etc.)"
                rows={4}
                className="rounded-lg border-gray-300 focus:border-red-500 focus:ring-red-500 transition-colors"
              />
            </div>

            <ModalFooter className="px-0 pt-4 pb-2">
              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full transition-colors shadow-md"
                size="lg"
              >
                Request Booking
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BookingModal;