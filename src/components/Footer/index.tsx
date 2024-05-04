import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <p></p>
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
