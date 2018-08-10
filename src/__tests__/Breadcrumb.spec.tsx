import * as React from "react";
import { Breadcrumb, BreadcrumbItem as Item } from "../Breadcrumb";
import { create } from "react-test-renderer";

describe("Breadcrumb", () => {
  it("should generate an empty breadcrumb", () => {
    const tree = create(<Breadcrumb />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should generate a breadcrumb", () => {
    const children = [
      <Item key={0} href={"/home"} isActive={true}>
        Home
      </Item>,
      <Item key={1} isActive={true}>
        About
      </Item>
    ];

    const tree = create(
      <Breadcrumb hasArrowSeperator={true} className={"custom-class"} isCentered isLarge>
        {children}
      </Breadcrumb>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("Breadcrumb.Item", () => {
  it("should generate an item", () => {
    const tree = create(
      <Item key={0} href={"/home"} isActive={true}>
        Home
      </Item>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
