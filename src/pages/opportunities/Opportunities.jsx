import React, { useState } from 'react';
import { ConfirmationModal } from '../../components/opportunities/ConfirmationModal';
import { EnquiryForm } from '../../components/opportunities/EnquiryForm';
import { TrustSection } from '../../components/opportunities/TrustSection';
import { OpportunityOverview } from '../../components/opportunities/OpportunityOverview';
import { HeroSection } from '../../components/opportunities/HeroSection';

const BusinessOpportunity = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleExploreClick = () => {
    scrollToSection('overview');
  };

  const handleFormSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success modal
      setShowConfirmation(true);
      

      
    } catch (error) {
      console.log("error");
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onExploreClick={handleExploreClick} />
      
      <OpportunityOverview />
      
      <EnquiryForm
        onSubmit={handleFormSubmit}
        isSubmitting={isSubmitting}
      />
      
      <TrustSection />
      
      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
      />
    </div>
  );
};

export default BusinessOpportunity;