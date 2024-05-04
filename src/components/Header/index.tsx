import Github from "../../assets/Github";
import LinkedIn from "../../assets/Linkedin";
import Magnus from "../../assets/magnus-westhofen.png";

import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src={Magnus} alt="Magnus Westhofen" />
        </div>
        <div className={classes.content}>
          <div className={classes.social}>
            <a
              href="https://github.com/groev"
              rel="noreferrer noopener"
              target="_blank"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/magnuswesthofen/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <LinkedIn />
            </a>
          </div>
          <h1>Magnus Westhofen</h1>
          <div className={classes.subline}>Software Developer</div>
          <div className={classes.description}>
            <p>
              Building stuff for the web with ❤️ since 2005. <br />
              Currently working at{" "}
              <a
                href="https://www.12-05.de"
                rel="noreferrer noopener"
                target="_blank"
              >
                12-05 Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
