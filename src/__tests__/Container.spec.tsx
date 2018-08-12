import * as React from "react";
import { Container } from "../Container";
import { create } from "react-test-renderer";

describe("Container", () => {
  it("should generate a container", () => {
    const tree = create(
      <Container isFluid isWidescreen isFullHD>
        Sample container
      </Container>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
