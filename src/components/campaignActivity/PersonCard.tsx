import React from "react";

interface PersonCardProps {
  avatar: string;
  name?: string;
  role?: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ avatar, name, role }) => {
  return (
    <div className="bg-[rgba(244,246,248,1)] border flex w-[177px] flex-col items-stretch justify-center pl-4 pr-3 py-4 rounded-lg border-[rgba(219,225,234,0.7)] border-solid">
      <div className="flex w-full max-w-[149px] gap-[40px_61px] justify-between">
        <img
          src={avatar}
          className="aspect-[1] object-contain w-9 shrink-0 rounded-[50%]"
          alt={name || "User avatar"}
        />
        <div className="flex min-h-6 gap-0.5" />
      </div>
      {name && (
        <div className="w-full mt-3">
          <div className="text-[rgba(51,51,51,1)] text-sm font-medium">
            {name}
          </div>
          {role && (
            <div className="text-[rgba(68,68,68,1)] text-xs font-normal mt-1">
              {role}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PersonCard;
