import React from "react";
import sausage from "../assets/images/sausage.png";
import pretzel from "../assets/images/pretzel.png";
import beer from "../assets/images/beer.png";

const Icons = () => {
  return (
    <section id="icons">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <img
              className="sausage"
              src={sausage}
              width="25%"
              alt="sausage icon"
            />
            <h2 className="leadtitle">Sausages</h2>
            <p>
              Bratwurst is a type of German sausage made from pork or, less
              commonly, beef or veal. The name is derived from the Old High
              German Brätwurst, from brät-, finely chopped meat, and Wurst,
              sausage, although in modern German it is often associated with the
              verb braten, to pan fry or roast. Beef and veal are usually
              incorporated amongst a blend often including pork. Beef or veal is
              usual in halal and kosher Bratwurst sausages, which never include
              pork for religious reasons.
            </p>
          </div>
          <div className="col-sm-4">
            <img
              className="pretzel"
              src={pretzel}
              width="25%"
              alt="pretzel icon"
            />
            <h2 className="leadtitle">Pretzel</h2>
            <p>
              A pretzel is a type of baked pastry made from dough that is
              commonly shaped into a knot. The traditional pretzel shape is a
              distinctive symmetrical form, with the ends of a long strip of
              dough intertwined and then twisted back onto itself in a
              particular way (a pretzel loop or pretzel bow). Today, pretzels
              come in various shapes, textures, and colors, but the original
              soft pretzel is still one of the most common pretzel types to
              date.
            </p>
          </div>
          <div className="col-sm-4">
            <img className="beer" src={beer} width="25%" alt="beer icon" />
            <h2 className="leadtitle">Beer</h2>
            <p>
              Beer is a major part of German culture. Only water, hops, yeast
              and malt are permitted as ingredients in its production. Beers not
              exclusively using barley-malt, such as wheat beer, must be
              top-fermented. In 2020, Germany ranked third in Europe in terms of
              per-capita beer consumption, trailing behind the Czech Republic
              and Austria. The traditional serving of beer, known as a Kranz
              (wreath), is typically carried by a server ("Köbes") and contains
              traditional Stange glasses and, in the center, larger modern
              glasses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Icons;
