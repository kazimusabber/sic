"use client";
import Counter from "./Counter";
import FeedBackSlider from "./FeedBackSlider";
import Slider from "react-slick";
import { sliderData } from "@/data/data";
import Image from "next/image";

const FeedBack = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
        },
      },
    ],
    customPaging: (i) => (
      <button>
        <Image src={sliderData[i].user.img} alt="user" height={60} width={60} />
      </button>
    ),
  };
  return (
    <section className="feedback py-8 py-lg-9 py-xxl-10">
      <div className="container">
        <div className="row">
          <Counter />
          <div className="col-lg-10 col-12">
            <div className="section-header">
              <h2 className="text-white">Clients Feedbacks 😍</h2>
            </div>

            <Slider {...settings} className="feedback-slider">
              {sliderData.map((slider) => (
                <FeedBackSlider key={slider.id} {...slider} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
