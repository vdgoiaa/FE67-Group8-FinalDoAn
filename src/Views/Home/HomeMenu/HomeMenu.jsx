import { Tabs } from "antd";
import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;

const HomeMenu = (props) => {
 
  const renderHeThongRap = () => {
    // he thong rap
    return props.heThongRap.map((heThongRap, index) => {
      return (
        <TabPane tab={<img src={heThongRap.logo} width="60" alt="" />} key={index}>
          <Tabs tabPosition="left">
            {/* cụm rạp trong hệ thống rạp */}
            {heThongRap.lstCumRap.slice(0,8).map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="flex items-center justify-center">
                      <img src={heThongRap.logo} width="50" alt="" />
                      <div className="ml-3 flex flex-col">
                      <div>{cumRap.tenCumRap}</div>
                      <div>{cumRap.diaChi.substr(0,20) + '...'}</div>
                      <NavLink to="/signin" className="text-red-500 hover:text-red-500">Chi Tiết</NavLink>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {cumRap.danhSachPhim.slice(0,6).map((phim,index)=>{
                    return(
                      <div>
                        <div className="my-3 flex">
                          <img src={phim.hinhAnh} className="max-h-32 max-w-xs h-36 w-36" alt="" onError={(e)=>{e.target.onerror = null; e.target.src="https://picsum.photos/seed/picsum/36/36"}} />
                          <div>
                            <h1 className="text-xl text-black ml-5">{phim.tenPhim}</h1>
                            <h1 className="text-sm text-black ml-5">{cumRap.diaChi}</h1>
                            <div className="grid grid-cols-6 gap-4 ml-5">
                            {/* phim trong hệ thống cụm rạp */}
                            {phim.lstLichChieuTheoPhim.slice(0,24).map((lichChieu,index)=>{
                              return(
                                <span className="text-red-500 text-xl">
                                {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                                </span>
                              )
                            })}
                            </div>
                          </div>
                        </div>
                        <hr />
                     </div>
                    )
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <div className="ml-8">
      <div className="text-center mb-10">
      <span className="text-2xl bg-red-500 p-2 rounded-lg text-white">Movie Calendar</span>
      </div>
      <Tabs tabPosition="left">{renderHeThongRap()}</Tabs>
    </div>
  );
};
export default React.memo(HomeMenu);
