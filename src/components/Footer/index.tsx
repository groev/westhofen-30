import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <p>
          Having cultivated a <b>passion</b> for crafting
          <b>digital experiences</b> since high school, I've amassed over{" "}
          <b>15 years</b> of experience specializing in full-stack web and
          mobile app development. With a focus on <b>design</b>,{" "}
          <b>architecture</b>, and both <b>frontend</b> and <b>backend</b>{" "}
          development, I take pride in leveraging <b>JavaScript</b> technologies
          like <b>React</b>, <b>Next.js</b>, and <b>Node.js</b> to build
          innovative applications.
        </p>
        <p>
          Feel free to reach out at{" "}
          <a href="mailto:magnuswesthofen@icloud.com">
            magnuswesthofen@icloud.com
          </a>{" "}
          if you're interested in collaborating!
        </p>
      </div>
    </div>
  );
}
