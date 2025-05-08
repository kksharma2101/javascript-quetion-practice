import React from "react";

export const Profile = ({ data, setData }) => {
  const { name, email, age, city } = data;

  const handleDataChange = (e, item) => {
    setData((prev) => ({
      ...prev,
      [item]: e.target.value,
    }));
  };

  return (
    <div className="flex justify-start flex-col gap-5">
      <div className="">
        <label className="flex flex-col">
          <span>Name:</span>
          <input
            type="text"
            value={name}
            className="border p-1 rounded-md max-w-sm"
            onChange={(e) => handleDataChange(e, "name")}
          />
        </label>
      </div>
      <div className="">
        <label className="flex flex-col">
          <span>Email:</span>
          <input
            type="email"
            value={email}
            className="border p-1 rounded-md max-w-sm"
            onChange={(e) => handleDataChange(e, "email")}
          />
        </label>
      </div>
      <div className="">
        <label className="flex flex-col">
          <span>Age:</span>
          <input
            type="number"
            value={age}
            className="border p-1 rounded-md max-w-sm"
            onChange={(e) => handleDataChange(e, "age")}
          />
        </label>
      </div>
      <div className="">
        <label className="flex flex-col">
          <span>City:</span>
          <input
            type="text"
            value={city}
            className="border p-1 rounded-md max-w-sm"
            onChange={(e) => handleDataChange(e, "city")}
          />
        </label>
      </div>
    </div>
  );
};
