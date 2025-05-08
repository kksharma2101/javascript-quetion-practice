import React from "react";

export const Setting = ({ data }) => {
  const { theme } = data;
  return (
    <div>
      {theme.map((them) => (
        <div className="flex gap-2 uppercase" key={them}>
          <input type="radio" name={them} />
          <span>{them}</span>
        </div>
      ))}
    </div>
  );
};
