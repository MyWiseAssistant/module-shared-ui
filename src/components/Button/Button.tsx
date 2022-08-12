import classnames from "classnames";
import React, { ReactChild, ReactChildren } from "react";

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
  children: React.ReactNode;
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
  const buttonStyles = classnames();
  const buttonTextStyles = classnames();

  const buttonChildren = (
    <>
      {icon ? (
        <span
          aria-hidden="true"
          style={{
            WebkitMaskImage: `url(${icon})`,
            maskImage: `url(${icon})`,
          }}
        ></span>
      ) : null}
      {loading ? <span>Loading</span> : null}
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
