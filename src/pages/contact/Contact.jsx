import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send,
  Linkedin,
  Twitter,
  Instagram,
  Facebook
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubjectChange = (value) => {
    setFormData({
      ...formData,
      subject: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    

    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-AVEES",
      href: "tel:+15551234838",
      description: "Monday - Friday, 9 AM - 6 PM EST"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Message Us on WhatsApp",
      href: "https://wa.me/15551234838",
      description: "Quick responses during business hours"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@avees.com",
      href: "mailto:hello@avees.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Innovation Drive",
      description: "Tech City, TC 10101",
      href: "#map-section"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/avees", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/avees", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/avees", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/avees", label: "Facebook" }
  ];

  // Custom Card component
  const Card = ({ children, className = "", ...props }) => (
    <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`} {...props}>
      {children}
    </div>
  );

  const CardContent = ({ children, className = "" }) => (
    <div className={`p-6 ${className}`}>{children}</div>
  );

  // Custom Input component
  const Input = ({ className = "", ...props }) => (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );

  // Custom Label component
  const Label = ({ children, htmlFor, className = "" }) => (
    <label htmlFor={htmlFor} className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}>
      {children}
    </label>
  );

  // Custom Textarea component
  const Textarea = ({ className = "", ...props }) => (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );

  // Custom Select components
  const Select = ({ onValueChange, children, ...props }) => {
    const [value, setValue] = useState("");
    
    const handleChange = (e) => {
      const newValue = e.target.value;
      setValue(newValue);
      onValueChange(newValue);
    };
    
    return (
      <select 
        value={value} 
        onChange={handleChange}
        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      >
        {children}
      </select>
    );
  };

  const SelectTrigger = ({ children, className = "", ...props }) => (
    <div className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} {...props}>
      {children}
      <span>▼</span>
    </div>
  );

  const SelectValue = ({ placeholder }) => (
    <span className="text-muted-foreground">{placeholder}</span>
  );

  const SelectContent = ({ children }) => (
    <div className="relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
      {children}
    </div>
  );

  const SelectItem = ({ value, children }) => (
    <option value={value}>{children}</option>
  );

  // Custom Button component
  const Button = ({ children, className = "", ...props }) => (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-red-50 to-white-50 py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get in Touch with Avees
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We're here to answer your questions and discuss how we can help you succeed. 
            Choose your preferred way to connect.
          </p>
        </div>
      </section>

      {/* Primary Contact Methods */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full border border-red-600 flex items-center justify-center mb-6 mx-auto">

                      <Icon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <a
                      href={method.href}
                      className="text-red-600 font-medium text-lg block mb-2 transition-colors duration-200"
                    >
                      {method.content}
                    </a>
                    <p className="text-sm text-gray-600">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section id="map-section" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600 text-lg">Visit our office in the heart of Tech City</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Placeholder for Google Maps */}
            <div className="h-96 bg-gradient-to-br from-red-100 to-white-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  123 Innovation Drive
                </h3>
                <p className="text-gray-600">Tech City, TC 10101</p>
                <p className="text-sm text-gray-500 mt-4">
                  Interactive map will be integrated here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Work Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">
                    Subject *
                  </Label>
                  <Select onValueChange={handleSubjectChange} required>
                    <option value="">Please select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Proposal</option>
                    <option value="quote">Request a Quote</option>
                    <option value="support">Support</option>
                    <option value="career">Career Opportunities</option>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 h-12 bg-red-600 text-white font-medium transition-colors duration-200"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Us For More</h2>
          <p className="text-gray-600 text-lg mb-12">
            Stay connected and get the latest updates from Avees
          </p>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg  hover:text-white transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <Icon className="w-7 h-7 text-red-600" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;