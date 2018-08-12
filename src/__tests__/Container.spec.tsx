import * as React from "react";
import { create } from "react-test-renderer";

import { Container } from "../";

describe("Container", () => {
  it("should generate a container", () => {
    const tree = create(
      <Container isFluid isWidescreen isFullHD>
        Sample container
      </Container>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
