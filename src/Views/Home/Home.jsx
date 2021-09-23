import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getInforCinemaSystem } from "../../api/cinema";
import { getMovieList } from "../../api/movies";
import Header from "../../Components/Layouts/Header/Header";
import HomeCarousel from "../../Components/Layouts/HomeCarousel/HomeCarousel";
import { MovieSlick } from "../../Components/MovieList/MovieSlick/MovieSlick";
import HomeMenu from "./HomeMenu/HomeMenu";
import Footer from "../../Components/Layouts/Footer/Footer";
import Event from "../../Components/Mini Layouts/Event";
import Review from "../../Components/Mini Layouts/Review";
import News from "../../Components/Mini Layouts/News";

const Home = (props) => {
  const movieList = useSelector((state) => {
    return state.movie.movieListFilter;
  });

  const heThongRap = useSelector((state) => {
    return state.cinema.heThongRap;
  });

  const dispatch = useDispatch();

  const [tab,setTab]=useState(1);

  const handleTabReview=()=>{
    setTab(2);
  }

  const handleTabEvent=()=>{
    setTab(1);
  }

  const handleTabNews=()=>{
    setTab(3);
  }

  useEffect(() => {
    dispatch(getMovieList());
    dispatch(getInforCinemaSystem());
  }, []);


  return (
    <div>
      <Header />
      <HomeCarousel />
      <div className="container">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <MovieSlick movieList={movieList} />
          </div>
        </section>
        <HomeMenu heThongRap={heThongRap} />
        <div className="flex justify-center p-12">
        <button className="bg-red-500 rounded-lg pt-2 pb-2 pr-4 pl-4 mr-8 text-white transform hover:shadow-lg hover:-translate-y-1 hover:scale-110 duration-150" onClick={handleTabEvent}>Event</button>
        <button className="bg-red-500 rounded-lg pt-2 pb-2 pr-4 pl-4 mr-8 text-white transform hover:shadow-lg hover:-translate-y-1 hover:scale-110 duration-150" onClick={handleTabReview}>Review</button>
        <button className="bg-red-500 rounded-lg pt-2 pb-2 pr-4 pl-4 mr-8 text-white transform hover:shadow-lg hover:-translate-y-1 hover:scale-110 duration-150" onClick={handleTabNews}>News</button>
        </div>
        {tab===1 ? <Event/> : ""}
        {tab===2 ? <Review/> : ""}
        {tab===3 ? <News/> : ""}
      </div>
      <Footer />
    </div>
  );
};
export default Home;
