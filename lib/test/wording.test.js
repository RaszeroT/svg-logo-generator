const Wording = require("../js/wording");

describe("text color", () => {
  it("should render correct text color", () => {
    const textColor = new Wording();
    expect(textColor.setText('red', 'TJS')).toEqual(
      '<text x="130" y="85" text-anchor="middle" font-size="45" fill="red">TJS</text>'
    );
  });
});
