import BannerSlider from "./BannerSlider";

const Banner = () => {
  const slides = [
    {
      url: "./bannerImg/img-1.jpg",
      title: "Shop new arrivals",
    },
    {
      url: "./bannerImg/img-2.jpg",
      title: "Shop your favorite t-shirt",
    },
    {
      url: "./bannerImg/img-3.jpg",
      title: "Free shipping on orders over 498 PHP",
    },
  ];

  return (
    <div className="banner-container">
      <BannerSlider slides={slides} />
    </div>
  );
};

export default Banner;
