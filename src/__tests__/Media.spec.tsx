import * as React from "react";
import { Media, MediaLeft, MediaRight, MediaContent } from "../Media";
import { create } from "react-test-renderer";

describe("Level", () => {
  it("should generate a level section", () => {
    const tree = create(
      <Media>
        <MediaLeft className="sample-class">
          <MediaContent>Media Content</MediaContent>
        </MediaLeft>
        <MediaRight className="sample-class">
          <MediaContent>Media Content</MediaContent>
          <MediaContent>Media Content</MediaContent>
        </MediaRight>
      </Media>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
