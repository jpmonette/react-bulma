import * as React from "react";
import { Hero, HeroBody } from "../Hero";
import { create } from "react-test-renderer";

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
        <HeroBody>Sample Website Title</HeroBody>
      </Hero>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
