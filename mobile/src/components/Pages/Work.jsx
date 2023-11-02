import Footer from "../Partials/Footer/Footer";
import { Header } from "../Partials/Header/Header";
import LikeMe from "../Partials/Likeme/LikeMe";
import Slider from "../Partials/Slider/Slider";
import { UnderConstruction } from "../Partials/UnderConstruction/UnderConstruction";
import "./Work.css";

const Work = () => {
  return (
    <>
      <Header pageTitle="work" />
      <section className="work-wrap">
        <p className="work-heading">Touch image for more details</p>
        <Slider />
        <div className="some">
          <a href="#">github</a>
          <a href="#">codepen</a>
        </div>
        <LikeMe />
      </section>
      <Footer />
    </>
  );
};

export default Work;
