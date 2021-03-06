import * as React from "react";
import classNames from "classnames";

class LevelLeft extends React.Component<ItemProps> {
  render() {
    const { children, className, ...props } = this.props;
    return (
      <div {...props} className={classNames(className, "level-left")}>
        {children}
      </div>
    );
  }
}

class LevelRight extends React.Component<ItemProps> {
  render() {
    const { children, className, ...props } = this.props;
    return (
      <div {...props} className={classNames(className, "level-right")}>
        {children}
      </div>
    );
  }
}

interface ItemProps {
  children?: React.ReactNode;
  className?: string;
  hasTextCentered?: boolean;
}

class LevelItem extends React.Component<ItemProps> {
  render() {
    const { children, className, hasTextCentered, ...props } = this.props;
    return (
      <div {...props} className={classNames(className, "level-item", hasTextCentered && "has-text-centered")}>
        {children}
      </div>
    );
  }
}

interface Props {
  className?: string;
  children?: React.ReactNode;
  isMobile?: boolean;
}

class Level extends React.Component<Props> {
  static Left = LevelLeft;
  static Right = LevelRight;
  static Item = LevelItem;

  render() {
    const { children, className, isMobile, ...props } = this.props;

    return (
      <nav {...props} className={classNames("level", isMobile && "is-mobile", className)} aria-label="breadcrumbs">
        {children && <ul>{children}</ul>}
      </nav>
    );
  }
}

export { Level };
