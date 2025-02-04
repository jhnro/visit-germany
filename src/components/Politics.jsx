import React from "react";
import Frank from "../assets/images/Frank-Walter-Steinmeier.jpg";
import Olaf from "../assets/images/Olaf-Scholz.jpg";

const Politics = () => {
  return (
    <section id="politics">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h2 id="poli">Politics</h2>
            <p>
              Germany is a federal, parliamentary, representative democratic
              republic. Federal legislative power is vested in the parliament
              consisting of the Bundestag (Federal Diet) and Bundesrat (Federal
              Council), which together form the legislative body. The Bundestag
              is elected through direct elections using the mixed-member
              proportional representation system. The members of the Bundesrat
              represent and are appointed by the governments of the sixteen
              federated states. The German political system operates under a
              framework laid out in the 1949 constitution known as the
              Grundgesetz (Basic Law). Amendments generally require a two-thirds
              majority of both the Bundestag and the Bundesrat; the fundamental
              principles of the constitution, as expressed in the articles
              guaranteeing human dignity, the separation of powers, the federal
              structure, and the rule of law, are valid in perpetuity.
            </p>
            <p>
              The president, currently Frank-Walter Steinmeier, is the head of
              state and invested primarily with representative responsibilities
              and powers. He is elected by the Bundesversammlung (federal
              convention), an institution consisting of the members of the
              Bundestag and an equal number of state delegates.
            </p>

            <div className="power">
              <div className="row">
                <div className="col-sm-8">
                  <p>
                    The second-highest official in the German order of
                    precedence is the Bundestagspräsident (President of the
                    Bundestag), who is elected by the Bundestag and responsible
                    for overseeing the daily sessions of the body. The
                    third-highest official and the head of government is the
                    chancellor, who is appointed by the Bundespräsident after
                    being elected by the party or coalition with the most seats
                    in the Bundestag. The chancellor, currently Olaf Scholz, is
                    the head of government and exercises executive power through
                    his Cabinet. Since 1949, the party system has been dominated
                    by the Christian Democratic Union and the Social Democratic
                    Party of Germany. So far every chancellor has been a member
                    of one of these parties. However, the smaller liberal Free
                    Democratic Party and the Alliance 90/The Greens have also
                    been junior partners in coalition governments. Since 2007,
                    the democratic socialist party The Left has been a staple in
                    the German Bundestag, though they have never been part of
                    the federal government. In the 2017 German federal election,
                    the right-wing populist Alternative for Germany gained
                    enough votes to attain representation in the parliament for
                    the first time.
                  </p>
                </div>
                <div className="col-sm-2">
                  <img
                    src={Frank}
                    className="img-fluid frank"
                    alt="Frank Walter-Steinmeier"
                  />
                  <p>
                    <small>Frank Walter-Steinmeier</small>
                  </p>
                </div>
                <div className="col-sm-2">
                  <img
                    src={Olaf}
                    className="img-fluid olaf"
                    alt="Olaf Scholz"
                  />
                  <p>
                    <small>Olaf Scholz</small>
                  </p>
                </div>
              </div>
            </div>

            <p>
              Germany is a federation and comprises sixteen constituent states
              which are collectively referred to as Länder. Each state (Land)
              has its own constitution, and is largely autonomous in regard to
              its internal organisation. As of 2017 Germany is divided into 401
              districts (Kreise) at a municipal level; these consist of 294
              rural districts and 107 urban districts.
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

export default Politics;
