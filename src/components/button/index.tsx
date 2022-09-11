import React, { LegacyRef } from "react";
import cx from "classnames";
import useHover from "../../helpers/buttonUseHover";

import styles from "./button.module.scss";

export enum Theme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum Size {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export interface ButtonProps {
  theme?: Theme;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  color?: string;
  hoverColor?: string;
  borderRadius?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  size?: Size;
  label: string;
  onClick?: () => void;
  href?: string;
}

const Button = ({
  theme = Theme.PRIMARY,
  size = Size.MEDIUM,
  backgroundColor = "#498b8d",
  hoverBackgroundColor = "#000000",
  color = "#000000",
  hoverColor = "#498b8d",
  borderRadius = 2,
  label,
  href,
  onClick,
}: ButtonProps) => {
  const [hoverRef, isHovered] = useHover();

  const buttonStyles = {
    [styles.primary]: theme === Theme.PRIMARY,
    [styles.secondary]: theme === Theme.SECONDARY,
    [styles.small]: size === Size.SMALL,
    [styles.medium]: size === Size.MEDIUM,
    [styles.large]: size === Size.LARGE,
    [styles.radius0]: borderRadius === 0,
    [styles.radius1]: borderRadius === 1,
    [styles.radius2]: borderRadius === 2,
    [styles.radius3]: borderRadius === 3,
    [styles.radius4]: borderRadius === 4,
    [styles.radius5]: borderRadius === 5,
    [styles.radius6]: borderRadius === 6,
    [styles.radius7]: borderRadius === 7,
    [styles.radius8]: borderRadius === 8,
  };

  return !href ? (
    <button
      type="button"
      className={cx(styles.button, buttonStyles)}
      ref={hoverRef as LegacyRef<HTMLButtonElement>}
      style={
        theme === Theme.PRIMARY
          ? {
              backgroundColor: isHovered
                ? hoverBackgroundColor
                : backgroundColor,
              color: isHovered ? hoverColor : color,
            }
          : theme === Theme.SECONDARY
          ? {
              backgroundColor: "transparent",
              color: isHovered ? hoverBackgroundColor : backgroundColor,
              borderColor: isHovered ? hoverBackgroundColor : backgroundColor,
            }
          : undefined
      }
      onClick={onClick}
    >
      {label}
    </button>
  ) : (
    <a
      type="button"
      className={cx(styles.button, buttonStyles)}
      ref={hoverRef as LegacyRef<HTMLAnchorElement>}
      style={
        theme === Theme.PRIMARY
          ? {
              backgroundColor: isHovered
                ? hoverBackgroundColor
                : backgroundColor,
              color: isHovered ? hoverColor : color,
            }
          : theme === Theme.SECONDARY
          ? {
              backgroundColor: "transparent",
              color: isHovered ? hoverBackgroundColor : backgroundColor,
              borderColor: isHovered ? hoverBackgroundColor : backgroundColor,
            }
          : undefined
      }
      href={href}
      onClick={onClick}
    >
      {label}
    </a>
  );
};

export default Button;
