import * as React from "react";
import { create } from "react-test-renderer";

import { Hero } from "..";

describe("Hero", () => {
  it("should generate a hero", () => {
    const tree = create(
      <Hero
        isPrimary
        isInfo
        isSuccess
        isWarning
        isDanger
        isLight
        isDark
        isBold
        isMedium
        isLarge
        isFullHeight
        className={"test-class"}
      >
        <Hero.Body>Sample Website Title</Hero.Body>
      </Hero>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
