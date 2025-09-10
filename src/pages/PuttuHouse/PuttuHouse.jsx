import React from 'react'
import HeroSection from '../../components/puttuhouse/HeroSection'
import StorySection from '../../components/puttuhouse/StorySection'
import MenuHighlights from '../../components/puttuhouse/MenuHighlights'
import BranchCards from '../../components/puttuhouse/BranchCards'
import RetailIntegration from '../../components/puttuhouse/RetailIntegration'
import Testimonials from '../../components/puttuhouse/Testimonials'
import FinalCTA from '../../components/puttuhouse/FinalCTA'

function PuttuHouse() {
  return (
    <div>
      <HeroSection />
      <StorySection/>
      <MenuHighlights/>
      <BranchCards/>
      <RetailIntegration/>
      <Testimonials/>
      <FinalCTA />
    </div>
  )
}

export default PuttuHouse