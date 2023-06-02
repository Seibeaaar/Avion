import React from "react";
import benefits from "src/constants/benefits";
import { ReactComponent as WhiteCheckmark } from "src/assets/icons/WhiteCheckmark.svg";
import "./JoinSubscription.styles.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Button from "../Button";
import Input from "../Input";

const JoinSubscription = () => (
  <section className="subscription">
    <AnimationOnScroll
      animatePreScroll={false}
      animateOnce
      animateIn="animate__fadeInDown"
    >
      <h3 className="subscription-title">Join the club and get the benefits</h3>
      <p className="subscription-info">
        Sign up for our newsletter and receive exclusive offers on new ranges,
        sales, pop up stores and more
      </p>
      <div className="subscription-benefits">
        {benefits.map((benefit) => (
          <div key={benefit} className="subscription-benefits--item">
            <WhiteCheckmark />
            <p className="subscription-benefits--text">{benefit}</p>
          </div>
        ))}
      </div>
      <form className="subscription-form">
        <Input type="email" placeholder="Enter your e-mail" />
        <Button variant="primary" text="Join now" />
      </form>
    </AnimationOnScroll>
  </section>
);

export default JoinSubscription;
