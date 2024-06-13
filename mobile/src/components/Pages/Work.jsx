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
        <p className="work-heading">Gallery coming soon...</p>
        <div className="some">
          <a href="https://github.com/Jens180980">github</a>
          <a href="https://codepen.io/jens180980">codepen</a>
        </div>
        <LikeMe />
      </section>
      <Footer />
    </>
  );
};

export default Work;
