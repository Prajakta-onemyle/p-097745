import React from "react";

const ConversationSection: React.FC = () => {
  return (
    <div className="flex min-w-60 flex-col items-stretch text-[rgba(68,68,68,1)] w-[600px] max-md:max-w-full">
      <h2 className="gap-2.5 text-xl font-bold whitespace-nowrap pb-1.5">
        Conversation
      </h2>
      <div className="max-w-full w-[600px] text-base font-medium leading-loose mt-[17px] rounded-[0px_0px_0px_0px]">
        <div className="bg-[rgba(254,253,250,1)] border z-10 flex flex-col items-center justify-center px-[60px] py-[280px] rounded-lg border-[rgba(246,239,219,1)] border-solid max-md:max-w-full max-md:px-5 max-md:py-[100px]">
          <div className="w-[151px] max-w-full -mb-14 max-md:mb-2.5">
            No Conversation yet
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationSection;
