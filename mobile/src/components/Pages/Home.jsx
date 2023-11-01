import { Header } from "../Partials/Header/Header";
import Footer from "../Partials/Footer/Footer";
import { AccordionBig } from "../Partials/AccordionBig/AccordionBig";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header pageTitle="Front Page" />
      <main className="home-main">
        <AccordionBig />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
