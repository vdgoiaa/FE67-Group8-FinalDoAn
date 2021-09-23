import React, { useEffect } from "react";
import Header from "../../Components/Layouts/Header/Header";
import Footer from "../../Components/Layouts/Footer/Footer";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/CircleRating/circle.css";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import { stringify } from "query-string";
import { useDispatch } from "react-redux";
import { getLichChieuMovieById } from "../../api/movies";
import moment from "moment";
import { StarFilled } from "@ant-design/icons";

const { TabPane } = Tabs;

const Detail = (props) => {
  const dispatch = useDispatch();

  const detailMovie = useSelector((state) => {
    return state.movie.detailMovie;
  });

  const movieId = { maPhim: props.match.params.id };

  const queryMovieId = stringify(movieId);

  useEffect(() => {
    dispatch(getLichChieuMovieById(queryMovieId));
  }, []);

  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${detailMovie.hinhAnh})`,
          height: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <CustomCard
          effectColor="#fff" // required
          // color="#14AEFF" // default color is white
          blur={15} // default blur value is 10px
          borderRadius={0} // default border radius value is 10px
          style={{ minHeight: "100vh" }}
        >
          <div className="flex flex-wrap lg:mt-36 md:mt-30 mt-56 m container items-center justify-center">
            <img src={detailMovie.hinhAnh} alt="" className="w-80 h-96" />
            <div className="lg:ml-28 md:ml-24 w-96">
              <h1 className="text-3xl">
                {moment(detailMovie.ngayKhoiChieu).format("DD-MM-YYYY")}
              </h1>
              <h1 className="text-3xl text-red-700">{detailMovie.tenPhim}</h1>
              <div style={{ color: "yellow", paddingBottom: "15px" }}>
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
              </div>
              {detailMovie.hot === true ? (
                <span className="mr-2 py-1 px-2 bg-red-500 rounded-lg text-xs title-font font-medium text-white mb-7 border-1">
                  Hot
                </span>
              ) : (
                ""
              )}
              {detailMovie.sapChieu === true ? (
                <span className="mr-2 py-1 px-2 bg-red-500 rounded-lg text-xs title-font font-medium text-white border-1">
                  Coming Soon
                </span>
              ) : (
                ""
              )}
              {detailMovie.dangChieu === true ? (
                <span className="py-1 px-2 bg-red-500 rounded-lg text-xs title-font font-medium text-white mb-7 border-1">
                  Now Showing
                </span>
              ) : (
                ""
              )}
              <h1 className="text-lg">{detailMovie.moTa}</h1>
              <div className="c100 p90 green">
                <span>90%</span>
                <div class="slice">
                  <div class="bar"></div>
                  <div class="fill"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container flex justify-center py-12">
          <iframe width="800" height="500" src={detailMovie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="container">
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab={<p className="text-black">Calendar</p>} key="1">
                <Tabs centered>
                  {detailMovie.heThongRapChieu?.map(
                    (heThongRapChieu, index) => {
                      return (
                        <TabPane
                          tab={
                            <div className="flex flex-col items-center justify-center">
                              <img
                                src={heThongRapChieu.logo}
                                width="60"
                                alt=""
                              />
                              <p className="text-black mt-2">
                                {heThongRapChieu.tenHeThongRap}
                              </p>
                            </div>
                          }
                          key={index}
                        >
                          {heThongRapChieu.cumRapChieu?.map(
                            (cumRapChieu, index) => {
                              return (
                                <div className="flex flex-wrap justify-center items-start">
                                  <div
                                    className="flex flex-wrap justify-center items-center mb-12 mr-6"
                                    key={index}
                                  >
                                    <h1 className="mr-4">
                                      {cumRapChieu.tenCumRap}
                                    </h1>
                                    <img
                                      src={cumRapChieu.hinhAnh}
                                      alt=""
                                      width="60"
                                    />
                                  </div>
                                  <div className="grid lg:grid-cols-3 md:col-cols-4 col-cols-1 mb-12 gap-4">
                                    {cumRapChieu.lichChieuPhim
                                      ?.slice(0, 10)
                                      .map((lichChieuPhim, index) => {
                                        return (
                                          <div
                                            className="text-black lg:col-span-1 md:col-span-2 col-span-1"
                                            key={index}
                                          >
                                            {moment(
                                              lichChieuPhim.ngayChieuGioChieu
                                            ).format("HH A-DD-MM-YYYY")}
                                          </div>
                                        );
                                      })}
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </TabPane>
                      );
                    }
                  )}
                </Tabs>
              </TabPane>
              <TabPane tab={<p className="text-black">Information</p>} key="2">
                Content of Tab Pane 2
              </TabPane>
            </Tabs>
          </div>
        </CustomCard>
      </div>
      <Footer />
    </div>
  );
};
export default Detail;
