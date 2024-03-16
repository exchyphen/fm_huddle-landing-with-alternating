import { useState } from "react";
import "./App.css";

/* images */
import Logo from "./assets/images/logo.svg";
import ImgHero from "./assets/images/illustration-mockups.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <nav className="nav">
          <img className="nav__logo" src={Logo} alt="nav logo"></img>
          <button className="button--light text--bold">Try it Free</button>
        </nav>

        <article className="hero">
          <div className="hero__text-container">
            <h1 className="text--headings">
              Build The Community Your Fans Will Love
            </h1>
            <p className="hero__description text--body">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className="button--dark text--bold">
              Get Started For Free
            </button>
          </div>
          <img className="hero__img" src={ImgHero} alt="hero img"></img>
        </article>
      </header>

      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/exchyphen" target="_blank">
            exc
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
