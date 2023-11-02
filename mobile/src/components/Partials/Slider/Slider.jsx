import SimpleImageSlider from "react-simple-image-slider";
import "./Slider.css";

const Slider = () => {
  const images = [
    { url: "images/1.jpg" },
    { url: "images/2.jpg" },
    { url: "images/3.jpg" },
    { url: "images/4.jpg" },
    { url: "images/5.jpg" },
    { url: "images/6.jpg" },
  ];
  return (
    <div>
      <SimpleImageSlider
        width="100%"
        height="auto"
        images={images}
        showBullets={true}
        showNavs={true}
      />
      <h2 className="under-way">Slider on its way...</h2>
    </div>
  );
};

export default Slider;
