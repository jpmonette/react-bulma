import * as React from "react";
import classNames from "classnames";

interface MediaProps {
  className?: string;
  children?: React.ReactNode;
}

const Media = ({ children, className, ...props }: MediaProps) => (
  <article {...props} className={classNames(className, "media")}>
    {children}
  </article>
);

const MediaContent = ({ children, className, ...props }: MediaProps) => (
  <div {...props} className={classNames(className, "media-content")}>
    {children}
  </div>
);

const MediaLeft = ({ children, className, ...props }: MediaProps) => (
  <div {...props} className={classNames(className, "media-left")}>
    {children}
  </div>
);

const MediaRight = ({ children, className, ...props }: MediaProps) => (
  <div {...props} className={classNames(className, "media-right")}>
    {children}
  </div>
);

export { Media, MediaContent, MediaLeft, MediaRight };
