import * as React from "react";
import classNames from "classnames";

interface Props {
  className?: string;
  children?: React.ReactNode;
  isFluid?: boolean;
  isWidescreen?: boolean;
  isFullHD?: boolean;
}

class Container extends React.Component<Props> {
  render() {
    const { children, className, isFluid, isWidescreen, isFullHD, ...props } = this.props;

    return (
      <div
        {...props}
        className={classNames(
          "container",
          className,
          isFluid && "is-fluid",
          isWidescreen && "is-widescreen",
          isFullHD && "is-fullhd",
        )}
      >
        {children}
      </div>
    );
  }
}

export { Container };
