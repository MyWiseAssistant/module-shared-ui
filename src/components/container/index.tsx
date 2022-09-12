import React from "react";
import cx from "classnames";

import styles from "./container.module.scss";

export interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
  maxWidth?: string;
  backgroundColor?: string;
}

const Container = ({
  children,
  className,
  maxWidth = "1000px",
  backgroundColor = "white",
}: ContainerProps) => {
  const containerClassNames = cx(styles.container, className);

  return (
    <div className={styles.fullWidthContainer} style={{ backgroundColor }}>
      <div className={containerClassNames} style={{ maxWidth }}>
        {children}
      </div>
    </div>
  );
};

export default Container;
