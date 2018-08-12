import * as React from "react";
import { Level, LevelLeft, LevelRight, LevelItem } from "../Level";
import { create } from "react-test-renderer";

describe("Level", () => {
  it("should generate a level section", () => {
    const tree = create(
      <Level isMobile>
        <LevelLeft className="sample-class">
          <LevelItem hasTextCentered>
            <p className="heading">Tweets</p>
            <p className="title">3,456</p>
          </LevelItem>

          <LevelItem hasTextCentered>
            <p className="heading">Following</p>
            <p className="title">123</p>
          </LevelItem>
        </LevelLeft>
        <LevelRight className="sample-class">
          <LevelItem hasTextCentered>
            <p className="heading">Tweets</p>
            <p className="title">3,456</p>
          </LevelItem>

          <LevelItem hasTextCentered>
            <p className="heading">Following</p>
            <p className="title">123</p>
          </LevelItem>
        </LevelRight>
      </Level>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
