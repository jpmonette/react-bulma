import * as React from "react";
import classNames from "classnames";

interface MediaProps {
  className?: string;
  children?: React.ReactNode;
}

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

class Media extends React.Component<MediaProps> {
  static Left = MediaLeft;
  static Right = MediaRight;
  static Content = MediaContent;

  render() {
    const { children, className, ...props } = this.props;

    return (
      <article {...props} className={classNames(className, "media")}>
        {children}
      </article>
    );
  }
}

export { Media };
