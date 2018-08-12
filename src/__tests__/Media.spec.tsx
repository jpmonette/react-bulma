import * as React from "react";
import { create } from "react-test-renderer";

import { Media } from "../";

describe("Level", () => {
  it("should generate a level section", () => {
    const tree = create(
      <Media>
        <Media.Left className="sample-class">
          <Media.Content>Media Content</Media.Content>
        </Media.Left>
        <Media.Right className="sample-class">
          <Media.Content>Media Content</Media.Content>
          <Media.Content>Media Content</Media.Content>
        </Media.Right>
      </Media>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
