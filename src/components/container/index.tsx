import React from "react";
import cx from "classnames";

import styles from "./container.module.scss";

export interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
  maxWidth?: string;
  backgroundColor?: string;
  first?: boolean;
  last?: boolean;
}

const Container = ({
  children,
  className,
  maxWidth = "1000px",
  backgroundColor = "transparent",
  first = false,
  last = false,
}: ContainerProps) => {
  const containerClassNames = cx(styles.container, className, {
    [styles.first]: first,
    [styles.last]: last,
  });

  return (
    <div className={styles.fullWidthContainer} style={{ backgroundColor }}>
      <div className={containerClassNames} style={{ maxWidth }}>
        {children}
      </div>
    </div>
  );
};

export default Container;
