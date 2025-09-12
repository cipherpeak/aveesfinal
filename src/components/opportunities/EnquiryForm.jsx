import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

export const EnquiryForm = ({ onSubmit, isSubmitting = false }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    interest: '',
    message: '',
    file: null
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select your area of interest';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your background and vision';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const interestOptions = [
    { value: 'franchise', label: 'Franchise Opportunities' },
    { value: 'distribution', label: 'Distribution Partnership' },
    { value: 'export', label: 'Export Enquiries' },
    { value: 'strategic', label: 'Strategic Collaboration' },
    { value: 'other', label: 'Other' }
  ];

  // Custom Card component
  const Card = ({ children, className = "" }) => (
    <div className={`rounded-lg  bg-white shadow-lg ${className}`}>
      {children}
    </div>
  );

  const CardHeader = ({ children, className = "" }) => (
    <div className={`border-b p-6 ${className}`}>
      {children}
    </div>
  );

  const CardTitle = ({ children, className = "" }) => (
    <h3 className={`text-2xl font-semibold ${className}`}>
      {children}
    </h3>
  );

  const CardContent = ({ children, className = "" }) => (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );

  // Custom Input component
  const Input = ({ id, type = "text", value, onChange, placeholder, className = "" }) => (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    />
  );

  // Custom Label component
  const Label = ({ htmlFor, children, className = "" }) => (
    <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 ${className}`}>
      {children}
    </label>
  );

  // Custom Textarea component
  const Textarea = ({ id, value, onChange, placeholder, rows = 3, className = "" }) => (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    />
  );

  // Custom Select components
  const Select = ({ value, onValueChange, children }) => {
    const handleChange = (e) => {
      onValueChange(e.target.value);
    };

    return (
      <select
        value={value}
        onChange={handleChange}
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {children}
      </select>
    );
  };

  const SelectTrigger = ({ children, className = "" }) => (
    <div className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm ${className}`}>
      {children}
    </div>
  );

  const SelectValue = ({ placeholder }) => (
    <span className="text-gray-500">{placeholder}</span>
  );

  const SelectContent = ({ children }) => (
    <div className="absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white shadow-md">
      {children}
    </div>
  );

  const SelectItem = ({ value, children }) => (
    <option value={value}>{children}</option>
  );

  // Custom Button component
  const Button = ({ type = "button", variant = "default", size = "default", children, disabled = false, className = "", onClick }) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variantClasses = {
      default: "bg-red-600 text-white ",
      success: "bg-red-600 text-white "
    };

    const sizeClasses = {
      default: "h-10 py-2 px-4",
      lg: "h-12 px-8 text-base"
    };

    return (
      <button
        type={type}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  // Custom FileUpload component
  const FileUpload = ({ onFileSelect, selectedFile, placeholder }) => {
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        onFileSelect(file);
      }
    };

    return (
      <div className="flex items-center gap-4">
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-gray-400">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="mb-2 text-sm text-gray-500">{placeholder}</p>
          </div>
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
        {selectedFile && (
          <div className="text-sm text-gray-600">
            Selected: {selectedFile.name}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="enquiry" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Express Your Interest
          </h2>
          <p className="text-xl text-gray-600">
            Take the first step towards a successful partnership with Avees
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="">
            <CardTitle className="text-center text-gray-900">
              Business Opportunity Application
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => updateFormData('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    className={errors.fullName ? 'border-red-500' : ''}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-600">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-sm font-medium">
                    Company Name
                  </Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => updateFormData('companyName', e.target.value)}
                    placeholder="Your company name (optional)"
                  />
                </div>
              </div>

              {/* Interest Selection */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  Area of Interest *
                </Label>
                <Select
                  value={formData.interest}
                  onValueChange={(value) => updateFormData('interest', value)}
                >
                  <option value="">--- Select Your Area of Interest ---</option>
                  {interestOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
                {errors.interest && (
                  <p className="text-sm text-red-600">{errors.interest}</p>
                )}
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  Upload Your Resume/Business Profile
                </Label>
                <FileUpload
                  onFileSelect={(file) => updateFormData('file', file)}
                  selectedFile={formData.file}
                  placeholder="Upload Your Resume/Business Profile (PDF, DOC, DOCX, max 5MB)"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Tell us about your background and vision *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => updateFormData('message', e.target.value)}
                  placeholder="Please describe your business background, experience, and your vision for this partnership opportunity..."
                  rows={5}
                  className={errors.message ? 'border-red-500' : ''}
                />
                {errors.message && (
                  <p className="text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="success"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Submitting Application...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};