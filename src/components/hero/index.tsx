import React from "react";
import Button, { Size, Theme } from "../button";
// import Grid from "../Grid";

import styles from "./hero.module.scss";
import cx from "classnames";

export interface HeroProps {
  pageTitle: string;
  image: string;
  height?: string;
  children?: React.ReactNode;
}

const Hero = ({ pageTitle, image, height = "100vh", children }: HeroProps) => (
  <div
    className={cx(styles.heroContainer, {
      [styles.homeHero]: pageTitle === "Home",
    })}
    style={{
      background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
      height,
    }}
  >
    {children ? (
      <div className={styles.homeContent}>{children}</div>
    ) : (
      <div className={styles.pageTitle}>
        <h2>{pageTitle}</h2>
      </div>
    )}
  </div>
);

export default Hero;
