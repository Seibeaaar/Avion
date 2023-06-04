import React from "react";
import Error404 from "src/assets/images/404.webp";
import "./ErrorPage.styles.scss";

const ErrorPage = () => (
  <main className="error">
    <img className="error-image" src={Error404} alt="404 Not found" />
    <h1 className="error-title">Oops, seems like this page is missing</h1>
    <p className="error-description">We are working on it</p>
  </main>
);

export default ErrorPage;
