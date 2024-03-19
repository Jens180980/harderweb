import { useSwipeable } from "react-swipeable";
import { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  const [scroll, setScroll] = useState(-2);

  useEffect(() => {
    console.log("re-rendered page");
  }, [scroll]);

  const handlers = useSwipeable({
    onSwiped: (e) => {
      if (e.dir == "Left") {
        setScroll(scroll - 10);
        console.log("User swiped left", scroll);
      }
      if (e.dir == "Right") {
        setScroll(scroll + 10);
        console.log("User swiped right", scroll);
      }
    },
  });

  return (
    <div className="outer-wrap">
      <div className="slider-wrapper">
        <div className="slide slide-one">
          <h2>Philosophy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            temporibus quaerat, deserunt non quia dolorem soluta magnam
            similique, odio cupiditate sed quasi molestias corporis, quod
            blanditiis. Eligendi minima accusamus veritatis blanditiis aliquid
            natus vel, laboriosam rem sequi voluptatibus fugiat reiciendis
            explicabo optio, quae iusto velit?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel dolore
            deleniti, quam magni, rerum voluptas, illo nihil quia cupiditate
            maiores excepturi sint delectus aliquam officiis molestiae? Eaque,
            sapiente aliquam aperiam non exercitationem cumque quod velit
            temporibus facilis ea iure pariatur veritatis porro, vel libero, qui
            atque?
          </p>
        </div>
      </div>
      <div
        style={{ marginLeft: `${scroll}rem` }}
        className="slider-nav"
        {...handlers}
      >
        <p>Background</p>
        <p className="is-active">Philosophy</p>
        <p>Education</p>
        <p>WorkExperience</p>
      </div>
    </div>
  );
};

export default Slider;
