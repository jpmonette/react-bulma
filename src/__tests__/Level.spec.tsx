import * as React from "react";
import { create } from "react-test-renderer";

import { Level } from "../";

describe("Level", () => {
  it("should generate a level section", () => {
    const tree = create(
      <Level isMobile>
        <Level.Left className="sample-class">
          <Level.Item hasTextCentered>
            <p className="heading">Tweets</p>
            <p className="title">3,456</p>
          </Level.Item>

          <Level.Item hasTextCentered>
            <p className="heading">Following</p>
            <p className="title">123</p>
          </Level.Item>
        </Level.Left>
        <Level.Right className="sample-class">
          <Level.Item hasTextCentered>
            <p className="heading">Tweets</p>
            <p className="title">3,456</p>
          </Level.Item>

          <Level.Item hasTextCentered>
            <p className="heading">Following</p>
            <p className="title">123</p>
          </Level.Item>
        </Level.Right>
      </Level>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
