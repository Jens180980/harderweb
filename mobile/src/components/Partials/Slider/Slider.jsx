import { useSwipeable } from "react-swipeable";
import { useState, useEffect } from "react";
import Slide from "./Slide";
import "./Slider.css";
import data from "../../Data/meet.json";

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
        {data.fields.map((field) =>
          field.id == scroll ? (
            <Slide key={field.id} title={field.title} content={field.content} />
          ) : null
        )}
      </div>
      <div
        style={{ marginLeft: `${scroll}rem` }}
        className="slider-nav"
        {...handlers}
      >
        <p className={`${scroll === 8 ? "is-active" : null}`}>Background</p>
        <p className={`${scroll === -2 ? "is-active" : null}`}>Philosophy</p>
        <p className={`${scroll === -12 ? "is-active" : null}`}>Education</p>
        <p className={`${scroll === -22 ? "is-active" : null}`}>
          WorkExperience
        </p>
      </div>
    </div>
  );
};

export default Slider;
