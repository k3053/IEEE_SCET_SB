import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/Membership/Herosection';
import WhyJoinSection from '../components/Membership/WhyJoin';
import FundingSection from '../components/Membership/Funding';
import ResourcesSection from '../components/Membership/Resorce';
import LeadershipExposureSection from '../components/Membership/leadaExop';
import HowToJoinSection from '../components/Membership/Hjoin';
import FinalCTASection from '../components/Membership/cta';

const MembershipDetails = () => {
  return (
    <div className="container mx-auto py-16 px-6 md:px-20">
      {/* <h1 className="text-3xl font-bold">IEEE Membership Details</h1>
      <p className="mt-4">Join IEEE SCET SB to participate in various events, get access to resources, and grow your professional network.</p>
      <ul className="list-disc ml-10 mt-4">
        <li>Benefits of IEEE Membership</li>
        <li>How to Join</li>
      </ul> */}
      <HeroSection />
      <WhyJoinSection />
      <FundingSection />
      <ResourcesSection />
      <LeadershipExposureSection />
      <HowToJoinSection />
      <FinalCTASection />

    </div>
  );
};

export default MembershipDetails;
