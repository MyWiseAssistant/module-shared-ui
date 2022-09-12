import React from "react";
import cx from "classnames";

import styles from "./container.module.scss";

export interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
  maxWidth?: string;
}

const Container = ({
  children,
  className,
  maxWidth = "1000px",
}: ContainerProps) => {
  const containerClassNames = cx(styles.container, className);

  return (
    <>
      <div className={containerClassNames} style={{ maxWidth }}>
        {children}
      </div>
    </>
  );
};

export default Container;
