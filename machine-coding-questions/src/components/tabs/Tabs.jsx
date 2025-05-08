"use client";

import React, { useState } from "react";
import { Profile } from "./Profile";
import { Interests } from "./Interests";
import { Setting } from "./Setting";

export const Tabs = () => {
  const [active, setActive] = useState(0);

  const [data, setData] = useState({
    name: "kamal",
    email: "kamal@gmail.com",
    age: 24,
    city: "noida",
    interests: ["coding", "javascript", "listen music"],
    theme: ["dark", "light"],
  });

  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Setting",
      component: Setting,
    },
  ];

  const handleActiveComponents = (index) => {
    setActive(index);
  };

  const handleSubmitData = () => {
    console.log(data);
  };

  const ActiveComponents = tabs[active].component;

  return (
    <div className="p-5">
      <div className="flex gap-2 ">
        {tabs.map((comp, index) => (
          <div
            className="border px-2 cursor-pointer"
            key={index}
            onClick={() => handleActiveComponents(index)}
          >
            {comp.name}
          </div>
        ))}
      </div>

      <div className="border p-4 min-h-60">
        <ActiveComponents data={data} setData={setData} />
      </div>
      <button
        className="px-2 py-1 rounded-md border"
        onClick={handleSubmitData}
      >
        Submit
      </button>
    </div>
  );
};
