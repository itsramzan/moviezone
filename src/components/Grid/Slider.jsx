import React from "react";
import { useGetMoviesQuery } from "../../features/movies/moviesApi";
import { Link } from "react-router-dom";
import { Pagination, A11y, Autoplay, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/keyboard";

const Slider = () => {
  const { isFetching, data, isError } = useGetMoviesQuery({
    type: "now_playing",
    page: 1,
  });

  // Decide what to render
  let content = null;

  if (!isFetching && !isError && data?.results?.length > 0) {
    const { results } = data;
    const sliderData = results.slice(0, 5);

    content = (
      <Swiper
        modules={[Pagination, A11y, Autoplay, Keyboard]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        centeredSlides={true}
        loop={true}
        slidesPerGroup={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        keyboard
      >
        {sliderData?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/movies/${item.id}`} className="relative">
              <img
                src={`http://image.tmdb.org/t/p/w780/${item.backdrop_path}`}
                alt=""
              />
              <p className="absolute bottom-2 left-2 bg-blue-700 px-2 py-1 rounded-md text-xl text-white font-bold line-clamp-1">
                {item.original_title}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return <div>{content}</div>;
};

export default Slider;
