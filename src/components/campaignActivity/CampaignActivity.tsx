
import React from "react";
import ReelsSection from "./ReelsSection";
import ConversationSection from "./ConversationSection";
import PeopleSection from "./PeopleSection";

const CampaignActivity: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white relative flex gap-[40px_46px] p-5 rounded-[10px] max-w-[1300px] w-full overflow-x-auto">
        <ReelsSection />

        <div className="z-0 flex min-w-60 flex-row gap-5 max-md:flex-wrap max-md:max-w-full">
          <ConversationSection />
          <PeopleSection />
        </div>

        <div className="bg-[rgba(242,246,250,1)] absolute z-0 flex w-1 shrink-0 h-[93px] translate-x-[0%] -translate-y-2/4 rounded-[100px] right-2 top-2/4" />
      </div>
    </div>
  );
};

export default CampaignActivity;

