import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/scss";

function SlideNextButton() {
  const swiper = useSwiper();

  return (
      <button className="slider-control next" onClick={() => swiper.slideNext()}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
          >
              <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
          </svg>
      </button>
  );
}

function SlidePrevButton() {
  const swiper = useSwiper();

  return (
      <button className="slider-control prev" onClick={() => swiper.slidePrev()}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
          >
              <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
          </svg>
      </button>
  );
}

function Photos(props) {
    return (
        <div className="photos">
            <Swiper spaceBetween={50} slidesPerView={1}>
                {props.photos.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={`${item.attributes.url}`} key={index} />
                        </SwiperSlide>
                    );
                })}
                <SlidePrevButton />
                <SlideNextButton />
            </Swiper>
        </div>
    );
}

export default Photos;
