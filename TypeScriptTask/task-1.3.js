var Rectangle = /** @class */ (function () {
  function Rectangle(length, width) {
    if (length === void 0) {
      length = 1.0;
    }
    if (width === void 0) {
      width = 1.0;
    }
    this.length = length;
    this.width = width;
  }
  Rectangle.prototype.getLength = function () {
    return this.length;
  };
  Rectangle.prototype.setLength = function (length) {
    this.length = length;
  };
  Rectangle.prototype.getWidth = function () {
    return this.width;
  };
  Rectangle.prototype.setWidth = function (width) {
    this.width = width;
  };
  Rectangle.prototype.getArea = function () {
    return this.length * this.width;
  };
  Rectangle.prototype.getPerimeter = function () {
    return 2 * (this.length + this.width);
  };
  Rectangle.prototype.toString = function () {
    return "Rectangle[length="
      .concat(this.length, ",width=")
      .concat(this.width, "]");
  };
  return Rectangle;
})();
// Example usage
var rectangle1 = new Rectangle(1.2, 3.4);
console.log(rectangle1.toString());
var rectangle2 = new Rectangle();
console.log(rectangle2.toString());
var rectangle3 = new Rectangle(5.6, 7.8);
console.log(rectangle3.toString());
console.log("length is: ".concat(rectangle3.getLength()));
console.log("width is: ".concat(rectangle3.getWidth()));
console.log("area is: ".concat(rectangle3.getArea().toFixed(2)));
console.log("perimeter is: ".concat(rectangle3.getPerimeter().toFixed(2)));
console.log("================================================================");
