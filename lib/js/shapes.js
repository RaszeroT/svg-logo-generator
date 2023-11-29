
// shapes
class Shape {
  constructor() {
    this.color = '';
  }
  setColor(color) {
    this.color = color
  }
}

// circle
class Circle extends Shape {
  render() {
    return `<circle cx="129" cy="68" r="60" fill="${this.color}" />`;
  }
}

// triangle
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// square
class Square extends Shape {
  render() {
    return `<rect x="35" y="" width="190" height="190" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
