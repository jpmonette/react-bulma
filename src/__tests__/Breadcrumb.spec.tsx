import * as React from "react";
import { create } from "react-test-renderer";

import { Breadcrumb } from "../";

describe("Breadcrumb", () => {
  it("should generate an empty breadcrumb", () => {
    const tree = create(
      <Breadcrumb
        hasArrowSeperator={true}
        hasBulletSeperator={true}
        hasDotSeperator={true}
        hasSucceedsSeparator={true}
        isCentered={true}
        isLarge={true}
        isMedium={true}
        isRight={true}
        isSmall={true}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should generate a breadcrumb", () => {
    const children = [
      <Breadcrumb.Item key={0} href={"/home"}>
        Home
      </Breadcrumb.Item>,
      <Breadcrumb.Item key={1} className={"about"} isActive={true}>
        About
      </Breadcrumb.Item>,
    ];

    const tree = create(
      <Breadcrumb hasArrowSeperator={true} className={"custom-class"} isCentered isLarge>
        {children}
      </Breadcrumb>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("Breadcrumb.Item", () => {
  it("should generate an item", () => {
    const tree = create(
      <Breadcrumb.Item key={0} href={"/home"} isActive={true}>
        Home
      </Breadcrumb.Item>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
