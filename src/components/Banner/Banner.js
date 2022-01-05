import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="items-options mb-4 mt-2">
        <Link
          to={`/category/smartphones`}
          className="item-block text-decoration-none"
        >
          <div className="item-block-img" link>
            <img
              src="https://c4.wallpaperflare.com/wallpaper/535/789/206/new-smartphones-wallpaper-preview.jpg"
              alt="smartphones"
            />
          </div>
          <div className="item-block-content">
            <h3 className="text-light">Smartphones</h3>
          </div>
        </Link>

        <Link
          to={`/category/telefonos`}
          className="item-block text-decoration-none"
        >
          <div className="item-block-content">
            <h3 className="text-light">Telefonos</h3>
          </div>
          <div className="item-block-img">
            <img
              src="https://www.gannett-cdn.com/media/2019/07/13/USATODAY/usatsports/247WallSt.com-247WS-559997-old-phones.jpg?crop=1365,768,x0,y0&width=1365&height=768&format=pjpg&auto=webp"
              alt="Telefonos"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Banner;
