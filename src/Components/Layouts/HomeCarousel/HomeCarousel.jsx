import { Carousel } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarousel } from "../../../api/movies";
import "./carousel.css";

const HomeCarousel = () => {
  const dispatch = useDispatch();

  const banner = useSelector((state) => {
    return state.movie.banner;
  });

  useEffect(() => {
    dispatch(getCarousel());
  }, []);

  return (
    <div>
      <Carousel effect="fade" dotPosition="bottom" className="relative pt-24" autoplay>
        {banner.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="carousel"
                style={{
                  backgroundImage: `url(${item.hinhAnh})`,
                }}
              >
                <img
                  className="w-screen h-screen opacity-0"
                  src={item.hinhAnh}
                  alt={item.maPhim}
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default HomeCarousel;
