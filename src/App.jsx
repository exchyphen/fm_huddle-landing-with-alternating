import "./App.css";

/* images */
import Logo from "./assets/images/logo.svg";
import ImgHero from "./assets/images/illustration-mockups.svg";
import ImgFeature1 from "./assets/images/illustration-grow-together.svg";
import ImgFeature2 from "./assets/images/illustration-flowing-conversation.svg";
import ImgFeature3 from "./assets/images/illustration-your-users.svg";
import IconLocation from "./assets/images/icon-location.svg";
import IconPhone from "./assets/images/icon-phone.svg";
import IconEmail from "./assets/images/icon-email.svg";

function App() {
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

      <main className="main">
        <article className="feature feature1">
          <hgroup className="feature__text">
            <h2 className="text--headings">Grow Together</h2>
            <div className="text--body">
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </div>
          </hgroup>
          <img
            className="feature__img"
            src={ImgFeature1}
            alt="feature img"
          ></img>
        </article>
        <article className="feature feature2">
          <img
            className="feature__img"
            src={ImgFeature2}
            alt="feature img"
          ></img>
          <hgroup className="feature__text">
            <h2 className="text--headings">Flowing Conversations</h2>
            <div className="text--body">
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </div>
          </hgroup>
        </article>
        <article className="feature feature3">
          <hgroup className="feature__text">
            <h2 className="text--headings">Your Users</h2>
            <div className="text--body">
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </div>
          </hgroup>
          <img
            className="feature__img"
            src={ImgFeature3}
            alt="feature img"
          ></img>
        </article>
      </main>

      <footer className="footer text--footer">
        <article className="footer__floating-container">
          <h3 className="text--headings">Ready To Build Your Community?</h3>
          <button className="button--dark">Get Started For Free</button>
        </article>

        <article className="footer__main-container">
          <img className="footer__logo" src={Logo} alt="footer logo"></img>

          <div className="footer__content-container">
            <div className="footer__contact-container">
              <div className="footer__address-container">
                <img
                  className="footer__contact-img"
                  src={IconLocation}
                  alt="location icon"
                ></img>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="footer__address-container">
                <img
                  className="footer__contact-img"
                  src={IconPhone}
                  alt="phone icon"
                ></img>
                <p>+1-543-123-4567</p>
              </div>
              <div className="footer__address-container">
                <img
                  className="footer__contact-img"
                  src={IconEmail}
                  alt="email icon"
                ></img>
                <p>example@huddle.com</p>
              </div>
            </div>

            <div className="footer__sitemap">
              <div className="footer__sitemap-section">
                <a>About Us</a>
                <a>What We Do</a>
                <a>FAQ</a>
              </div>
              <div className="footer__sitemap-section">
                <a>Career</a>
                <a>Blog</a>
                <a>Contact Us</a>
              </div>
            </div>

            <div className="footer__socials-container">
              <i className="fa-brands fa-facebook-f social-img"></i>
              <i className="fa-brands fa-twitter social-img"></i>
              <i className="fa-brands fa-instagram social-img"></i>
            </div>
          </div>

          <div className="footer__right-container">
            <p className="footer__copyright">
              &copy; Copyright 2018 Huddle. All rights reserved.
            </p>

            <p className="attribution">
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
              >
                Frontend Mentor
              </a>
              . Coded by{" "}
              <a href="https://github.com/exchyphen" target="_blank">
                exc
              </a>
              .
            </p>
          </div>
        </article>
      </footer>
    </>
  );
}

export default App;
