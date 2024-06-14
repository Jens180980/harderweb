import Footer from "../Partials/Footer/Footer";
import { Header } from "../Partials/Header/Header";
import LikeMe from "../Partials/Likeme/LikeMe";
import { UnderConstruction } from "../Partials/UnderConstruction/UnderConstruction";
import Gallery from "../Partials/Gallery/Gallery";
import "./Work.css";

const Work = () => {
  return (
    <>
      <Header pageTitle="work" />
      <section className="work-wrap">
        <p className="work-heading">Gallery coming soon...</p>
        <Gallery />
        <div className="some">
          <a
            href="https://github.com/Jens180980"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          <a
            href="https://codepen.io/jens180980"
            target="_blank"
            rel="noreferrer"
          >
            codepen
          </a>
        </div>
        <LikeMe />
      </section>
      <Footer />
    </>
  );
};

export default Work;
