import React from "react";

const ReelsSection: React.FC = () => {
  return (
    <div className="z-0 min-w-60 w-[430px] max-md:max-w-full">
      <div className="w-[346px] max-w-full">
        <div className="flex w-full items-center gap-[30px] text-base text-[rgba(68,68,68,1)] whitespace-nowrap">
          <div className="self-stretch font-bold my-auto">Reels</div>
          <div className="self-stretch gap-2.5 font-medium w-[100px] my-auto">
            Content
          </div>
        </div>
        <div className="flex h-0 flex-col mt-[9px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e380b764df4f4501bf7b553657deaca9/62e488779618f479662c689dda8738f273306a64?placeholderIfAbsent=true"
            className="object-contain w-[29px]"
            alt="Indicator"
          />
        </div>
      </div>
      <div className="flex w-full items-stretch gap-6 mt-3 max-md:max-w-full">
        <div className="min-w-60 w-[350px] rounded-[0px_0px_0px_0px]">
          <div className="flex flex-col shadow-[0px_0px_19px_5px_rgba(0,0,0,0.12)] relative aspect-[0.517] w-full gap-5 justify-between pt-[617px] pb-4 px-4 rounded-[10px] max-md:pt-[100px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e380b764df4f4501bf7b553657deaca9/f3119d91f4513ad1e22db61306baecc4c6be0e9d?placeholderIfAbsent=true"
              className="absolute h-full w-full object-cover inset-0"
              alt="Reel preview"
            />
            <div className="relative flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e380b764df4f4501bf7b553657deaca9/44e4940bec6db52851b4355e1ea961b7c6262f7b?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-11 self-stretch shrink-0 my-auto rounded-[100px]"
                alt="Creator avatar"
              />
              <div className="self-stretch flex flex-col items-stretch justify-center my-auto">
                <div className="text-white text-base font-semibold">
                  Santi Cazorla
                </div>
                <div className="text-[rgba(220,214,214,1)] text-xs font-normal mt-1">
                  Content creator
                </div>
              </div>
            </div>
            <div className="relative bg-[rgba(82,81,77,1)] flex min-h-10 items-center gap-2.5 w-10 h-10 mt-1 p-3 rounded-[20px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e380b764df4f4501bf7b553657deaca9/0d049f9ab9f9c41404249e1ff180a27aed821c39?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch my-auto"
                alt="Play button"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-14 max-md:hidden">
          <div className="flex w-[55px] flex-col items-center rounded-[100px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e380b764df4f4501bf7b553657deaca9/68d440a774530d9d744a71916aa7cddd0d3de940?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-full rounded-[0px_0px_0px_0px]"
              alt="Control icon 1"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e380b764df4f4501bf7b553657deaca9/8fb5cdd886889e48909edb0d06a91628bffd0ebe?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-full mt-2.5 rounded-[0px_0px_0px_0px]"
              alt="Control icon 2"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e380b764df4f4501bf7b553657deaca9/4dfce8d60e075daa3a96589bf3e8c0b612219b2f?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-full mt-2.5 rounded-[0px_0px_0px_0px]"
              alt="Control icon 3"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e380b764df4f4501bf7b553657deaca9/e0f9c92f7d83f9b38826e76a801645008cc71301?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-full mt-2.5 rounded-[0px_0px_0px_0px]"
              alt="Control icon 4"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e380b764df4f4501bf7b553657deaca9/2fce53b7d17290b02b777f914a64c1e9b6ea4384?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-full mt-2.5 rounded-[0px_0px_0px_0px]"
              alt="Control icon 5"
            />
          </div>
          <div className="flex w-14 flex-col items-center mt-[306px] max-md:mt-10">
            <div className="flex w-full flex-col items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/e380b764df4f4501bf7b553657deaca9/8e7fb5fc92a693483ffa945a2e1c9f74b485aee3?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-full rounded-[0px_0px_0px_0px]"
                alt="Bottom control"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelsSection;
