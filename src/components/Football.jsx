import React from "react";
import Alianz from "../assets/images/allianz-arena-sunset.jpg";

const Football = () => {
  return (
    <section id="football">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-10 offset-lg-2 offset-md-2 offset-sm-1">
            <h2>Football in Germany</h2>
            <p>
              Football is the most popular sport in Germany with 57% of the
              population declaring interest in watching it. The German Football
              Association is the sport's national governing body, with 6.6
              million members (roughly eight percent of the population)
              organized in over 31,000 football clubs. There is a league system,
              with the Bundesliga, 2. Bundesliga and 3. Liga on top. The winner
              of the Bundesliga is crowned the German football champion.
              Additionally, there are national cup competitions, most notably
              the DFB-Pokal (German Cup) and DFL-Supercup (German Supercup).
            </p>
            <p>
              The Germany national football team has won four FIFA World Cups
              (1954, 1974, 1990, 2014), being the joint-second most successful
              nation in the tournament only surpassed by Brazil. It also holds
              three UEFA European Championships (1972, 1980, 1996), behind only
              Spain, and won the FIFA Confederations Cup in 2017.{" "}
            </p>
            <img
              src={Alianz}
              className=" img-fluid allianz"
              alt="Allianz Arena"
            />
            <p>
              Fifty-seven clubs have competed in the Bundesliga since its
              founding. Bayern Munich has won 32 of 61 titles, as well as eleven
              consecutive seasons between 2013 and 2023, which is a record for a
              Big Five league. The Bundesliga has also seen other champions,
              with Borussia Dortmund, Hamburger SV, Werder Bremen, Borussia
              Mönchengladbach, and VfB Stuttgart most prominent among them.
            </p>
            <p>
              The Bundesliga was founded in 1962 in Dortmund and the first
              season started in 1963-64. The structure and organisation of the
              Bundesliga, along with Germany's other football leagues, have
              undergone frequent changes. The Bundesliga was founded by the
              Deutscher Fußball-Bund (English: German Football Association), but
              is now operated by the Deutsche Fußball Liga (English: German
              Football League).{" "}
            </p>
            <p>
              <small> - by wikipedia </small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Football;
