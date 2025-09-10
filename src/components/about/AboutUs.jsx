import AboutHero from "./AboutHero";
import AboutIntro from "./AboutIntro";
import FamilyLeadership from "./FamilyLeadership";
import VisionMission from "./VisionMission";
import WhatSetsUsApart from "./WhatSetsUsApart";
import { TimelineDemo } from '../about/Timeline'
export default function AboutUs() {


  return (
<>

      <AboutHero />
      <AboutIntro/>
      <TimelineDemo/>
      <VisionMission />
      <FamilyLeadership />
      <WhatSetsUsApart />

</>
  );
}