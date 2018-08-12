import classNames from "classnames";
import * as React from "react";

interface HeroBodyProps {
  className?: string;
  children?: Element | JSX.Element | string;
}

const HeroBody = ({ children, className, ...props }: HeroBodyProps) => (
  <div {...props} className={classNames(className, "hero-body")}>
    {children}
  </div>
);

interface HeroProps {
  className?: string;
  children?: React.ReactNode;
  isPrimary?: boolean;
  isInfo?: boolean;
  isSuccess?: boolean;
  isWarning?: boolean;
  isDanger?: boolean;
  isLight?: boolean;
  isDark?: boolean;
  isBold?: boolean;
  isMedium?: boolean;
  isLarge?: boolean;
  isFullHeight?: boolean;
}

class Hero extends React.Component<HeroProps> {
  static Body = HeroBody;

  render() {
    const {
      children,
      className,
      isPrimary,
      isInfo,
      isSuccess,
      isWarning,
      isDanger,
      isLight,
      isDark,
      isBold,
      isMedium,
      isLarge,
      isFullHeight,
      ...props
    } = this.props;

    return (
      <section
        {...props}
        className={classNames(
          className,
          "hero",
          isPrimary && "is-primary",
          isInfo && "is-info",
          isSuccess && "is-success",
          isWarning && "is-warning",
          isDanger && "is-danger",
          isLight && "is-light",
          isDark && "is-dark",
          isBold && "is-bold",
          isMedium && "is-medium",
          isLarge && "is-large",
          isFullHeight && "is-fullheight",
        )}
      >
        {children}
      </section>
    );
  }
}
export { Hero };
