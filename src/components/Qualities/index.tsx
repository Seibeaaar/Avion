import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Qualities.styles.scss";
import qualities from "src/constants/qualities";

const Qualities = () => {
  return (
    <section className="qualities">
      <h2 className="qualities-title">What makes our brand different</h2>
      <AnimationOnScroll
        animatePreScroll={false}
        animateOnce
        animateIn="animate__fadeInLeft"
      >
        <div className="qualities-container">
          {qualities.map((q) => (
            <div key={q.title} className="qualities-item">
              {q.icon}
              <p className="qualities-item--title">{q.title}</p>
              <p className="qualities-item--description">{q.description}</p>
            </div>
          ))}
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default Qualities;
