
import React from "react";
import PersonCard from "./PersonCard";

const PeopleSection: React.FC = () => {
  const people = [
    {
      id: 1,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/e380b764df4f4501bf7b553657deaca9/0c71d01419ccbca7103a83ee8b79ea80e9606b2e?placeholderIfAbsent=true",
      name: "Darlene Robertson",
      role: "Video Creator",
    },
    {
      id: 2,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/e380b764df4f4501bf7b553657deaca9/3b3a7c1ce320346c6e0805ed1beebb420c864390?placeholderIfAbsent=true",
      name: "Jerome Bell",
      role: "Client",
    },
    {
      id: 3,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/e380b764df4f4501bf7b553657deaca9/d474101aa55e62df0981ea66719b83ba8209a69e?placeholderIfAbsent=true",
      name: "Robert Fox",
      role: "Admin 2",
    },
    {
      id: 4,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/e380b764df4f4501bf7b553657deaca9/e6d17ec15a386f8e2c415da175aa41b4f2e90c53?placeholderIfAbsent=true",
      name: "Kristin Watson",
      role: "Admin 3",
    },
    {
      id: 5,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/e380b764df4f4501bf7b553657deaca9/f21404242bee4c1f4a311e3f0b7f45e959e9df9f?placeholderIfAbsent=true",
      name: "Marvin McKinney",
      role: "Admin 3",
    },
    {
      id: 6,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/e380b764df4f4501bf7b553657deaca9/abcd8f883f0ee6080af453b35811f868fe45f554?placeholderIfAbsent=true",
    },
  ];

  return (
    <div className="min-h-[724px] w-[177px]">
      <div className="flex w-full items-center gap-[40px_63px] text-base text-[rgba(68,68,68,1)] font-bold leading-loose justify-between">
        <div className="self-stretch gap-2.5 my-auto py-1.5">People (6)</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/e380b764df4f4501bf7b553657deaca9/f758ce141271cd1d6721395168bafa50d2b9a922?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[35px] self-stretch shrink-0 my-auto rounded-[0px_0px_0px_0px]"
          alt="People icon"
        />
      </div>
      <div className="flex h-[676px] w-[177px] flex-col overflow-hidden items-center mt-2.5 p-px">
        {people.map((person) => (
          <div key={person.id} className={person.id > 1 ? "mt-3 w-full" : "w-full"}>
            <PersonCard
              avatar={person.avatar}
              name={person.name}
              role={person.role}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleSection;
