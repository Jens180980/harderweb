import "./AccordionBig.css";
import { AccordionBigItem } from "./AccordionBigItem";
import { AccordionData } from "./AccordionData";

export const AccordionBig = () => {
  return (
    <section className="accordion-big-wrap">
      {AccordionData.map(({ title, content, logo, url }) => {
        return (
          <AccordionBigItem
            title={title}
            content={content}
            logo={logo}
            url={url}
          />
        );
      })}
    </section>
  );
};
