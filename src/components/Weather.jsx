import React from "react";
import Umbrella from "../assets/images/umbrella-rain.jpg";

const Weather = () => {
  return (
    <section id="weather">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <h2>Weather in Germany</h2>
            <p>
              Most of Germany has a temperate climate, ranging from oceanic in
              the north and west to continental in the east and southeast.
              Winters range from the cold in the Southern Alps to cool and are
              generally overcast with limited precipitation, while summers can
              vary from hot and dry to cool and rainy. The northern regions have
              prevailing westerly winds that bring in moist air from the North
              Sea, moderating the temperature and increasing precipitation.
              Conversely, the southeast regions have more extreme temperatures.
            </p>
            <img
              className="img-fluid"
              src={Umbrella}
              alt="Rainy City Umbrella"
            />
            <p>
              From February 2019 - 2020, average monthly temperatures in Germany
              ranged from a low of 3.3 °C (37.9 °F) in January 2020 to a high of
              19.8 °C (67.6 °F) in June 2019. Average monthly precipitation
              ranged from 30 litres per square metre in February and April 2019
              to 125 litres per square metre in February 2020. Average monthly
              hours of sunshine ranged from 45 in November 2019 to 300 in June
              2019
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
