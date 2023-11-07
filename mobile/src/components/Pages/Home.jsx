import { Header } from "../Partials/Header/Header";
import { AccordionBig } from "../Partials/AccordionBig/AccordionBig";
import "./Home.css";
import { MadeWith } from "../Partials/MadeWith/MadeWith";

const Home = () => {
  return (
    <div>
      <Header pageTitle="Front Page" />
      <main className="home-main">
        <AccordionBig />
      </main>
      <MadeWith />
    </div>
  );
};

export default Home;
