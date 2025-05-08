import React from "react";

export const Interests = ({ data, setData }) => {
  const { interests } = data;

  const handleDataChange = (e, item) => {
    setData((prev) => ({
      ...prev,
      [item]: e.target,
    }));
    // console.log(e.target.value);
  };

  return (
    <div>
      <div className="">
        {interests.map((int) => (
          <div className="flex gap-2" key={int}>
            {/* <div> */}
            <input
              type="checkbox"
            //   name="coding"
              value={int}
              //   checked={interests.includes("coding")}
              onChange={(e) => handleDataChange(e, int)}
            />
            <label className="uppercase">{int}</label>
            {/* </div>
          <div>
            <input
              type="checkbox"
              name="javascript"
              checked={interests.includes("javascript")}
              //   onChange={(e) => handleDataChange(e, int)}
            />
            <label className="uppercase">javascript</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="listen music"
              checked={interests.includes("listen music")}
              //   onChange={(e) => handleDataChange(e, int)}
            />
            <label className="uppercase">listen music</label>
          </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
