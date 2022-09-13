import React from "react";
import cx from "classnames";

import styles from "./columns.module.scss";

export interface ColumnsProps {
  children: React.ReactNode[];
  className?: string;
  mobileReverse?: boolean;
  mobileColumns?: number;
  tabletColumns?: number;
  desktopColumns?: number;
}

const Columns = ({
  children,
  className,
  mobileColumns = 1,
  tabletColumns = 2,
  desktopColumns = 3,
  mobileReverse = false,
}: ColumnsProps) => (
  <div
    className={cx(
      className,
      styles.columns,
      mobileReverse && styles.mobileReverse
    )}
  >
    {children.map((child, index) => (
      <div
        key={index}
        className={cx(styles.column, {
          [styles.mobileOneColumn]: mobileColumns === 1,
          [styles.mobileTwoColumns]: mobileColumns === 2,
          [styles.mobileThreeColumns]: mobileColumns === 3,
          [styles.tabletOneColumn]: tabletColumns === 1,
          [styles.tabletTwoColumns]: tabletColumns === 2,
          [styles.tabletThreeColumns]: tabletColumns === 3,
          [styles.tabletFourColumns]: tabletColumns === 4,
          [styles.desktopOneColumn]: desktopColumns === 1,
          [styles.desktopTwoColumns]: desktopColumns === 2,
          [styles.desktopThreeColumns]: desktopColumns === 3,
          [styles.desktopFourColumns]: desktopColumns === 4,
          [styles.desktopFiveColumns]: desktopColumns === 5,
          [styles.desktopSixColumns]: desktopColumns === 6,
        })}
      >
        {child}
      </div>
    ))}
  </div>
);

export default Columns;
