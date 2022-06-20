import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import "../../../styles/showroom/_slider.scss";

import { FreeMode, Thumbs } from "swiper";

export default function Slider(props: any) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        {props.data.images.map((image: any) => {
          return (
            <SwiperSlide>
              <img src={image.path} />
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
          <video id="vid2" src={props.data.pathVideo} autoPlay muted></video>
        </SwiperSlide>

        {/* <SwiperSlide>
          <img src="http://10.3.50.231/storage/otherImage_Een knap maar simpel werkje.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide> */}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        {props.data.images.map((image: any) => {
          return (
            <SwiperSlide>
              <img src={image.path} />
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
          <video id="vid" src={props.data.pathVideo} muted></video>
          {/* <video width="320" height="240">
                <source src={props.data.pathVideo} type="video/mp4"/>
            </video> */}
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="http://10.3.50.231/storage/mainImage_Een knap maar simpel werkje.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://10.3.50.231/storage/otherImage_Een knap maar simpel werkje.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
