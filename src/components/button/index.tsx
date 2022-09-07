import clsx from "clsx";
import React, { ReactChild, ReactChildren } from "react";

import styles from "./button.module.scss";

export enum Theme {
  PRIMARY_THEME = "primary",
  SECONDARY_THEME = "secondary",
  TERTIARY_THEME = "tertiary",
  MONOCHROME_THEME = "monochrome",
}

export enum Size {
  SMALL_SIZE = "small",
  MEDIUM_SIZE = "medium",
  LARGE_SIZE = "large",
}

export interface ButtonProps {
  scale?: Size;
  theme?: Theme;
  onClick?: (event?: any) => void;
  href?: string;
  block?: boolean;
  icon?: any;
  iconOnly?: boolean;
  iconLast?: boolean;
  loading?: boolean;
  children?: ReactChild | ReactChildren;
  className?: string;
  useAnchor?: boolean;
}

/**
 * Primary UI component for user interaction
 */

const Button: React.FC<
  ButtonProps &
    (React.HTMLProps<HTMLButtonElement> | React.HTMLProps<HTMLAnchorElement>)
> = ({
  theme = Theme.SECONDARY_THEME,
  scale = Size.MEDIUM_SIZE,
  block,
  icon,
  iconLast,
  iconOnly,
  loading,
  children,
  className,
  useAnchor,
  ...props
}) => {
  const buttonStyles = clsx(styles.button, className, {
    [styles.buttonPrimary]: theme === Theme.PRIMARY_THEME,
    [styles.buttonSecondary]: theme === Theme.SECONDARY_THEME,
    [styles.buttonTertiary]: theme === Theme.TERTIARY_THEME,
    [styles.buttonMonochrome]: theme === Theme.MONOCHROME_THEME,
    [styles.buttonSmall]: scale === Size.SMALL_SIZE,
    [styles.buttonMedium]: scale === Size.MEDIUM_SIZE,
    [styles.buttonLarge]: scale === Size.LARGE_SIZE,
    [styles.buttonBlock]: block,
    [styles.buttonIconLast]: iconLast,
    [styles.buttonLoading]: loading,
    [styles.buttonIconOnly]: iconOnly,
  });
  const buttonTextStyles = clsx(styles.buttonText, {
    srOnly: iconOnly,
  });

  const buttonChildren = (
    <>
      {icon ? (
        <span
          className={styles.buttonIcon}
          aria-hidden="true"
          style={{
            WebkitMaskImage: `url(${icon})`,
            maskImage: `url(${icon})`,
          }}
        ></span>
      ) : null}
      {loading ? <span className={styles.buttonLoader}>Loading</span> : null}
      <span className={buttonTextStyles} aria-hidden={loading}>
        {children}
      </span>
    </>
  );

  const elementType = props.href || useAnchor ? "a" : "button";
  let buttonType = {};
  if (elementType === "button" && props.onClick) {
    buttonType = { type: props.type || "button" };
  }
  const finalProps = {
    ...props,
    ...buttonType,
  };

  return (
    <>
      {React.createElement(
        elementType,
        { disabled: loading, ...finalProps, className: buttonStyles },
        buttonChildren
      )}
    </>
  );
};

export default Button;
