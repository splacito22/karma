const { Triangle, Square, Circle } = require("../lib/shapes");

describe("Triangle Class", () => {
  test("test for a triangle with a blue background", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");

    expect(triangle.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

describe("Square Class", () => {
  test("test for a square with a yellow background", () => {
    const square = new Square();
    square.setColor("yellow");

    expect(square.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="yellow" />'
    );
  });
});

describe("Circle Class", () => {
  test("test for a circle with a pink background", () => {
    const circle = new Circle();
    circle.setColor("pink");

    expect(circle.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="pink" />'
    );
  });
});
