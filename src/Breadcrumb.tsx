import * as React from "react";
import classNames from "classnames";

interface ItemProps {
  className?: string;
  href?: string;
  isActive?: boolean;
  // TODO: add icons
}

class BreadcrumbItem extends React.Component<ItemProps> {
  render() {
    const { children, href, isActive, className, ...props } = this.props;
    return (
      <li {...props} className={classNames(className, isActive && "is-active")}>
        <a href={href} aria-current={isActive ? "page" : undefined}>
          {children}
        </a>
      </li>
    );
  }
}

interface Props {
  className?: string;
  children?: React.ReactNode;
  hasArrowSeperator?: boolean;
  hasBulletSeperator?: boolean;
  hasDotSeperator?: boolean;
  hasSucceedsSeparator?: boolean;
  isCentered?: boolean;
  isLarge?: boolean;
  isMedium?: boolean;
  isRight?: boolean;
  isSmall?: boolean;
}

class Breadcrumb extends React.Component<Props> {
  static Item = BreadcrumbItem;
  render() {
    const {
      children,
      className,
      hasArrowSeperator,
      hasBulletSeperator,
      hasDotSeperator,
      hasSucceedsSeparator,
      isCentered,
      isLarge,
      isMedium,
      isRight,
      isSmall,
      ...props
    } = this.props;

    return (
      <nav
        {...props}
        className={classNames(
          "breadcrumb",
          className,
          hasArrowSeperator && "has-arrow-seperator",
          hasBulletSeperator && "has-bullet-seperator",
          hasDotSeperator && "has-dot-seperator",
          hasSucceedsSeparator && "has-succeeds-seperator",
          isCentered && "is-centered",
          isLarge && "is-large",
          isMedium && "is-medium",
          isRight && "is-right",
          isSmall && "is-small",
        )}
        aria-label="breadcrumbs"
      >
        {children && <ul>{children}</ul>}
      </nav>
    );
  }
}

export { Breadcrumb };
