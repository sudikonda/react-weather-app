import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, items }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item) => (
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">{item.title}</p>
            <img
              className="w-12 my-1"
            //   src="https://www.accuweather.com/images/weathericons/2.svg"
              src={iconUrlFromCode(item.icon)}
              alt="weathericons"
            />
            <p className="font-medium">{`${item.temp.toFixed()}º`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
